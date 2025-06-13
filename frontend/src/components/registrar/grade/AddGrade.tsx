import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../../props/Input";
import { IGradesGet, IGradesPost } from "../../../interface/IGrades";
import { customStyles } from "../../../interface/IEmployee";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../api/course";
import { ICourseGet } from "../../../interface/ICourse";
import { getSeat, updateSeat } from "../../../api/seat";
import { ISeatsGet, ISeatsPost } from "../../../interface/ISeats";
import { addGrade, getGrades } from "../../../api/grade";
import { toast } from "react-toastify";
import ButtonComponent from "../../props/ButtonComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ISubjectSchedule } from "../../../interface/ISchedule";

interface IOption {
  value: string;
  label: string;
}

const AddGrade = () => {
  const { handleSubmit, control, watch, register } = useForm<IGradesPost>();
  const seatUpdate = useForm<ISeatsPost>();
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return;
  }

  const finalGrade = watch("finalGrade") || "";

  const course = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const grades = useQuery({
    queryKey: ["grades"],
    queryFn: getGrades,
  });

  const seat = useQuery<ISeatsGet>({
    queryKey: ["seat", id],
    queryFn: () => getSeat(id),
    enabled: !!id,
  });

  const gradeOption: IOption[] =
    grades.data
      ?.filter((grade: IGradesGet) => grade.seat._id === id)
      .map((grade: IGradesGet) => ({
        value: grade._id,
        label: grade.course.courseName,
      })) || [];

  // const seats = useQuery({
  //   queryKey: ["seats"],
  //   queryFn: getSeats,
  // });

  const mapeddCourse = seat.data?.schedule?.subjectSchedules?.map(
    (sub: ISubjectSchedule) => sub.courseID
  );

  // const seatSelected = gradeOption.map((grade: IOption) => grade.value);

  const courseOption: IOption[] =
    course.data?.results
      .filter((cour: ICourseGet) => mapeddCourse?.includes(cour._id))
      // .filter((cour: ICourseGet) => seatSelected?.includes(cour._id))
      .map((cour: ICourseGet) => ({
        value: cour._id,
        label: cour.courseName,
      })) || [];

  // const seatsOption: IOption[] = seats.data?.map((seat: ISeatsGet) => {
  //   return {
  //     value: seat._id,
  //     label: `${seat.student.surname}, ${seat.student.firstName} - ${seat.section.sectionName}`,
  //   };
  // });

  // console.log(seat.data?.schedule.subjectSchedules);

  const deaf = gradeOption?.filter((grade) =>
    (seat.data?.grades?.map((s: IGradesGet) => String(s._id)) ?? []).includes(
      String(grade.value)
    )
  );

  const addMutation = useMutation({
    mutationFn: addGrade,
    onSuccess: () => {
      toast.success("Added Successfully");
      grades.refetch();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const updateSeatMutation = useMutation({
    mutationFn: updateSeat,
    onSuccess: () => {
      toast.success("Added Grade to Seat Successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const onSubmit = (data: IGradesPost) => {
    const newData = {
      ...data,
      seat: id,
    };
    addMutation.mutate(newData);
    // grades.refetch();
  };

  const onUpdate = (data: ISeatsPost) => {
    const formattedData = {
      ...data,
      grades: Array.isArray(data?.grades)
        ? data?.grades?.map((grade) => grade?.value)
        : [],
    };

    updateSeatMutation.mutate({ id: id, data: formattedData });
    navigate(`/registrar/seat-info/${id}`);
  };

  // console.log(seat.data);

  useEffect(() => {
    if (id) {
      seatUpdate.reset({
        grades: deaf,
        schedule: seat.data?.schedule?._id,
        section: seat.data?.section?._id,
        student: seat.data?.student?._id,
      });
    }
  }, [seatUpdate.reset, seat.data, grades.data]);

  return (
    <div className="w-full max-w-[1100px]">
      <div className="flex flex-col gap-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <h1>Add Grade</h1>

          {/* <section className="relative w-full pt-5 rounded-lg bg-slate-100">
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
          </section> */}
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
          <ButtonComponent label="Submit" type="submit" style="text-white" />
        </form>
        <form onSubmit={seatUpdate.handleSubmit(onUpdate)}>
          <section className="flex flex-col gap-3 relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Grades
            </p>
            <Controller
              name="grades"
              control={seatUpdate.control}
              defaultValue={[]} // Default value must be an array for isMulti
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  styles={customStyles}
                  options={gradeOption}
                  className="w-full"
                  onChange={(selected) => field.onChange(selected)}
                  value={field.value || []} // Ensures value is never undefined
                />
              )}
            />
            <ButtonComponent label="Add" type="submit" style="text-white" />
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddGrade;
