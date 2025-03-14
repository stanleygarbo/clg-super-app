import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { IEmployeeGet } from "../../../interface/IEmployee";
import { MdArchive, MdPageview } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../../api/employee";

const Employees = () => {
  let { id } = useParams<string>();
  const navigate = useNavigate();

  const query = useQuery({ queryKey: ["employee"], queryFn: getEmployees });

  // DELETE EMPLOYEE
  const deleteEmployee = async () => {
    try {
      await apiClient.delete("/employees/" + id);
      toast.success("Successfully deleted employee");
    } catch {
      toast.error("Error in deleting employee");
    } finally {
      query.refetch;
    }
  };

  const [search, setSearch] = useState("");

  const filteredEmployees = query.data?.results?.length
    ? query.data.results.filter((employee: IEmployeeGet) =>
        `${employee.surname} ${employee.firstName} ${employee.middleName}`
          .toLowerCase()
          .includes(search.toLowerCase())
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
          <span className="flex gap-5 mb-3 text-blue-900">
            <h1 className="w-[250px] font-bold pl-5">Name</h1>
            <h1 className="w-[120px] font-bold">Position</h1>
            <h1 className="w-[120px] font-bold">Department</h1>
            <h1 className="w-[150px] font-bold">Employment Type</h1>
            <h1 className="w-[100px] font-bold">Roles</h1>
            <h1 className="w-[100px] font-bold">Status</h1>
            <h1 className="w-[220px] font-bold pl-10">Action</h1>
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
                index == 0
                  ? "rounded-t-md"
                  : index == filteredEmployees?.length - 1
                  ? "rounded-b-md"
                  : ""
              } ${
                index % 2 == 0
                  ? "bg-blue-100 hover:bg-blue-500 hover:text-white"
                  : "bg-slate-100 hover:bg-slate-400 hover:text-white"
              } flex gap-5 pl-3 py-2 text-sm font-semibold items-center rounded-m  duration-500`}
            >
              <h1 className="flex gap-2 items-center w-[240px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-7 aspect-square rounded-full"
                />
                <p>
                  {employee.surname}, {employee.firstName} {employee.middleName}
                </p>
              </h1>
              <h1 className="w-[90px]">{employee.position?.jobTitle}</h1>
              <h1 className="w-[100px]">
                {employee.department?.departmentName}
              </h1>
              <h1 className="w-[140px] text-center">
                {employee.employmentType}
              </h1>
              <h1 className="w-[100px]">{employee.roles.join(", ")}</h1>
              <h1 className="w-[70px] text-green-500 font-semibold flex items-center gap-1">
                <div className="w-2 mt-1 aspect-square bg-green-500 rounded-full"></div>{" "}
                Active
              </h1>
              <h1 className="w-[220px] flex gap-2">
                <button
                  onClick={() => {
                    id = employee._id;
                    navigate("/" + id + "/profile");
                  }}
                  type="button"
                  className="bg-blue-600 text-xl py-2 px-3 rounded-md font-semibold text-white hover:bg-blue-800 active:scale-95 duration-200"
                >
                  <MdPageview />
                </button>
                <button
                  onClick={() => {
                    id = employee._id;
                    navigate("/admin/update-employee/" + id);
                  }}
                  type="button"
                  className="bg-green-500 text-lg px-3 rounded-md font-semibold text-white hover:bg-green-700 active:scale-95 duration-200"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    id = employee._id;
                    deleteEmployee();
                  }}
                  type="button"
                  className="bg-red-500 px-3 rounded-md text-xl font-semibold text-white hover:bg-red-700 active:scale-95 duration-200"
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
