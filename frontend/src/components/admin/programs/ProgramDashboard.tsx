import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addProgram, deleteProgram, getPrograms } from "../../../api/programs";
import { IProgramGet, IProgramPost } from "../../../interface/IProgram";
import { useForm } from "react-hook-form";
import { getDepartments } from "../../../api/department";
import { IDepartmentGet } from "../../../interface/IDepartment";

const ProgramDashboard = () => {
  const [search, setSearch] = useState<string>("");
  const { register, handleSubmit } = useForm<IProgramPost>();

  const query = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const queryDept = useQuery({
    queryKey: ["department"],
    queryFn: getDepartments,
  });

  const filteredData = query.data?.results?.filter((dept: IProgramGet) =>
    dept.programName.toLowerCase().includes(search.toLowerCase())
  );

  const addProgMutation = useMutation({
    mutationFn: addProgram,
    onSuccess() {
      toast.success("Added Successfully");
      query.refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteProgMutation = useMutation({
    mutationFn: deleteProgram,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
  });

  return (
    <div>
      <div className="w-[1100px] h-[650px]">
        {/* ADD PROGRAM */}
        <section className={`p-5 flex items-center gap-5`}>
          <h1 className="text-xl font-bold text-blue-800 w-[200px]">
            Add Program
          </h1>
          <form
            className="grid grid-cols-4 gap-10"
            onSubmit={handleSubmit((data: IProgramPost) => {
              addProgMutation.mutate(data);
              console.log(data);
            })}
          >
            <input
              type="text"
              {...register("programName")}
              placeholder="Program"
              className="outline-none w-[200px] border-0 py-1 px-2 text-lg text-blue-900 font-semibold text-center border-b-2 border-b-blue-800"
            />
            <input
              type="text"
              {...register("programAcronym")}
              placeholder="Acronym"
              className="outline-none w-[200px] border-0 py-1 px-2 text-lg text-blue-900 font-semibold text-center border-b-2 border-b-blue-800"
            />
            <select
              {...register("departmentId")}
              className="outline-none border-0 border-b-2 border-blue-900 w-[200px] text-center"
            >
              {queryDept.data?.results?.map(
                (dept: IDepartmentGet, index: number) => (
                  <option value={dept._id} selected={index == 0}>
                    {dept.departmentName}
                  </option>
                )
              )}
            </select>
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

        <section className="bg-slate-200 px-5 py-2 rounded-md flex items-center justify-between">
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
            <span className="flex gap-5 mb-3 mt-2 text-lg">
              <h1 className="w-[240px] font-bold text-start pl-3">
                Position ID
              </h1>
              <h1 className="w-[320px] font-bold text-center">Program</h1>
              <h1 className="w-[140px] font-bold text-center">Acronym</h1>
              <h1 className="w-[140px] font-bold text-center">Department</h1>
              <h1 className="w-[200px] font-bold text-center pr-10">Action</h1>
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
                    index % 2 == 0
                      ? "bg-blue-100 hover:bg-blue-600 hover:text-white"
                      : "bg-slate-100 hover:bg-slate-400 hover:text-white"
                  } flex items-center gap-5 py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[240px] pl-3">{prog._id}</h1>
                  <h1 className="w-[320px] text-center">{prog.programName}</h1>
                  <h1 className="w-[120px] text-center">
                    {prog.programAcronym}
                  </h1>
                  <h1 className="w-[120px] text-center">
                    {prog.department?.departmentName}
                  </h1>
                  <h1 className="w-[200px] flex justify-center">
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
