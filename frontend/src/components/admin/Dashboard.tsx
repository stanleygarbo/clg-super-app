import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { toast } from "react-toastify";
import { IEmployeeGet } from "../../interface/IEmployee";
import { IStudentsGet } from "../../interface/IStudents";
// import { useSnapshot } from "valtio";
// import { sidebarState } from "../../store/auth";

const Dashboard = () => {
  const [employees, setEmployees] = useState<IEmployeeGet[]>([]);
  const [students, setStudents] = useState<IStudentsGet[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch Employees
  const fetchEmployees = async () => {
    try {
      // setIsLoading(true);
      const response = await apiClient.get("/employees");
      setEmployees(response.data.results);
    } catch {
      toast.error("Error");
    } finally {
      // setIsLoading(false);
    }
  };

  // Fetch Students
  const fetchStudents = async () => {
    try {
      // setIsLoading(true);
      const response = await apiClient.get("/students");
      setStudents(response.data.results);
    } catch {
      toast.error("Error");
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchStudents();
  }, []);

  const navigate = useNavigate();
  // const snap = useSnapshot(sidebarState);
  // const isOpen = snap.isOpen;

  return (
    <div className={`flex px-3`}>
      <div className="w-0 xl:block xl:w-72 xl:-z-50"></div>
      <div className="flex flex-col my-10">
        <h1 className="text-center bg-blue-600 text-white text-2xl font-bold p-5 rounded-t-md">
          Dashboard
        </h1>
        <div className="flex flex-col gap-5 w-full xl:w-[1200px] border shadow-md rounded-b-md">
          <section className="flex flex-col xl:flex-row gap-3 px-5 justify-evenly border-b my-10 pb-10">
            <h1 className="shadow-md border rounded-md px-10 py-5 flex items-center gap-3">
              {" "}
              <p className="text-3xl text-green-600">
                <FaUsers />
              </p>
              <p className=" ">
                <h1 className="text-sm text-slate-500">Total Users</h1>
                <h1 className="text-center text-xl font-bold text-green-800">
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
                <h1 className="text-center text-xl font-bold text-blue-800">
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
                <h1 className="text-center text-xl font-bold text-yellow-600">
                  {employees?.length}
                </h1>
              </p>
            </h1>
          </section>
          <section className="px-10 pb-10 grid xl:grid-cols-4 gap-5">
            <p
              className="bg-blue-600 text-center py-8 px-16 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Profile
            </p>
            <p
              className="bg-blue-600 text-center py-8 px-16 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
              onClick={() => {
                navigate("/admin/users");
              }}
            >
              Users
            </p>
            <p
              className="bg-blue-600 text-center py-8 px-16 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
              onClick={() => {
                navigate("/admission/enroll-student");
              }}
            >
              Students
            </p>
            <p
              className="bg-blue-600 text-center py-8 px-16 rounded-md hover:cursor-pointer text-white font-bold text-xl hover:scale-105 active:scale-95 duration-200 shadow-sm shadow-blue-600/50"
              onClick={() => {
                navigate("/admin/employees");
              }}
            >
              Employees
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
