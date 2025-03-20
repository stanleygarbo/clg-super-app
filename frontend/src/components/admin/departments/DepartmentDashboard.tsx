import { useState } from "react";
import { toast } from "react-toastify";
import {
  IDepartmentGet,
  IDepartmentPost,
} from "../../../interface/IDepartment";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDepartment,
  deleteDepartment,
  getDepartments,
} from "../../../api/department";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";

const DepartmentDashboard = () => {
  const { handleSubmit, register, setValue } = useForm<IDepartmentPost>();
  const [search, setSearch] = useState<string>("");

  const query = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  const addDeptMutation = useMutation({
    mutationFn: addDepartment,
    onSuccess: () => {
      toast.success("Added Successfully");
      query.refetch();
      setValue("departmentName", "");
    },
    onError: () => {
      toast.error("Error while adding data");
    },
  });

  const deleteDeptMutation = useMutation({
    mutationFn: deleteDepartment,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
  });

  const filteredData = query.data?.results?.filter((dept: IDepartmentGet) =>
    dept.departmentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="w-[1100px] h-[650px]">
        {/* ADD DEPARTMENT */}
        <section className={`p-5 flex items-center justify-between gap-10`}>
          <h1 className="text-xl font-bold text-blue-800">Add Department</h1>
          <form
            className="flex gap-10"
            onSubmit={handleSubmit((data: IDepartmentPost) =>
              addDeptMutation.mutate(data)
            )}
          >
            <section className="flex items-center gap-3">
              <h1 className="font-semibold text-sm">Department Name :</h1>
              <input
                type="text"
                {...register("departmentName")}
                placeholder="Department"
                className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
              />
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[190px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addDeptMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Add Department"
              )}
            </button>
          </form>
        </section>

        <section className="bg-slate-100 px-5 py-2 rounded-md flex items-center justify-between">
          <span className="flex gap-3">
            <h1 className="text-xl font-bold text-blue-800">Department List</h1>
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
            <span className="flex mb-3 mt-2 text-lg">
              <h1 className="w-[300px] font-bold text-start pl-3">
                Department ID
              </h1>
              <h1 className="w-[200px] font-bold text-center">
                Department Name
              </h1>
              <h1 className="w-[200px] font-bold text-center">Action</h1>
            </span>
            <span className="h-[470px] rounded-md overflow-scroll no-scrollbar">
              {filteredData?.map((dept: IDepartmentGet, index: number) => (
                <section
                  key={dept._id}
                  className={`${
                    index == 0
                      ? "rounded-t-md"
                      : index == query.data?.results?.length - 1
                      ? "rounded-b-md"
                      : ""
                  } ${
                    index % 2 == 0 ? "bg-slate-200" : "bg-slate-100"
                  } hover:bg-slate-300 group flex items-center py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[300px] pl-3">{dept._id}</h1>
                  <h1 className="w-[200px] text-center">
                    {dept.departmentName}
                  </h1>
                  <h1 className="w-[200px] flex justify-center items-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => {
                        deleteDeptMutation.mutate(dept._id);
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

export default DepartmentDashboard;
