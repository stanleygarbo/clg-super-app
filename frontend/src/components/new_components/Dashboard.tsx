import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    useEffect(() => {
        fetch("");
    });

    const navigate = useNavigate();
    return (
        <div className="flex justify-center w-full max-w-[1280px] h-auto border shadow-md rounded-md">
            <span className="flex flex-col w-[100%]">
                <section className="flex justify-around bg-white py-10 w-[100%] rounded-t-md border-b-2">
                    <h1 className="bg-blue-200 shadow-md flex items-center justify-center w-40 aspect-video text-center rounded-full text-wrap">
                        No. of users
                    </h1>
                    <h1 className="bg-blue-200 shadow-md flex items-center justify-center w-40 aspect-video text-center rounded-full text-wrap">
                        No. of students
                    </h1>
                    <h1 className="bg-blue-200 shadow-md flex items-center justify-center w-40 aspect-video text-center rounded-full text-wrap">
                        No. of employees
                    </h1>
                </section>
                <section className="grid grid-cols-4 gap-8 bg-white w-[100%] px-6 py-4 overflow-auto no-scrollbar">
                    <button
                        onClick={() => {
                            navigate("/admin/profile");
                        }}
                        className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video"
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => {
                            navigate("/admin/users");
                        }}
                        className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video"
                    >
                        Users
                    </button>
                    <button
                        onClick={() => {
                            navigate("/admission/enroll-student");
                        }}
                        className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video"
                    >
                        Students
                    </button>
                    <button
                        onClick={() => {
                            navigate("/admission/employees");
                        }}
                        className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video"
                    >
                        Employees
                    </button>
                    <button
                        onClick={() => {
                            navigate("/admission/eform");
                        }}
                        className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video"
                    >
                        Enroll Students
                    </button>
                    <button className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video">
                        Payment Center
                    </button>
                    <button className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video">
                        OEd
                    </button>
                    <button className="bg-blue-500 text-white w-full shadow-blue-500/50 active:shadow font-bold hover:scale-105 duration-200 active:scale-100 rounded-lg shadow-md  aspect-video">
                        Students
                    </button>
                </section>
            </span>
        </div>
    );
};

export default Dashboard;
