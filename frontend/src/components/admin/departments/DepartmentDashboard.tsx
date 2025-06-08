import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  IDepartmentGet,
  IDepartmentPost,
} from "../../../interface/IDepartment";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDepartment,
  deleteDepartment,
  getDepartment,
  getDepartments,
  updateDepartment,
} from "../../../api/department";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

const DepartmentDashboard = () => {
  const { register, handleSubmit, reset, formState } =
    useForm<IDepartmentPost>();
  const { errors } = formState;
  const update = useForm<IDepartmentPost>();
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>();

  const query = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  const deptQuery = useQuery({
    queryKey: ["department", id],
    queryFn: () => getDepartment({ id }),
    enabled: !!id,
  });

  const addDeptMutation = useMutation({
    mutationFn: addDepartment,
    onSuccess: () => {
      toast.success("Added Successfully");
      query.refetch();
      reset();
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const deleteDeptMutation = useMutation({
    mutationFn: deleteDepartment,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateDepartment,
    onSuccess: () => {
      toast.success("Updated Successfully");
      update.reset();
      query.refetch();
      setIsOpen(false);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const filteredData = query.data?.results?.filter((dept: IDepartmentGet) =>
    dept.departmentName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (deptQuery.data) {
      update.reset({
        departmentName: deptQuery.data?.departmentName,
      });
    }
  }, [deptQuery.data, update.reset]);

  const snap = useSnapshot(sidebarState);
  const Open = snap.isOpen;

  return (
    <div
      className={`${
        Open ? "-z-50 xl:z-50" : ""
      } flex my-10 w-full xl:w-[1000px] px-4`}
    >
      {/* Main Content */}
      <div className="w-full xl:flex-1 relative">
        {/* Header & Forms */}
        <section className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-xl font-bold text-blue-800">Add Department</h1>

          {/* Update Form (Modal style) */}
          <form
            onSubmit={update.handleSubmit((data: IDepartmentPost) => {
              if (id) updateMutation.mutate({ data, id });
            })}
            className={`${
              isOpen ? "left-1/2 z-50 opacity-100" : "w-0 opacity-0 left-1"
            } absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 flex flex-col gap-5 items-center px-6 py-4 border backdrop-blur-lg bg-white rounded-lg duration-200`}
          >
            <section className="flex justify-between w-full">
              <h1 className="text-lg font-bold text-blue-800">
                Update Department
              </h1>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-red-600 px-2 text-white font-bold rounded-lg hover:bg-red-800 active:scale-90 duration-200"
              >
                <MdClose />
              </button>
            </section>
            <section className="flex flex-col w-full">
              <label className="font-semibold text-sm mb-1">
                Department Name :
              </label>
              <input
                type="text"
                required
                // defaultValue={deptQuery.data?.departmentName}
                {...update.register("departmentName")}
                className="outline-none py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800 bg-inherit"
              />
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[190px] py-2 text-white font-bold rounded-lg hover:bg-blue-800 active:scale-95 duration-200"
            >
              {updateMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="Loading" />
              ) : (
                "Update Department"
              )}
            </button>
          </form>

          {/* Add Department Form */}
          <form
            className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-start sm:items-center pb-5"
            onSubmit={handleSubmit((data: IDepartmentPost) =>
              addDeptMutation.mutate(data)
            )}
          >
            <div className="relative">
              <label className="font-semibold text-sm block mb-1">
                Department Name:
              </label>
              <input
                type="text"
                {...register("departmentName", {
                  required: "Department Name is required",
                })}
                placeholder="Department"
                className={twMerge(
                  "outline-none py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                  errors.departmentName &&
                    "focus:border-b-red-500 border-b-red-500"
                )}
              />
              {errors.departmentName && (
                <p className="text-red-600 text-[11px] font-semibold absolute top-full left-14 xl:left-12">
                  {errors.departmentName.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 w-full sm:w-[190px] h-[40px] py-2 text-white font-bold rounded-lg hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addDeptMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="Loading" />
              ) : (
                "Add Department"
              )}
            </button>
          </form>
        </section>

        {/* Search Bar & Title */}
        <section className="bg-slate-100 px-5 py-3 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h1 className="text-xl font-bold text-blue-800">Department List</h1>
          <input
            type="text"
            className="border-0 rounded-lg px-5 py-2 outline-none text-center w-full sm:w-[250px]"
            placeholder="Q Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        {/* Department Table */}
        <section className="overflow-x-auto mt-4">
          {/* Desktop Table View */}
          <div className="hidden md:block min-w-[600px]">
            <div className="flex mb-3 mt-2 text-lg font-bold">
              <h1 className="w-[300px] pl-3">Department ID</h1>
              <h1 className="w-[200px] text-center">Department Name</h1>
              <h1 className="w-[200px] text-center">Action</h1>
            </div>

            <div className="h-[470px] rounded-lg overflow-y-scroll no-scrollbar flex flex-col">
              {filteredData?.map((dept: IDepartmentGet, index: number) => (
                <div
                  key={dept._id}
                  className={`${
                    index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                  } ${
                    index === 0
                      ? "rounded-t-md"
                      : index === filteredData.length - 1
                      ? "rounded-b-md"
                      : ""
                  } hover:bg-slate-300 group flex items-center py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[300px] pl-3 break-all">{dept._id}</h1>
                  <h1 className="w-[200px] text-center">
                    {dept.departmentName}
                  </h1>
                  <div className="w-[200px] flex gap-2 justify-center items-center opacity-50 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => deleteDeptMutation.mutate(dept._id)}
                      className="bg-red-600 py-2 px-3 text-xl text-white rounded-lg hover:bg-red-800 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setId(dept._id);
                        setTimeout(() => deptQuery.refetch(), 0);
                        setIsOpen(true);
                      }}
                      className="bg-blue-600 py-2 px-3 text-xl text-white rounded-lg hover:bg-blue-800 active:scale-95 duration-200"
                    >
                      <AiFillEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden flex flex-col gap-3">
            {filteredData?.map((dept: IDepartmentGet) => (
              <div
                key={dept._id}
                className="bg-slate-100 p-4 rounded-lg text-sm font-semibold space-y-2"
              >
                <p className="break-all">
                  <span className="text-blue-800">ID:</span> {dept._id}
                </p>
                <p>
                  <span className="text-blue-800">Name:</span>{" "}
                  {dept.departmentName}
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => deleteDeptMutation.mutate(dept._id)}
                    className="bg-red-600 py-2 px-3 text-white text-xl rounded-lg hover:bg-red-800 active:scale-95 duration-200"
                  >
                    <AiFillDelete />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setId(dept._id);
                      setTimeout(() => deptQuery.refetch(), 0);
                      setIsOpen(true);
                    }}
                    className="bg-blue-600 py-2 px-3 text-white text-xl rounded-lg hover:bg-blue-800 active:scale-95 duration-200"
                  >
                    <AiFillEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
