import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { ISeatsGet, ISeatsPost } from "../../../interface/ISeats";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addSeat, getSeats } from "../../../api/seat";
import { toast } from "react-toastify";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { customStyles } from "../../../interface/IEmployee";
import ButtonComponent from "../../props/ButtonComponent";
import { getSection, updateSection } from "../../../api/section";
import { ISectionGet, ISectionSub } from "../../../interface/ISection";
import { getSchedules } from "../../../api/schedule";
import { IScheduleGet } from "../../../interface/ISchedule";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
interface IOption {
  value: string;
  label: string;
}
const AddSeat = () => {
  const { handleSubmit, control } = useForm<ISeatsPost>();
  const sectionUpdate = useForm<ISectionSub>();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) return;

  // Queries
  const section = useQuery<ISectionGet>({
    queryKey: ["section", id],
    queryFn: () => getSection(id),
    // refetchOnMount: true,
    enabled: !!id,
  });

  const students = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const schedules = useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
  });

  const seats = useQuery({
    queryKey: ["seats"],
    queryFn: getSeats,
  });

  // const selectedStudent = section.data?.seats?.map((seat: ISeatsGet) => {
  //   return seat.student;
  // });

  // console.log(selectedStudent);

  // Options
  const studentOptions: IOption[] = students.data?.results
    ?.filter(
      (stud: IStudentsGet) =>
        stud.program.programAcronym === section.data?.program.programAcronym
    )
    .filter(
      (stud: IStudentsGet) =>
        `${stud.program.programAcronym} - ${
          stud.standing === "freshman"
            ? "1"
            : stud.standing === "sophomore"
            ? "2"
            : stud.standing === "junior"
            ? "3"
            : "4"
        }` === section.data?.sectionName
    )
    // .filter((stud: IStudentsGet) => selectedStudent?.includes(stud._id))
    .map((stud: IStudentsGet) => {
      return {
        value: stud._id,
        label: `${stud.surname}, ${stud.firstName} - ${
          stud.program.programAcronym
        } - ${
          stud.standing === "freshman"
            ? "1"
            : stud.standing === "sophomore"
            ? "2"
            : stud.standing === "junior"
            ? "3"
            : "4"
        }`,
      };
    });

  const scheduleOption: IOption[] = schedules.data?.map(
    (sched: IScheduleGet) => {
      return {
        value: sched._id,
        label: `${sched.program.programAcronym}-${sched.semester}.${sched.schoolYear}`,
      };
    }
  );

  const seatOption: IOption[] =
    seats.data
      ?.filter((seat: ISeatsGet) => seat.section?._id === id)
      .map((seat: ISeatsGet) => ({
        value: seat._id,
        label: `${seat.student.surname}, ${seat.student.firstName}`,
      })) || [];

  // Deafult values
  const deaf = seatOption?.filter((seat) =>
    (section.data?.seats.map((s: ISeatsGet) => String(s._id)) ?? []).includes(
      String(seat.value)
    )
  );

  // Mutations
  const addMutation = useMutation({
    mutationFn: addSeat,
    onSuccess: () => {
      toast.success("Added Successfully");
      seats.refetch();
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const updateSectionMutation = useMutation({
    mutationFn: updateSection,
    onSuccess: () => {
      toast.success("Added to Section Successfully");
      navigate(`/registrar/update-section/${id}`);
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  // Submit Functions
  const onSubmit = (data: ISeatsPost) => {
    const formattedData = {
      ...data,
      section: id,
      grades: Array.isArray(data.grades)
        ? data.grades.map((grade) => grade.value)
        : [],
    };

    // console.log(formattedData);
    addMutation.mutate(formattedData);
    // navigate("/registrar/section");
  };

  const onUpdate = (data: ISectionSub) => {
    const formattedData = {
      ...data,
      seats: Array.isArray(data?.seats)
        ? data?.seats?.map((seat) => seat?.value)
        : [],
    };
    // console.log(formattedData);
    updateSectionMutation.mutate({ id: id, data: formattedData });
    // navigate(`/registrar/seat-info/${id}`);
  };

  // Refreshing Data
  useEffect(() => {
    if (id) {
      sectionUpdate.reset({
        seats: deaf,
        academicYear: section.data?.academicYear,
        sectionName: section.data?.sectionName,
        semester: section.data?.semester,
        program: section.data?.program._id,
      });
    }
  }, [sectionUpdate.reset, section.data, seats.data]);
  return (
    <div className="w-full max-w-[1200px] mt-10">
      <div className="flex flex-col gap-5">
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
          {/* <section className="relative w-full pt-5 rounded-lg bg-slate-100">
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
          </section> */}
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
          <ButtonComponent label="Submit" type="submit" style="text-white" />
        </form>
        <form onSubmit={sectionUpdate.handleSubmit(onUpdate)}>
          <section className="flex flex-col gap-3 relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Seats
            </p>
            <Controller
              name="seats"
              control={sectionUpdate.control}
              defaultValue={[]} // Default value must be an array for isMulti
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  styles={customStyles}
                  options={seatOption}
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

export default AddSeat;
