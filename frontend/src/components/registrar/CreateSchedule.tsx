import { useEffect, useState } from "react";
import Select from "react-select";
import { getPrograms } from "../../api/programs";
import { IProgram } from "../../interface/IProgram";
import { getCourses } from "../../api/course";
import { ICourse } from "../../interface/ICourse";
import { getEmployeees } from "../../api/employee";
import { IEmployeeGet } from "../../interface/IEmployee";
import { useForm, Controller } from "react-hook-form";
import { ISubjectSchedule } from "../../interface/ISchedule";
import { Slide, toast } from "react-toastify";
import { addSchedule } from "../../api/schedule";
import { IRoom } from "../../interface/IRoom";
import { getRooms } from "../../api/room";
import { convertMilitaryTo12Hour } from "../../Helper";

interface IOption {
  value: string;
  label: string;
}

const semesterOptions = [
  { value: "1st", label: "First semester" },
  { value: "2nd", label: "Second semester" },
  { value: "summer", label: "Summer" },
];

const dayOptions = [
  { value: "sun", label: "Sunday" },
  { value: "mon", label: "Monday" },
  { value: "tue", label: "Tuesday" },
  { value: "wed", label: "Wednesday" },
  { value: "thu", label: "Thursday" },
  { value: "fri", label: "Friday" },
  { value: "sat", label: "Saturday" },
];

function CreateSchedule() {
  const scheduleForm = useForm();
  const subjectForm = useForm();
  const [programOptions, setProgramOptions] = useState<IOption[]>([]);
  const [courseOptions, setCourseOptions] = useState<IOption[]>([]);
  const [instructorOptions, setInstructorOptions] = useState<IOption[]>([]);
  const [roomOptions, setRoomOptions] = useState<IOption[]>([]);
  const [subjectSchedules, setSubjectSchedules] = useState<ISubjectSchedule[]>(
    []
  );

  const loadOptions = async () => {
    const programs = await getPrograms();
    const courses = await getCourses();
    const employees = await getEmployeees();
    const rooms = await getRooms();

    setProgramOptions(
      programs.results.map((program: IProgram) => {
        return { value: program._id, label: program.programName };
      })
    );
    setCourseOptions(
      courses.results.map((course: ICourse) => {
        return { value: course._id, label: course.courseName };
      })
    );

    setInstructorOptions(
      employees.map((employee: IEmployeeGet) => {
        return {
          value: employee._id,
          label: `${employee.firstName} ${employee.surname}`,
        };
      })
    );

    setRoomOptions(
      rooms.map((room: IRoom) => {
        return {
          value: room._id,
          label: room.building + room.room,
        };
      })
    );
  };

  const onSubjectSubmit = (data: any) => {
    setSubjectSchedules((prevState) => [...prevState, data]);
  };

  const onScheduleSubmit = (data: any) => {
    const date = new Date();

    if (subjectSchedules.length == 0) {
      toast.error("Must have at least one subject", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }

    data.schoolYear = `${date.getFullYear()}-${date.getFullYear() + 1}`;
    data.subjectSchedules = subjectSchedules;
    console.log(data);

    try {
      addSchedule(data);
      toast.success("Schedule added successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  useEffect(() => {
    loadOptions();
  }, []);

  return (
    <main className="flex flex-col gap-8 w-full mx-16 my-8">
      <header className="flex justify-between items-center h-12">
        <p className="text-2xl font-bold">Schedule</p>
        <form
          className="flex gap-4"
          onSubmit={scheduleForm.handleSubmit(onScheduleSubmit)}
        >
          <Controller
            control={scheduleForm.control}
            name="program"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={programOptions}
                value={programOptions.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
                className="w-96"
              />
            )}
          />
          <Controller
            control={scheduleForm.control}
            name="semester"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={semesterOptions}
                value={semesterOptions.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
                className="w-48"
              />
            )}
          />
          {/* <Select options={semesterOptions} className="w-48" /> */}
          <button
            type="submit"
            className="px-4 rounded-md text-white bg-blue-600"
          >
            Submit schedule
          </button>
        </form>
      </header>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-scheduleCreate gap-2">
            <th>Subject</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Days</th>
            <th>Room</th>
            <th>Instructor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjectSchedules.map((subjectSchedule) => (
            <tr className="grid grid-cols-scheduleCreate justify-center gap-2">
              <td>
                {
                  courseOptions.find(
                    (course) => course.value == subjectSchedule.courseID
                  )?.label
                }
              </td>
              <td className="text-center">
                {convertMilitaryTo12Hour(subjectSchedule.timeStart)}
              </td>
              <td className="text-center">
                {convertMilitaryTo12Hour(subjectSchedule.timeEnd)}
              </td>
              <td className="text-center">
                {subjectSchedule.day
                  .map((day) => dayOptions.find((d) => d.value == day)?.label)
                  .join(" / ")}
              </td>
              <td className="text-center">
                {
                  roomOptions.find((room) => room.value == subjectSchedule.room)
                    ?.label
                }
              </td>
              <td className="text-center">
                {
                  instructorOptions.find(
                    (instructor) =>
                      instructor.value == subjectSchedule.instructorID
                  )?.label
                }
              </td>
              <td className="text-end">Edit / Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        className="grid grid-cols-scheduleCreate gap-2"
        onSubmit={subjectForm.handleSubmit(onSubjectSubmit)}
      >
        <Controller
          control={subjectForm.control}
          name="courseID"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={courseOptions}
              value={courseOptions.find(
                (option) => option.value === field.value
              )}
              onChange={(option) => field.onChange(option?.value)}
            />
          )}
        />
        <input
          {...subjectForm.register("timeStart")}
          type="time"
          className="w-full h-full px-2 border-[#cccccc] rounded-[4px]"
          required
        />
        <input
          {...subjectForm.register("timeEnd")}
          type="time"
          className="w-full h-full px-2 border-[#cccccc] rounded-[4px]"
          required
        />
        <Controller
          control={subjectForm.control}
          name="day"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={dayOptions}
              isMulti={true}
              value={dayOptions.filter((option) =>
                field.value?.includes(option.value)
              )}
              onChange={(selectedOptions) =>
                field.onChange(
                  selectedOptions
                    ? selectedOptions.map((option) => option.value)
                    : []
                )
              }
            />
          )}
        />
        <Controller
          control={subjectForm.control}
          name="room"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={roomOptions}
              value={courseOptions.find(
                (option) => option.value === field.value
              )}
              onChange={(option) => field.onChange(option?.value)}
            />
          )}
        />
        <Controller
          control={subjectForm.control}
          name="instructorID"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              options={instructorOptions}
              {...field}
              value={courseOptions.find(
                (option) => option.value === field.value
              )}
              onChange={(option) => field.onChange(option?.value)}
            />
          )}
        />
        <button
          type="submit"
          className="px-4 rounded-md text-white bg-blue-600"
        >
          Add subject
        </button>
      </form>
    </main>
  );
}

export default CreateSchedule;
