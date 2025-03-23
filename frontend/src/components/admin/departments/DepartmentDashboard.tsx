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
  getDepartment,
  getDepartments,
  updateDepartment,
} from "../../../api/department";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";

const DepartmentDashboard = () => {
  const methods = useForm<IDepartmentPost>();
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
      methods.reset();
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

  // useEffect(() => {
  //   if (deptQuery.data) {
  //     update.reset({
  //       departmentName: deptQuery.data?.departmentName,
  //     });
  //   }
  // }, [deptQuery.data, update.reset]);

  return (
    <div>
      <div className="w-[1100px] h-[650px] relative">
        <section className={`p-5 flex items-center justify-between gap-10`}>
          <h1 className="text-xl font-bold text-blue-800">Add Department</h1>
          {/* UPDATE DEPARTMENT */}
          <form
            onSubmit={update.handleSubmit((data: IDepartmentPost) => {
              console.log("ID :: ", id);
              if (id) updateMutation.mutate({ data, id });
            })}
            className={`${
              isOpen ? "left-1/2 z-50" : "w-0 opacity-0 left-1"
            } absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 flex flex-col gap-5 items-center px-10 py-5 border border-blue-300 backdrop-blur-lg rounded-md duration-200`}
          >
            <section className="flex justify-between w-[250px]">
              <h1 className="text-lg font-bold text-blue-800">
                Update Department
              </h1>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="bg-red-600 px-2 text-center font-bold text-white rounded-md hover:bg-red-800 active:scale-90 duration-200"
              >
                <MdClose />
              </button>
            </section>
            <section className="flex flex-col">
              <h1 className="font-semibold text-sm">Department Name :</h1>
              <input
                type="text"
                required
                defaultValue={deptQuery.data?.departmentName}
                {...update.register("departmentName")}
                className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800 bg-inherit"
              />
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[190px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {updateMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Update Department"
              )}
            </button>
          </form>
          {/* ADD DEPARTMENT */}
          <form
            className="flex gap-10"
            onSubmit={methods.handleSubmit((data: IDepartmentPost) =>
              addDeptMutation.mutate(data)
            )}
          >
            <section className="flex items-center gap-3">
              <h1 className="font-semibold text-sm">Department Name :</h1>
              <input
                type="text"
                {...methods.register("departmentName")}
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
            <span className="h-[470px] rounded-md overflow-scroll no-scrollbar flex flex-col">
              {filteredData?.map((dept: IDepartmentGet, index: number) => (
                <section
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
                  <h1 className="w-[300px] pl-3">{dept._id}</h1>
                  <h1 className="w-[200px] text-center">
                    {dept.departmentName}
                  </h1>
                  <h1 className="w-[200px] flex gap-2 justify-center items-center opacity-0 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => {
                        deleteDeptMutation.mutate(dept._id);
                      }}
                      className="bg-red-600 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-red-800 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setId(dept._id);
                        setTimeout(() => {
                          deptQuery.refetch();
                        }, 0);
                        // console.log(deptQuery.data);
                        setIsOpen(true);
                      }}
                      className="bg-blue-600 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-blue-800 active:scale-95 duration-200"
                    >
                      <AiFillEdit />
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
