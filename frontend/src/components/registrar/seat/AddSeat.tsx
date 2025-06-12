import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { ISeatsPost } from "../../../interface/ISeats";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addSeat } from "../../../api/seat";
import { toast } from "react-toastify";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { customStyles } from "../../../interface/IEmployee";
import ButtonComponent from "../../props/ButtonComponent";
import { getSections } from "../../../api/section";
import { ISectionGet } from "../../../interface/ISection";
import { getSchedules } from "../../../api/schedule";
import { IScheduleGet } from "../../../interface/ISchedule";
import { useNavigate } from "react-router-dom";
interface IOption {
  value: string;
  label: string;
}
const AddSeat = () => {
  const { handleSubmit, control } = useForm<ISeatsPost>();
  const navigate = useNavigate();

  const students = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  // const grades = useQuery({
  //   queryKey: ["grades"],
  //   queryFn: getGrades,
  // });

  const sections = useQuery({
    queryKey: ["sections"],
    queryFn: getSections,
  });

  const schedules = useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
  });

  const studentOptions: IOption[] = students.data?.results?.map(
    (stud: IStudentsGet) => {
      return {
        value: stud._id,
        label: `${stud.surname}, ${stud.firstName} - ${
          stud.program.programAcronym
        }-${
          stud.standing === "freshman"
            ? "1"
            : stud.standing === "sophomore"
            ? "2"
            : stud.standing === "junior"
            ? "3"
            : "4"
        }`,
      };
    }
  );

  // const gradesOption: IOption[] = grades.data?.map((grad: IGradesGet) => {
  //   return { value: grad._id, label: grad.course.courseName };
  // });

  const sectionOption: IOption[] = sections.data?.map((sec: ISectionGet) => {
    return { value: sec._id, label: sec.sectionName };
  });

  const scheduleOption: IOption[] = schedules.data?.map(
    (sched: IScheduleGet) => {
      return {
        value: sched._id,
        label: `${sched.program.programAcronym}-${sched.semester}.${sched.schoolYear}`,
      };
    }
  );

  // console.log(schedules.data);
  const addMutation = useMutation({
    mutationFn: addSeat,
    onSuccess: () => {
      toast.success("Added Successfully");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: ISeatsPost) => {
    const formattedData = {
      ...data,
      grades: Array.isArray(data.grades)
        ? data.grades.map((grade) => grade.value)
        : [],
    };

    // const dat = data.grades?.map((grad: any) => {
    //   const value: IGradesPost = {
    //     finalGrade: grad.finalGrade,
    //     seat: grad?.seat,
    //     course: grad.course._id,
    //     student: data.student,
    //   };
    //   return { id: grad._id, data: { ...value } };
    // });

    // dat.forEach((d: any) => {
    //   updateGradeMutation.mutate({ id: d.id, data: d.data });
    // });

    addMutation.mutate(formattedData);
    navigate("/registrar/section");
  };

  //   const student = watch("student") || "";
  //   const grade = watch("grades") || [];
  return (
    <div className="w-full max-w-[1200px] mt-10">
      <div>
        <h1>Add Seat</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Schedule
            </p>
            <Controller
              control={control}
              name="schedule"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={scheduleOption}
                  value={scheduleOption?.find(
                    (sec) => sec.value === field.value
                  )}
                  onChange={(sec) => {
                    field.onChange(sec?.value);
                    //   setSelectedProgram(sec?.value);
                  }}
                  placeholder="Schedule"
                />
              )}
            />
          </section>
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Section
            </p>
            <Controller
              control={control}
              name="section"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={sectionOption}
                  value={sectionOption?.find(
                    (sec) => sec.value === field.value
                  )}
                  onChange={(sec) => {
                    field.onChange(sec?.value);
                    //   setSelectedProgram(sec?.value);
                  }}
                  placeholder="Sections"
                />
              )}
            />
          </section>
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Students
            </p>
            <Controller
              control={control}
              name="student"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={studentOptions}
                  value={studentOptions?.find(
                    (stud) => stud.value === field.value
                  )}
                  onChange={(stud) => {
                    field.onChange(stud?.value);
                    //   setSelectedProgram(stud?.value);
                  }}
                  placeholder="Students"
                />
              )}
            />
          </section>
          {/* <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Grades
            </p>
            <Controller
              name="grades"
              control={control}
              defaultValue={[]} // Default value must be an array for isMulti
              render={({ field }) => (
                <Select<IOption, true>
                  {...field}
                  isMulti
                  styles={customStyles}
                  options={gradesOption}
                  onChange={(selected) => field.onChange(selected)}
                  value={field.value || []} // Ensures value is never undefined
                  placeholder="Select grades"
                />
              )}
            />
          </section> */}
          <ButtonComponent label="Submit" type="submit" style="mx-[200px]" />
        </form>
      </div>
    </div>
  );
};

export default AddSeat;
