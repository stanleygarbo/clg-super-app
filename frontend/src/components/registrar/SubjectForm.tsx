import Select from "react-select";
import { getCourses } from "../../api/course";
import { ICourse } from "../../interface/ICourse";
import { getEmployees } from "../../api/employee";
import { customStyles, IEmployeeGet } from "../../interface/IEmployee";
import { useForm, Controller } from "react-hook-form";
import { IRoomGet } from "../../interface/IRoom";
import { getRooms } from "../../api/room";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

// interface Props {
//   submitCallback: (data: any) => void;
//   course: ICourse;
//   existingSubjects: SubjectFormData[]; // Add this
// }

interface Props {
  submitCallback: (data: any) => void;
  course: ICourse;
  existingSubjects: SubjectFormData[];
}

interface IOption {
  value: string;
  label: string;
}

interface SubjectFormData {
  courseID: string;
  timeStart: string;
  timeEnd: string;
  day: string[];
  room: string;
  instructorID: string;
}

const dayOptions = [
  { value: "sun", label: "Sunday" },
  { value: "mon", label: "Monday" },
  { value: "tue", label: "Tuesday" },
  { value: "wed", label: "Wednesday" },
  { value: "thu", label: "Thursday" },
  { value: "fri", label: "Friday" },
  { value: "sat", label: "Saturday" },
];

function SubjectForm({ submitCallback, course, existingSubjects }: Props) {
  const intructor = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const room = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const courses = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const instructorOptions: IOption[] = intructor.data?.results.map(
    (ins: IEmployeeGet) => ({
      value: ins._id,
      label: `${ins.surname}, ${ins.firstName[0]}`,
    })
  );

  const roomOptions: IOption[] = room.data?.map((room: IRoomGet) => ({
    value: room._id,
    label: room.building + room.room,
  }));

  const courseOptions: IOption[] = courses.data?.results.map(
    (course: ICourse) => ({
      value: course._id,
      label: course.courseName,
    })
  );

  const subjectForm = useForm<SubjectFormData>({
    defaultValues: {
      courseID: course?._id || "", // Default to provided course ID
      timeStart: "",
      timeEnd: "",
      day: [],
      room: "",
      instructorID: "",
    },
  });

  // const subjectForm = useForm<SubjectFormData>({
  //   defaultValues: {
  //     courseID: course?._id || "",
  //     timeStart: "",
  //     timeEnd: "",
  //     day: [],
  //     room: "",
  //     instructorID: "",
  //   },
  // });

  const onSubmit = (data: SubjectFormData) => {
    const isConflict = existingSubjects.some((subject) => {
      const sameCourse = subject.courseID === data.courseID;
      const sameInstructor = subject.instructorID === data.instructorID;

      const startA = parseInt(subject.timeStart.replace(":", ""));
      const endA = parseInt(subject.timeEnd.replace(":", ""));
      const startB = parseInt(data.timeStart.replace(":", ""));
      const endB = parseInt(data.timeEnd.replace(":", ""));

      const timeOverlap = startA < endB && startB < endA;

      const daysOverlap = subject.day.some((d) => data.day.includes(d));

      return sameCourse && sameInstructor && timeOverlap && daysOverlap;
    });

    if (isConflict) {
      toast.error(
        "Conflict: This subject already exists with overlapping time and instructor."
      );
      return;
    }

    submitCallback(data);
  };

  return (
    <div className="flex">
      {/* <div className="w-0 xl:w-72"></div> */}
      <form
        className="grid grid-cols-1 md:grid-cols-[7fr_1fr] md:gap-2 gap-4"
        onSubmit={subjectForm.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:grid w-[290px] xl:w-full md:grid-cols-6 gap-4">
          <Controller
            control={subjectForm.control}
            name="courseID"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={courseOptions}
                value={courseOptions?.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
              />
            )}
          />
          <input
            {...subjectForm.register("timeStart")}
            type="time"
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
            required
          />
          <input
            {...subjectForm.register("timeEnd")}
            type="time"
            className="w-full px-3 py-1 border border-gray-300 rounded-md"
            required
          />
          <Controller
            control={subjectForm.control}
            name="day"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={dayOptions}
                value={dayOptions.filter((option) =>
                  field.value?.includes(option.value)
                )}
                styles={customStyles}
                onChange={(selectedOptions) =>
                  field.onChange(
                    selectedOptions?.map((option) => option.value) || []
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
                value={roomOptions?.find(
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
                {...field}
                options={instructorOptions}
                value={instructorOptions?.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="py-2 rounded-md text-white w-[100%] font-semibold bg-blue-700 hover:bg-blue-600 active:scale-95 duration-200 mb-10 xl:mb-0"
        >
          Add subject
        </button>
      </form>

      {/* Mobile stacked form (visible on mobile only) */}
      {/* <div className="block md:hidden"></div> */}
    </div>
  );
}

export default SubjectForm;
