import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdArchive, MdPageview } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEmployee, getEmployees } from "../../../api/employee";
import { IEmployeeGet } from "../../../interface/IEmployee";

const Employees = () => {
  // let { id } = useParams<string>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const query = useQuery({ queryKey: ["employee"], queryFn: getEmployees });

  // DELETE EMPLOYEE
  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  // const deleteEmployee = async () => {
  //   try {
  //     await apiClient.delete("/employees/" + id);
  //     toast.success("Successfully deleted employee");
  //   } catch {
  //     toast.error("Error in deleting employee");
  //   } finally {
  //     query.refetch;
  //   }
  // };

  const filteredEmployees = query.data?.results?.length
    ? query.data.results
        .filter((employee: IEmployeeGet) =>
          `${employee.surname} ${employee.firstName} ${employee.middleName}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .sort((a: IEmployeeGet, b: IEmployeeGet) =>
          a.surname.localeCompare(b.surname)
        )
    : [];

  return (
    <div className="">
      <div className="w-[1100px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="opacity-0">H</h1>
          <button
            onClick={() => {
              navigate("/admin/add-employee");
            }}
            className="bg-blue-600 px-3 py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
          >
            Add Employee
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-2 rounded-md flex justify-between">
          <span className="flex gap-3">
            <h1 className="text-xl font-bold text-blue-800 py-1">
              Employee's List
            </h1>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border-0 text-center rounded-md px-5 outline-none"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section className="py-3">
          <span className="flex mb-3 text-lg">
            <h1 className="w-[300px] font-bold text-center">Name</h1>
            <h1 className="w-[100px] font-bold text-center">Position</h1>
            <h1 className="w-[120px] font-bold text-center">Department</h1>
            <h1 className="w-[200px] font-bold text-center">Gender</h1>
            <h1 className="w-[180px] font-bold text-center">Roles</h1>
            <h1 className="w-[100px] font-bold text-center">Status</h1>
            <h1 className="w-[200px] font-bold text-center">Action</h1>
          </span>
          {/* {query.isLoading ? (
            <div className="text-center mt-10">Loading...</div>
          ) : (
            filteredEmployees?.length < 1 && (
              <div className="text-center mt-20">No Employee...</div>
            )
          )} */}

          {filteredEmployees.map((employee: IEmployeeGet, index: number) => (
            <span
              key={index}
              className={`${
                index === 0
                  ? "rounded-t-md"
                  : index === filteredEmployees?.length - 1
                  ? "rounded-b-md"
                  : ""
              } ${
                index % 2 == 0 ? "bg-slate-200" : "bg-slate-100"
              } flex hover:bg-slate-300 py-2 text-sm font-semibold group items-center w-[1100px] duration-200`}
            >
              <h1 className="flex items-center pl-3 w-[300px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-6 mr-2 aspect-square rounded-full"
                />
                <p>
                  {employee.surname}, {employee.firstName}{" "}
                  {employee.middleName[0]}.
                </p>
              </h1>
              <h1 className="w-[100px] text-center">
                {employee.position?.jobTitle}
              </h1>
              <h1 className="w-[120px] text-center">
                {employee.department?.departmentName}
              </h1>
              <h1 className="w-[200px] text-center">{employee?.birth?.sex}</h1>
              <h1 className="w-[180px] text-center">
                {employee.roles.join(", ")}
              </h1>
              <h1 className="w-[100px] justify-center text-green-700 font-semibold flex items-center gap-1">
                <div className="w-[9px] aspect-square bg-green-700 rounded-full"></div>{" "}
                Active
              </h1>
              <h1 className="w-[200px] flex gap-2 items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => {
                    // id = employee._id;
                    navigate("/" + employee._id + "/profile");
                  }}
                  type="button"
                  className="bg-blue-600 text-xl py-2 px-3 rounded-md font-semibold text-white hover:bg-blue-800 active:scale-95 duration-200"
                >
                  <MdPageview />
                </button>
                <button
                  onClick={() => {
                    // id = employee._id;
                    navigate("/admin/update-employee/" + employee._id);
                  }}
                  type="button"
                  className="bg-blue-600 text-xl py-2 px-3 rounded-md font-semibold text-white hover:bg-blue-800 active:scale-95 duration-200"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    // id = employee._id;
                    deleteMutation.mutate(employee._id);
                  }}
                  type="button"
                  className="bg-red-600 py-2 px-3 rounded-md text-xl font-semibold text-white hover:bg-red-800 active:scale-95 duration-200"
                >
                  <MdArchive />
                </button>
              </h1>
            </span>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Employees;
