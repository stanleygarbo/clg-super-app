import { IoListOutline } from "react-icons/io5";
import AddDepartment from "./AddDepartment";
import { useEffect, useState } from "react";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { IDepartmentGet } from "../../../interface/IDepartment";
import { departmentPostData } from "../../../store/DepartmentData";
import DepartmentList from "./DepartmentList";
import { MdDelete } from "react-icons/md";

const DepartmentDashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [departments, setDepartments] = useState<IDepartmentGet[]>([]);
  let id: string;
  // const navigate = useNavigate();

  // FETCH DEPARTMENT
  const fetchDepartment = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get("/departments");
      setDepartments(response.data.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  // ADD DEPARTMENT
  const handleSubmitDepartment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    let departmentName = departmentPostData.departmentName;

    try {
      await apiClient.post("/departments", {
        departmentName,
      });
      console.log("To be added :: ", departmentName);
      setIsOpen(true);
      toast.success("Department added successfully!");
    } catch (err) {
      console.log(departmentPostData.departmentName);
      toast.error("Error adding department");
    } finally {
      setIsLoading(false);
      setIsOpen(false);
      departmentPostData.departmentName = "";
      fetchDepartment();
    }
  };

  // DELETE DEPARTMENT
  const deleteDepartment = async () => {
    try {
      await apiClient.delete("/departments/" + id);
      toast.success("Successfully deleted department");
    } catch {
      toast.error("Error in deleting department");
    } finally {
      fetchDepartment();
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  return (
    <div>
      <div className="w-[1000px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Department List</h1>
          <button
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
            className="bg-blue-500 px-3 py-2 text-white rounded-md text-lg font-semibold shadow hover:bg-blue-700 active:scale-95 duration-200"
          >
            Add Department
          </button>
        </section>

        {/* ADD DEPARTMENT */}
        <form
          onSubmit={handleSubmitDepartment}
          className={`${
            isOpen ? "w-[400px] opacity-100 left-1/2" : "w-0 opacity-0 left-0"
          } absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-white p-5 rounded-md shadow border-t flex flex-col duration-150`}
        >
          <section className="flex justify-between mb-5">
            <h1 className="font-bold text-lg">Add Department</h1>
            <button
              type="button"
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
              className="font-bold text-red-500 hover:text-black hover:bg-red-500 px-2 rounded duration-200"
            >
              X
            </button>
          </section>
          <AddDepartment />
          <button
            type="submit"
            className="bg-blue-500 mt-5 p-1 py-2 text-white font-bold rounded-md hover:bg-blue-700 active:scale-95 duration-200"
          >
            Add Department
          </button>
        </form>

        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between mb-3">
          <span className="flex gap-3">
            <h1
              className={`bg-white text-blue-700 flex items-center gap-1 px-2 py-2 rounded-md hover:cursor-default`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </h1>
          </span>
          <span className="flex gap-3 ">
            {/* <input
              type="text"
              className="border border-slate-500 rounded-sm px-5"
              placeholder="Q Search..."
            /> */}
          </span>
        </section>
        <section>
          <span className="flex flex-col flex-wrap gap- h-[550px] overflow-scroll no-scrollbar">
            <span className="flex gap-5 mb-3 mt-2">
              <h1 className="w-[240px] font-bold text-start px-3">
                Department ID
              </h1>
              <h1 className="w-[400px] font-bold">Department Name</h1>
              <h1 className="w-[200px] font-bold text-start pl-5">Action</h1>
            </span>
            {departments.map((dept) => (
              <section
                key={dept._id}
                className="flex gap-5 bg-slate-100 py-2 border"
              >
                <h1 className="w-[240px] px-3">{dept._id}</h1>
                <h1 className="w-[400px]">{dept.departmentName}</h1>
                <button
                  onClick={() => {
                    id = dept._id;
                    deleteDepartment();
                  }}
                  className="bg-red-500 p-1 px-5 font-semibold text-white rounded-md hover:bg-red-700 active:scale-95 duration-200"
                >
                  Delete
                </button>
              </section>
            ))}
          </span>
          {/* <DepartmentList /> */}
        </section>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
