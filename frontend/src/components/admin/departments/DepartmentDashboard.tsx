import { IoListOutline } from "react-icons/io5";
import AddDepartment from "./AddDepartment";
import { useEffect, useState } from "react";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { IDepartment } from "../../../interface/IDepartment";
import { departmentData } from "../../../store/DepartmentData";
import { useNavigate } from "react-router-dom";

const DepartmentDashboard = () => {
  // const departments = [
  //   { departmentName: "Faculty" },
  //   { departmentName: "Clinic" },
  //   { departmentName: "Registrar" },
  //   { departmentName: "Admission" },
  //   { departmentName: "SCC" },
  //   { departmentName: "Accouting" },
  //   { departmentName: "Admin" },
  //   { departmentName: "Super" },
  //   { departmentName: "HR" },
  //   { departmentName: "CS Department" },
  //   { departmentName: "HM Department" },
  //   { departmentName: "BA Department" },
  // ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  // const navigate = useNavigate();

  // FETCH DEPARTMENT
  const fetchDepartment = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get("/departments");
      setDepartments(response.data.results);
    } catch {
      toast.error("Error while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  // ADD DEPARTMENT
  const handleSubmitDepartment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    let departmentName = departmentData.departmentName;

    try {
      await apiClient.post("/departments", {
        departmentName,
      });
      console.log("To be added :: ", departmentName);
      setIsOpen(true);
      toast.success("Department added successfully!");
    } catch (err) {
      console.log(departmentData.departmentName);
      toast.error("Error adding department");
    } finally {
      setIsLoading(false);
      setIsOpen(false);
      departmentData.departmentName = "";
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
            className="bg-blue-700 px-3 py-2 text-white rounded-md text-sm font-semibold shadow hover:bg-blue-600 duration-200"
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
            className="bg-blue-600 mt-5 p-1 text-white font-bold rounded-md hover:bg-blue-700 active:scale-95 duration-200"
          >
            Add
          </button>
        </form>

        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between mb-3">
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
            {/* <input
              type="text"
              className="border border-slate-500 rounded-sm px-5"
              placeholder="Q Search..."
            /> */}
          </span>
        </section>
        <section>
          <span className="flex flex-col flex-wrap gap-3 h-[550px] overflow-scroll no-scrollbar">
            {departments?.map((dept, index) => (
              <h1
                key={index}
                className="bg-slate-100 px-5 py-2 font-bold rounded-md shadow border-t text-center"
              >
                {dept.departmentName}
              </h1>
            ))}
          </span>
        </section>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
