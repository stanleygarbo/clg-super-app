import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { ISeatsPost } from "../../../interface/ISeats";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addSeat } from "../../../api/seat";
import { toast } from "react-toastify";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { customStyles } from "../../../interface/IEmployee";
import { getGrades, updateGrade } from "../../../api/grade";
import { IGradesGet, IGradesPost } from "../../../interface/IGrades";
import ButtonComponent from "../../props/ButtonComponent";
interface IOption {
  value: string;
  label: string;
}
const AddSeat = () => {
  const { handleSubmit, control } = useForm<ISeatsPost>();

  const students = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const grades = useQuery({
    queryKey: ["grades"],
    queryFn: getGrades,
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

  const gradesOption: IOption[] = grades.data?.map((grad: IGradesGet) => {
    return { value: grad._id, label: grad.course.courseName };
  });

  //   console.log(grades.data);

  const addMutation = useMutation({
    mutationFn: addSeat,
    onSuccess: () => {
      toast.success("Added Successfully");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const updateGradeMutation = useMutation({
    mutationFn: updateGrade,
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
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
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
          </section>
          <ButtonComponent label="Submit" type="submit" width="mx-[200px]" />
        </form>
      </div>
    </div>
  );
};

export default AddSeat;
