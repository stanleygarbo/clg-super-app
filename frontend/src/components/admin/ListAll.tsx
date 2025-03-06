import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { departmentData } from "../../store/DepartmentData";
import { toast } from "react-toastify";
import AddPosition from "./positions/AddPosition";
import { positionData } from "../../store/PositionData";
import AddDepartment from "./departments/AddDepartment";
import DepartmentList from "./departments/DepartmentList";
import PositionList from "./positions/PositionList";
import ProgramList from "./programs/ProgramList";
import AddProgram from "./programs/AddProgram";
import { programData } from "../../store/ProgramData";
import CoursesList from "./courses/CoursesList";
import AddCourse from "./courses/AddCourse";
import { courseData } from "../../store/CourseData";

const ListAll = () => {
  const [isOpenDept, setIsOpenDept] = useState<boolean>(true);
  const [isOpenPost, setIsOpenPost] = useState<boolean>(true);
  const [isOpenProg, setIsOpenProg] = useState<boolean>(true);
  const [isOpenCour, setIsOpenCour] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  //   ADD DEPARTMENT
  const handleSubmitDepartment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    let departmentName = departmentData.departmentName;

    try {
      await apiClient.post("/departments", {
        departmentName,
      });
      console.log("To be added :: ", departmentName);
      setIsOpenDept(true);
      toast.success("Department added successfully!");
      navigate("/admin/list-all");
    } catch (err) {
      setError("Error adding department");
      console.log(departmentData.departmentName);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   ADD POSITION
  const handleSubmitPosition = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = {
        jobTitle: positionData?.jobTitle,
        hourlyWage: positionData?.hourlyWage,
      };
      console.log("To be Added : ", data);
      await apiClient.post("/positions", data);
      setIsOpenPost(true);
      toast.success("Position added successfully!");
    } catch (err) {
      setError("Error adding Position");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   ADD PROGRAM
  const handleSubmitProgram = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = {
        programName: programData.programName,
        programAcronym: programData.programAcronym,
        departmentId: programData.departmentId,
      };
      console.log("To be Added : ", data);
      await apiClient.post("/programs", data);
      setIsOpenProg(true);
      toast.success("Program added successfully!");
    } catch (err) {
      setError("Error adding Program");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  //    ADD COURSE
  const handleSubmitCourse = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = {
        courseName: courseData.courseName,
        courseCode: courseData.courseCode,
        units: courseData.units,
      };
      console.log("To be Added : ", data);
      await apiClient.post("/courses", data);
      setIsOpenProg(true);
      toast.success("Course added successfully!");
    } catch (err) {
      setError("Error adding Course");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[1000px] h-[600px] mt-10">
        <h1 className="bg-blue-600 font-bold text-2xl text-white py-5 text-center rounded-t-md">
          Department & Positions
        </h1>
        <section className="shadow-md border relative h-[100%] overflow-hidden">
          <span className="flex items-center justify-evenly pt-10 pb-2 px-10">
            <button
              type="button"
              onClick={() => {
                isOpenDept ? setIsOpenDept(false) : setIsOpenDept(true);
                setIsOpenPost(true);
                setIsOpenProg(true);
                setIsOpenCour(true);
              }}
              className="flex items-center gap-2 rounded-md px-2 bg-blue-600 shadow-sm shadow-blue-600/50 text-white text-lg py-1 hover:scale-105 active:scale-100 duration-200"
            >
              <MdOutlinePlaylistAdd />
              Department
            </button>
            <button
              type="button"
              onClick={() => {
                isOpenPost ? setIsOpenPost(false) : setIsOpenPost(true);
                setIsOpenDept(true);
                setIsOpenProg(true);
                setIsOpenCour(true);
              }}
              className="flex items-center gap-2 rounded-md px-2 bg-blue-600 shadow-sm shadow-blue-600/50 text-white text-lg py-1 hover:scale-105 active:scale-100 duration-200"
            >
              <MdOutlinePlaylistAdd />
              Position
            </button>
            <button
              type="button"
              onClick={() => {
                isOpenProg ? setIsOpenProg(false) : setIsOpenProg(true);
                setIsOpenDept(true);
                setIsOpenPost(true);
                setIsOpenCour(true);
              }}
              className="flex items-center gap-2 rounded-md px-2 bg-blue-600 shadow-sm shadow-blue-600/50 text-white text-lg py-1 hover:scale-105 active:scale-100 duration-200"
            >
              <MdOutlinePlaylistAdd />
              Program
            </button>
            <button
              type="button"
              onClick={() => {
                isOpenCour ? setIsOpenCour(false) : setIsOpenCour(true);
                setIsOpenDept(true);
                setIsOpenPost(true);
                setIsOpenProg(true);
              }}
              className="flex items-center gap-2 rounded-md px-2 bg-blue-600 shadow-sm shadow-blue-600/50 text-white text-lg py-1 hover:scale-105 active:scale-100 duration-200"
            >
              <MdOutlinePlaylistAdd />
              Courses
            </button>
          </span>
          {/* ADD DEPARTMENT */}
          <form
            onSubmit={handleSubmitDepartment}
            className={`${
              isOpenDept
                ? "opacity-0 w-0 left-0"
                : "w-[400px] opacity-100 left-1/2 z-50"
            } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border rounded-md duration-150 overflow-hidden p-5 flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-between">
              Add Department{" "}
              <button
                type="button"
                onClick={() => {
                  isOpenDept ? setIsOpenDept(false) : setIsOpenDept(true);
                }}
                className="mr-3 bg-red-600 py- px-3 text-lg text-white rounded-md shadow-md font-bold hover:scale-105 duration-200"
              >
                X
              </button>
            </h2>
            <AddDepartment />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 mx-5 py-2 text-white font-bold rounded-md shadow-md hover:scale-105 active:scale-95 duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Department"}
            </button>
          </form>
          {/* ADD POSITION */}
          <form
            onSubmit={handleSubmitPosition}
            className={`${
              isOpenPost
                ? "opacity-0 w-0 left-0"
                : "w-[400px] opacity-100 left-1/2 z-50"
            } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border rounded-md duration-150 overflow-hidden p-5 flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-between">
              Add Position{" "}
              <button
                type="button"
                onClick={() => {
                  isOpenPost ? setIsOpenPost(false) : setIsOpenPost(true);
                }}
                className="mr-3 bg-red-600 py- px-3 text-lg text-white rounded-md shadow-md font-bold hover:scale-105 duration-200"
              >
                X
              </button>
            </h2>
            <AddPosition />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 mx-5 py-2 text-white font-bold rounded-md shadow-md hover:scale-105 active:scale-95 duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Position"}
            </button>
          </form>

          {/* ADD PROGRAM */}
          <form
            onSubmit={handleSubmitProgram}
            className={`${
              isOpenProg
                ? "opacity-0 w-0 left-0"
                : "w-[400px] opacity-100 left-1/2 z-50"
            } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border rounded-md duration-150 overflow-hidden p-5 flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-between">
              Add Position{" "}
              <button
                type="button"
                onClick={() => {
                  isOpenProg ? setIsOpenProg(false) : setIsOpenProg(true);
                }}
                className="mr-3 bg-red-600 py- px-3 text-lg text-white rounded-md shadow-md font-bold hover:scale-105 duration-200"
              >
                X
              </button>
            </h2>
            <AddProgram />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 mx-5 py-2 text-white font-bold rounded-md shadow-md hover:scale-105 active:scale-95 duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Program"}
            </button>
          </form>

          {/* ADD COURSE */}
          <form
            onSubmit={handleSubmitCourse}
            className={`${
              isOpenCour
                ? "opacity-0 w-0 left-0"
                : "w-[400px] opacity-100 left-1/2 z-50"
            } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border rounded-md duration-150 overflow-hidden p-5 flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-between">
              Add Course{" "}
              <button
                type="button"
                onClick={() => {
                  isOpenCour ? setIsOpenCour(false) : setIsOpenCour(true);
                }}
                className="mr-3 bg-red-600 py- px-3 text-lg text-white rounded-md shadow-md font-bold hover:scale-105 duration-200"
              >
                X
              </button>
            </h2>
            <AddCourse />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 mx-5 py-2 text-white font-bold rounded-md shadow-md hover:scale-105 active:scale-95 duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Course"}
            </button>
          </form>

          <span className="flex justify-evenly w-[100%] h-[100%] px-10">
            <DepartmentList />
            <PositionList />
            <ProgramList />
            <CoursesList />
          </span>
        </section>
      </div>
    </div>
  );
};

export default ListAll;
