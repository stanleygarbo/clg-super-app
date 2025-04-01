import { useEffect, useState } from "react";
import Select from "react-select";
import { getPrograms } from "../../api/programs";
import { getCourses } from "../../api/course";
import { ICourse, ICourseGet } from "../../interface/ICourse";
import { getEmployees } from "../../api/employee";
import { IEmployeeGet } from "../../interface/IEmployee";
import { useForm, Controller } from "react-hook-form";
import { ISubjectSchedule } from "../../interface/ISchedule";
import { Slide, toast } from "react-toastify";
import { addSchedule } from "../../api/schedule";
import { IRoomGet } from "../../interface/IRoom";
import { getRooms } from "../../api/room";
import { convertMilitaryTo12Hour } from "../../Helper";
import { useQuery } from "@tanstack/react-query";
import { IProgramGet } from "../../interface/IProgram";
import SubjectForm from "./SubjectForm";

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

function ScheduleForm() {
  const scheduleForm = useForm();
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<string>();
  const [subjectSchedules, setSubjectSchedules] = useState<ISubjectSchedule[]>(
    []
  );
  const [submittedCourses, setSubmittedCourses] = useState<string[]>([]);

  const intructor = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const room = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const programs = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const courses = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const roomOptions: IOption[] = room.data?.map((room: IRoomGet) => {
    return {
      value: room._id,
      label: room.building + room.room,
    };
  });

  const instructorOptions: IOption[] = intructor.data?.results.map(
    (ins: IEmployeeGet) => {
      return {
        value: ins._id,
        label: `${ins.surname}, ${ins.firstName[0]}`,
      };
    }
  );

  const programOptions: IOption[] = programs.data?.results.map(
    (prog: IProgramGet) => {
      return {
        value: prog._id,
        label: prog.programAcronym,
      };
    }
  );

  const courseOptions: IOption[] = courses.data?.results.map(
    (course: ICourse) => ({
      value: course._id,
      label: course.courseName,
    })
  );

  const onSubjectSubmit = (data: any) => {
    setSubjectSchedules((prevState) => [...prevState, data]);
    setSubmittedCourses((prevState) => [...prevState, data.courseID]);
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

  const loadProgramCourses = async () => {
    if (!selectedProgram) return;
    const filtered = courses.data?.results.filter((course: ICourseGet) =>
      course.program
        ?.map((prog: IProgramGet) => {
          return prog?._id;
        })
        .includes(selectedProgram)
    );
    setFilteredCourses(filtered);
  };

  useEffect(() => {
    loadProgramCourses();
    // toast("Loaded");
  }, [selectedProgram]);

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
                value={programOptions?.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => {
                  field.onChange(option?.value);
                  setSelectedProgram(option?.value);
                  // toast(selectedProgram);
                }}
                className="w-32"
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
                value={semesterOptions?.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
                className="w-48"
              />
            )}
          />
          <button
            type="submit"
            className="px-4 rounded-md text-white font-semibold bg-blue-700 hover:bg-blue-600 active:scale-90 duration-200"
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
                  roomOptions.find(
                    (room: IOption) => room.value == subjectSchedule.room
                  )?.label
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
      {filteredCourses
        .filter((course) => !submittedCourses.includes(course._id)) // Hide submitted courses
        .map((course) => (
          <SubjectForm
            key={course._id}
            submitCallback={onSubjectSubmit}
            course={course}
          />
        ))}
    </main>
  );
}

export default ScheduleForm;
