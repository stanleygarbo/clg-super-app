import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  useEffect(() => {
    fetch("")
  })

  const navigate = useNavigate();
  return (
    <div className="flex justify-center w-[1100px] h-[660px] border shadow-md rounded-md">
      <span className="flex flex-col w-[100%]">
        <section className="flex justify-around bg-white py-10 w-[100%] rounded-t-md border-b-2">
          <h1 className="bg-blue-200 shadow-md flex items-center justify-center w-40 aspect-square text-center rounded-full text-wrap">
            No. of users
          </h1>
          <h1 className="bg-blue-200 shadow-md flex items-center justify-center w-40 aspect-square text-center rounded-full text-wrap">
            No. of students
          </h1>
          <h1 className="bg-blue-200 shadow-md flex items-center justify-center w-40 aspect-square text-center rounded-full text-wrap">
            No. of employees
          </h1>
        </section>
        <section className="flex flex-wrap justify-evenly bg-white w-[100%] py-4 overflow-auto no-scrollbar">
          <button
            onClick={() => {
              navigate("/admin/profile");
            }}
            className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square"
          >
            Profile
          </button>
          <button
            onClick={() => {
              navigate("/admin/users");
            }}
            className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square"
          >
            Users
          </button>
          <button
            onClick={() => {
              navigate("/admission/enroll-student");
            }}
            className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square"
          >
            Students
          </button>
          <button
            onClick={() => {
              navigate("/admission/employees");
            }}
            className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square"
          >
            Employees
          </button>
          <button
            onClick={() => {
              navigate("/admission/eform");
            }}
            className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square"
          >
            Enroll Students
          </button>
          <button className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square">
            Payment Center
          </button>
          <button className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square">
            OEd
          </button>
          <button className="bg-blue-500 text-white w-[150px] shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 mx-10 my-5 rounded-lg shadow-md  aspect-square">
            Students
          </button>
        </section>
      </span>
    </div>
  );
};

export default Dashboard;
