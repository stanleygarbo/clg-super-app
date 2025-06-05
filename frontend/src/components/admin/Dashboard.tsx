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
    <div className={`flexcflex-col xl:mt-20 w-full xl:w-[1100px]`}>
      <h1 className="text-center bg-blue-800 text-blue-100 text-2xl font-bold p-5 xl:rounded-t-md">
        Dashboard
      </h1>
      <div className="flex flex-col gap-5 bg-blue-50 xl:rounded-b-md">
        <section className="flex flex-col xl:flex-row gap-5 px-10 justify-evenly my-10 pb-5">
          <h1 className="rounded-lg px-10 py-5 flex items-center gap-3 bg-white justify-center">
            {" "}
            <p className="text-3xl text-black">
              <FaUsers />
            </p>
            <p className=" ">
              <h1 className="text-sm text-slate-700 font-semibold">
                Total Users
              </h1>
              <h1 className="text-center text-xl font-bold text-slate-700">
                {employees?.length + students.length}
              </h1>
            </p>
          </h1>
          <h1 className="rounded-lg px-10 py-5 flex items-center gap-3 bg-blue-100 justify-center">
            {" "}
            <p className="text-3xl text-black">
              <FaUsers />
            </p>
            <p className=" ">
              <h1 className="text-sm text-slate-700 font-semibold">Students</h1>
              <h1 className="text-center text-xl font-bold text-blue-700">
                {students.length}
              </h1>
            </p>
          </h1>
          <h1 className="rounded-lg px-10 py-5 flex items-center gap-3 bg-red-100 justify-center">
            {" "}
            <p className="text-3xl text-black">
              <FaUsers />
            </p>
            <p className=" ">
              <h1 className="text-sm text-slate-700 font-semibold">
                Employees
              </h1>
              <h1 className="text-center text-xl font-bold text-red-700">
                {employees?.length}
              </h1>
            </p>
          </h1>
        </section>
        <section className="px-10 pb-10 grid xl:grid-cols-4 gap-5">
          <p
            className="bg-blue-600 text-center py-8 px-16 rounded-lg hover:cursor-pointer text-white font-semibold text-xl hover:bg-blue-800 active:scale-95 duration-200"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </p>
          <p
            className="bg-blue-600 text-center py-8 px-16 rounded-lg hover:cursor-pointer text-white font-semibold text-xl hover:bg-blue-800 active:scale-95 duration-200"
            onClick={() => {
              navigate("/admin/users");
            }}
          >
            Users
          </p>
          <p
            className="bg-blue-600 text-center py-8 px-16 rounded-lg hover:cursor-pointer text-white font-semibold text-xl hover:bg-blue-800 active:scale-95 duration-200"
            onClick={() => {
              navigate("/admission/enroll-student");
            }}
          >
            Students
          </p>
          <p
            className="bg-blue-600 text-center py-8 px-16 rounded-lg hover:cursor-pointer text-white font-semibold text-xl hover:bg-blue-800 active:scale-95 duration-200"
            onClick={() => {
              navigate("/admin/employees");
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
