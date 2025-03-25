import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { userData } from "../../store/UserData";
import { studentData } from "../../store/StudentData";
import { employeeData } from "../../store/EmployeeData";
import apiClient from "../../api/apiClient";
import { IEmployee } from "../../interface/IEmployee";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [students, setStudents] = useState<(typeof studentData)[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch Employees
  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get("/employees");
      setEmployees(response.data.results);
    } catch {
      toast.error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch Students
  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get("/students");
      setStudents(response.data.results);
    } catch {
      toast.error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchStudents();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="">
      <h1 className="text-center bg-blue-600 text-white text-2xl font-bold p-5 rounded-t-md">
        Dashboard
      </h1>
      <div className="flex flex-col gap-5 w-[1100px] border shadow-md rounded-b-md">
        <section className="flex justify-evenly border-b my-10 pb-10">
          <h1 className="shadow-md border rounded-md px-10 py-5 flex items-center gap-3">
            {" "}
            <p className="text-3xl text-green-600">
              <FaUsers />
            </p>
            <p className=" ">
              <h1 className="text-sm text-slate-500">Total Users</h1>
              <h1 className="text-center text-xl font-bold">
                {employees?.length + students.length}
              </h1>
            </p>
          </h1>
          <h1 className="shadow-md border rounded-md px-10 py-5 flex items-center gap-3">
            {" "}
            <p className="text-3xl text-blue-600">
              <FaUsers />
            </p>
            <p className=" ">
              <h1 className="text-sm text-slate-500">Students</h1>
              <h1 className="text-center text-xl font-bold">
                {students?.length}
              </h1>
            </p>
          </h1>
          <h1 className="shadow-md rounded-md border px-10 py-5 flex items-center gap-3 ">
            {" "}
            <p className="text-3xl text-yellow-500">
              <FaUsers />
            </p>
            <p className=" ">
              <h1 className="text-sm text-slate-500">Employees</h1>
              <h1 className="text-center text-xl font-bold">
                {employees?.length}
              </h1>
            </p>
          </h1>
        </section>
        <section className="px-10 pb-10 grid grid-cols-4 gap-5">
          <p
            className="bg-blue-600 text-center py-10 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
            onClick={() => {
              navigate("/admin/profile");
            }}
          >
            Profile
          </p>
          <p
            className="bg-blue-600 text-center py-10 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
            onClick={() => {
              navigate("/admin/users");
            }}
          >
            Users
          </p>
          <p
            className="bg-blue-600 text-center py-10 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
            onClick={() => {
              navigate("/admission/enroll-student");
            }}
          >
            Students
          </p>
          <p
            className="bg-blue-600 text-center py-10 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
            onClick={() => {
              navigate("/admins/employees");
            }}
          >
            Employees
          </p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
