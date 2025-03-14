import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { IoListOutline } from "react-icons/io5";
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

  const filteredEmployees = query.data?.length
    ? query.data.filter((employee: IEmployeeGet) =>
        `${employee.surname} ${employee.firstName} ${employee.middleName}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="">
      <div className="w-[1150px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Employee's List</h1>
          <button
            onClick={() => {
              navigate("/admin/add-employee");
            }}
            className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm hover:shadow-md active:shadow hover:shadow-blue-500/50 duration-200"
          >
            Add Employee
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
          <span className="flex gap-3">
            <button
              className={`bg-blue-600 text-white flex items-center gap-1 px-2 py-2 rounded-md shadow border-t`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </button>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border border-slate-500 rounded-md px-5 outline-none"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section className="py-3">
          <span className="flex gap-5 mb-3">
            <h1 className="w-[250px] font-bold">Name</h1>
            <h1 className="w-[90px] font-bold">Position</h1>
            <h1 className="w-[100px] font-bold">Department</h1>
            <h1 className="w-[140px] font-bold">Employment Type</h1>
            <h1 className="w-[100px] font-bold">Roles</h1>
            <h1 className="w-[100px] font-bold">Status</h1>
            <h1 className="w-[220px] font-bold text-start">Action</h1>
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
              className="flex gap-5 bg-slate-50 pl-3 py-3 text-sm items-center rounded-m border border-slate-100 hover:bg-slate-100 duration-500"
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
                  className="bg-blue-500 text-xl py-1 px-4 rounded-md font-semibold text-white hover:bg-blue-700 active:scale-95 duration-200"
                >
                  <MdPageview />
                </button>
                <button
                  onClick={() => {
                    id = employee._id;
                    navigate("/admin/update-employee/" + id);
                  }}
                  type="button"
                  className="bg-green-500 text-lg px-4 rounded-md font-semibold text-white hover:bg-green-700 active:scale-95 duration-200"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    id = employee._id;
                    deleteEmployee();
                  }}
                  type="button"
                  className="bg-red-500 px-4 rounded-md text-xl font-semibold text-white hover:bg-red-700 active:scale-95 duration-200"
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
