import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { ISectionGet, ISectionSub } from "../../../interface/ISection";
import { useMutation, useQuery } from "@tanstack/react-query";
import { HiViewGrid } from "react-icons/hi";
import { getPrograms } from "../../../api/programs";
import { IOption } from "../../../interface/IOption";
import { IProgramGet } from "../../../interface/IProgram";
import { getSection, updateSection } from "../../../api/section";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ISeatsGet } from "../../../interface/ISeats";
import { getSeats } from "../../../api/seat";
import ButtonComponent from "../../props/ButtonComponent";
import { getStudentById } from "../../../api/student";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { customStyles } from "../../../interface/IEmployee";
import { IoCloseSharp } from "react-icons/io5";

const UpdateSection = () => {
  const { register, reset } = useForm();
  const update = useForm<ISectionSub>();
  const navigate = useNavigate();
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const { id } = useParams();

  if (!id) return;

  // const year = new Date().getFullYear();

  // const sectionName = watch("sectionName") || "";
  // const schoolYear = watch("academicYear") || `${year - 1}-${year}`;

  const query = useQuery<ISectionGet>({
    queryKey: ["section", id],
    queryFn: () => getSection(id),
    enabled: !!id,
  });

  const programs = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const seats = useQuery({
    queryKey: ["seats"],
    queryFn: getSeats,
  });

  // const programOptions: IOption[] = programs.data?.results.map(
  //   (prog: IProgramGet) => {
  //     return { value: prog._id, label: prog.programAcronym };
  //   }
  // );

  const seatOption: IOption[] = seats.data?.map((set: ISeatsGet) => {
    return {
      value: set._id,
      label: `${set.student.surname}-${set.section.sectionName}`,
    };
  });

  const updateMutation = useMutation({
    mutationFn: updateSection,
    onSuccess: () => {
      toast.success("Added successfully");
    },
    onError: (errors) => {
      toast.error(errors.message);
    },
  });

  const deaf = seatOption?.filter((seat) =>
    (query.data?.seats?.map((s: ISeatsGet) => String(s._id)) ?? []).includes(
      String(seat.value)
    )
  );

  // const onSubmit = (data: ISectionSub) => {
  //   if (!id) {
  //     toast.error("No section ID found!");
  //     return;
  //   }
  //   const formattedData = {
  //     ...data,
  //     seats: Array.isArray(data?.seats)
  //       ? data?.seats?.map((seat) => seat?.value)
  //       : [],
  //   };

  //   updateMutation.mutate({ id, data: { ...formattedData } });
  //   navigate("/registrar/section");
  // };

  const onUpdate = (data: ISectionSub) => {
    const formattedData = {
      ...data,
      seats: Array.isArray(data?.seats)
        ? data?.seats?.map((seat) => seat?.value)
        : [],
    };

    updateMutation.mutate({ id: id, data: formattedData });
    setIsAdd(false);
    query.refetch();
  };

  useEffect(() => {
    if (query.data) {
      reset({
        sectionName: query.data?.sectionName,
        semester: query.data?.semester,
        seats: query.data?.seats,
        program: query.data?.program._id,
        academicYear: query.data?.academicYear,
      }),
        update.reset({
          sectionName: query.data?.sectionName,
          semester: query.data?.semester,
          seats: deaf,
          program: query.data?.program._id,
          academicYear: query.data?.academicYear,
        });
    }
  }, [query.data, update.reset, reset]);

  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const StudentSurname = ({ studentId }: { studentId: string }) => {
    const { data } = useQuery({
      queryKey: ["student", studentId],
      queryFn: () => getStudentById({ id: studentId }),
      enabled: !!studentId,
    });

    return <h1>{`${data?.surname}, ${data?.firstName[0]}` || "Loading..."}</h1>;
  };

  return (
    <div className="relative w-full max-w-[1100px] max-h-[700px] mt-10">
      <form
        onSubmit={update.handleSubmit(onUpdate)}
        className={`${
          isAdd ? "left-80" : "left-[-1000px]"
        } flex flex-col gap-3 w-[500px] absolute top-40 p-5 bg-slate-100 rounded-lg duration-200`}
      >
        <section className="flex justify-between">
          <h1>Add Seat</h1>
          <ButtonComponent
            label={<IoCloseSharp />}
            color="none"
            style="text-red-600 hover:text-red-800"
            onClick={() => {
              setIsAdd(false);
            }}
          />
          {/* <button
            onClick={() => {
              setIsAdd(false);
            }}
            type="button"
            className="font-bold text-red-600 hover:text-red-800 active:scale-75 duration-200"
          >
            X
          </button> */}
        </section>
        <span className="flex flex-col gap-3 relative w-full pt-5 rounded-lg bg-slate-100">
          <p className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
            Seats
          </p>
          <Controller
            name="seats"
            control={update.control}
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
        </span>
      </form>
      <form className="w-full max-w-[1200px] my-5 mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Update Section</h1>
          <section className="flex flex-row-reverse gap-3">
            <ButtonComponent
              label={isUpdate ? "Update" : "Edit"}
              style="text-white"
              color={isUpdate ? "green" : "blue"}
              onClick={() => {
                setIsUpdate(true);
              }}
            />
            <ButtonComponent
              label="Cancel"
              color="red"
              style={isUpdate ? "w-20 " : "hidden w-20"}
              onClick={() => {
                setIsUpdate(false);
              }}
            />
          </section>
        </div>
        <section className="mt-10 px-10">
          <div className="flex justify-between items-start">
            <section>
              <span className="flex">
                <label className="font-semibold">Section Name: </label>
                <input
                  type="text"
                  readOnly={!isUpdate}
                  {...register("sectionName")}
                  className={`${
                    isUpdate ? "border-b-2 border-b-blue-600" : ""
                  } outline-none text-center w-20`}
                />
              </span>
              <span className="flex-col">
                <label className="font-semibold">Program: </label>
                <select
                  disabled={!isUpdate}
                  className={`${
                    isUpdate ? "border-b-2 border-b-blue-600" : ""
                  } outline-none text-center w-20`}
                >
                  {programs.data?.results?.map((prog: IProgramGet) => (
                    <section key={prog._id}>
                      <option
                        selected={query.data?.program._id == prog._id}
                        value={prog._id}
                      >
                        {prog.programAcronym}
                      </option>
                    </section>
                  ))}
                </select>
              </span>
            </section>
            <div className="flex gap-3 font-semibold">
              <span className="flex items-center">
                <input
                  type="text"
                  readOnly={!isUpdate}
                  {...register("semester")}
                  className={`${
                    isUpdate ? "border-b-2 border-b-blue-600" : ""
                  } outline-none text-center w-10`}
                />
                <h1>Sem</h1>
              </span>
              <span className="flex gap-1 items-center">
                <h1>S.Y.</h1>
                <input
                  type="text"
                  readOnly={!isUpdate}
                  {...register("academicYear")}
                  className={`${
                    isUpdate ? "border-b-2 border-b-blue-600" : ""
                  } outline-none text-center w-20`}
                />
              </span>
            </div>
          </div>
          <section className="flex justify-between items-center">
            <h1 className="mt-10 mb-3 font-bold text-lg text-blue-700">
              Seats List
            </h1>
            <ButtonComponent
              label="Add Seat"
              style="text-white"
              type="button"
              onClick={() => {
                setIsAdd(true);
              }}
            />
          </section>
          <div className="flex flex-wrap gap-5">
            {query.data?.seats?.map((seat: any, index: number) => (
              <section
                key={seat._id}
                className="w-40 flex flex-col gap-2 bg-slate-200 pb-2 pl-3 pr-2 pt-2 text-black rounded-lg"
              >
                <section className="flex gap-3 justify-between">
                  <span className="flex flex-col gap-3">
                    <h1 className="font-semibold">Seat # {index}</h1>
                    <StudentSurname studentId={seat.student} />
                  </span>
                  <span className="flex flex-col gap-2">
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-800 active:scale-75 duration-200"
                    >
                      <MdDelete size={18} />
                    </button>
                    <button
                      type="button"
                      className="text-green-600 hover:text-green-800 active:scale-75 duration-200"
                    >
                      <MdEditSquare size={18} />
                    </button>
                    <button
                      onClick={() => {
                        navigate(`/registrar/seat-info/${seat._id}`);
                      }}
                      type="button"
                      className="text-blue-600 hover:text-blue-800 active:scale-75 duration-200"
                    >
                      <HiViewGrid size={18} />
                    </button>
                  </span>
                </section>
              </section>
            ))}
          </div>
        </section>
      </form>
    </div>
  );
};

export default UpdateSection;
