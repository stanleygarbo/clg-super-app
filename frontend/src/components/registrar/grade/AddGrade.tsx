import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../../props/Input";
import { IGradesPost } from "../../../interface/IGrades";
import { customStyles } from "../../../interface/IEmployee";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../api/course";
import { ICourseGet } from "../../../interface/ICourse";
import { getSeats } from "../../../api/seat";
import { ISeatsGet } from "../../../interface/ISeats";
import { addGrade } from "../../../api/grade";
import { toast } from "react-toastify";
import ButtonComponent from "../../props/ButtonComponent";

interface IOption {
  value: string;
  label: string;
}

const AddGrade = () => {
  const { register, handleSubmit, control, watch } = useForm<IGradesPost>();

  const finalGrade = watch("finalGrade") || "";

  const course = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const seats = useQuery({
    queryKey: ["seats"],
    queryFn: getSeats,
  });

  //   console.log("Seat :: ", seats.data);

  const courseOption: IOption[] = course.data?.results?.map(
    (cour: ICourseGet) => {
      return { value: cour._id, label: cour.courseName };
    }
  );

  const seatsOption: IOption[] = seats.data?.results?.map((seat: ISeatsGet) => {
    return {
      value: seat._id,
      label: `${seat.student.surname}, ${seat.student.firstName} - ${
        seat.student.program.programAcronym
      }-${
        seat.student.standing === "freshman"
          ? "1"
          : seat.student.standing === "sophomore"
          ? "2"
          : seat.student.standing === "junior"
          ? "3"
          : "4"
      }`,
    };
  });

  const addMutation = useMutation({
    mutationFn: addGrade,
    onSuccess: () => {
      toast.success("Added Successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return (
    <div>
      <div>
        <h1>Add Grade</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            addMutation.mutate(data);
          })}
          className="flex flex-col gap-3"
        >
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Seat
            </p>
            <Controller
              control={control}
              name="seat"
              //   rules={{ required: true }}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={seatsOption}
                  value={seatsOption?.find(
                    (seat) => seat.value === field.value
                  )}
                  onChange={(seat) => {
                    field.onChange(seat?.value);
                    //   setSelectedProgram(stud?.value);
                  }}
                  placeholder="Seat"
                />
              )}
            />
          </section>
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Course
            </p>
            <Controller
              control={control}
              name="course"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={courseOption}
                  value={courseOption?.find(
                    (cour) => cour.value === field.value
                  )}
                  onChange={(cour) => {
                    field.onChange(cour?.value);
                    //   setSelectedProgram(stud?.value);
                  }}
                  placeholder="Courses"
                />
              )}
            />
          </section>
          <Input
            label="Final Grade"
            type="number"
            value={finalGrade}
            register={register("finalGrade")}
          />
          <ButtonComponent label="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddGrade;
