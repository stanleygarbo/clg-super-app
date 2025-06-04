import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addProgram, deleteProgram, getPrograms } from "../../../api/programs";
import { IProgramGet, IProgramPost } from "../../../interface/IProgram";
import { useForm } from "react-hook-form";
import { getDepartments } from "../../../api/department";
import { IDepartmentGet } from "../../../interface/IDepartment";
import { twMerge } from "tailwind-merge";

const ProgramDashboard = () => {
  const [search, setSearch] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProgramPost>();

  const query = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const queryDept = useQuery({
    queryKey: ["department"],
    queryFn: getDepartments,
  });

  const filteredData = query.data?.results?.filter((dept: IProgramGet) =>
    `${dept.programName} ${dept.programAcronym}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const addProgMutation = useMutation({
    mutationFn: addProgram,
    onSuccess() {
      toast.success("Added Successfully");
      query.refetch();
      reset();
    },
    onError: (err: any) => {
      console.log(err.message);
    },
  });

  const deleteProgMutation = useMutation({
    mutationFn: deleteProgram,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: (err: any) => {
      console.log(err.message);
    },
  });

  return (
    <div>
      <div className="w-[1100px] h-[650px] mt-10">
        {/* ADD PROGRAM */}
        <section className={`p-5 flex items-center gap-5`}>
          <h1 className="text-xl font-bold text-blue-800 w-[200px]">
            Add Program
          </h1>
          <form
            className="grid grid-cols-4 gap-10"
            onSubmit={handleSubmit((data: IProgramPost) => {
              addProgMutation.mutate(data);
            })}
          >
            <section className="relative">
              <input
                type="text"
                {...register("programName", {
                  required: "Program Name is required",
                })}
                placeholder="Program"
                className={twMerge(
                  "outline-none w-[200px] border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                  errors.programName?.message &&
                    "focus:border-red-500 border-b-red-500"
                )}
              />
              <p className="absolute text-[11px] text-red-500 font-semibold left-8">
                {errors.programName?.message}
              </p>
            </section>
            <section className="relative">
              <input
                type="text"
                {...register("programAcronym", {
                  required: "Program Acronym is required",
                })}
                placeholder="Acronym"
                className={twMerge(
                  "outline-none w-[200px] border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                  errors.programAcronym?.message &&
                    "focus:border-red-500 border-b-red-500"
                )}
              />
              <p className="absolute text-[11px] text-red-500 font-semibold left-8">
                {errors.programAcronym?.message}
              </p>
            </section>
            <section className="relative">
              <p className="text-xs font-bold absolute top-[-8px]">
                Department :
              </p>
              <select
                {...register("departmentId")}
                className="outline-none border-0 h-[38px] border-b-2 focus:border-blue-900 border-b-black w-[200px] text-center"
              >
                {queryDept.data?.results?.map(
                  (dept: IDepartmentGet, index: number) => (
                    <option value={dept._id} selected={index == 0}>
                      {dept.departmentName}
                    </option>
                  )
                )}
              </select>
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[190px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addProgMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Add Department"
              )}
            </button>
          </form>
        </section>

        <section className="bg-slate-100 px-5 py-2 rounded-md flex items-center justify-between">
          <span className="flex gap-3">
            <h1 className="text-xl font-bold text-blue-800 py-1">
              Program's List
            </h1>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border-0 rounded-md px-5 py-2 outline-none text-center"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section>
          <span className="flex flex-col">
            <span className="flex mb-3 mt-2 font-bold text-lg">
              <h1 className="w-[250px] pl-3">Position ID</h1>
              <h1 className="w-[350px] text-center">Program</h1>
              <h1 className="w-[150px] text-center">Acronym</h1>
              <h1 className="w-[150px] text-center">Department</h1>
              <h1 className="w-[200px] text-center">Action</h1>
            </span>
            <span className="h-[470px] overflow-scroll no-scrollbar">
              {filteredData?.map((prog: IProgramGet, index: number) => (
                <section
                  key={prog._id}
                  className={`${
                    index == 0
                      ? "rounded-t-md"
                      : index == filteredData.length - 1
                      ? "rounded-b-md"
                      : ""
                  } ${
                    index % 2 == 0 ? "bg-slate-200" : "bg-slate-100"
                  } hover:bg-slate-300 group flex items-center py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[250px] pl-3">{prog._id}</h1>
                  <h1 className="w-[350px] text-center">{prog.programName}</h1>
                  <h1 className="w-[150px] text-center">
                    {prog.programAcronym}
                  </h1>
                  <h1 className="w-[150px] text-center">
                    {prog.department?.departmentName}
                  </h1>
                  <h1 className="w-[200px] flex justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => {
                        deleteProgMutation.mutate(prog._id);
                      }}
                      className="bg-red-500 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-red-700 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                  </h1>
                </section>
              ))}
            </span>
          </span>
        </section>
      </div>
    </div>
  );
};

export default ProgramDashboard;
