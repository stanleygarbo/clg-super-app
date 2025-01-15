// src/components/DepartmentList.tsx
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import apiClient from "../../../api/apiClient";

type deptData = {
  _id: string;
  departmentName: string;
};

const DepartmentList = () => {
  const [departments, setDepartments] = useState<deptData[]>([]);
  let id: string;

  const fetchDepartments = async () => {
    try {
      const response = await apiClient.get("/departments");
      setDepartments(response.data.results);
      // console.log(departments);
    } catch (err) {
    } finally {
    }
  };

  const deleteDepartment = async () => {
    try {
      await apiClient.delete("/departments/" + id);
      toast.success("Succesfully deleted");
      // console.log(response);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [departments.length]);

  return (
    <div className="flex flex-col gap-3 pt-2 pb-10 rounded-b-md h-[90%] overflow-scroll no-scrollbar">
      <h1 className="text-center font-bold text-xl">Departments :</h1>

      {departments.map((dept) => (
        <section
          key={dept._id}
          className="relative group bg-blue-600 p-2 text-white font-semibold flex justify-center items-center rounded-md shadow-sm shadow-blue-600/50 duration-200"
        >
          <h1 className="">{dept.departmentName}</h1>
          <button
            type="button"
            onClick={() => {
              id = dept._id;
              deleteDepartment();
            }}
            className="absolute top-0 right-0 mt-1 mr-1 opacity-0 text-red-600 text-sm p-[3px] shadow-md rounded-md bg-white group-hover:opacity-100 hover:scale-110 duration-200"
          >
            <MdDelete />
          </button>
        </section>
      ))}
    </div>
  );
};

export default DepartmentList;
