// src/components/AddDepartment.tsx
import { useSnapshot } from "valtio";
import { programData } from "../../../store/ProgramData";
import apiClient from "../../../api/apiClient";
import { useEffect, useState } from "react";

type deptData = {
  _id: string;
  departmentName: string;
};

const AddProgram = () => {
  const snap = useSnapshot(programData);
  const [departments, setDepartments] = useState<deptData[]>([]);

  // FETCH DEPARMENTS
  const fetchDepartment = async () => {
    try {
      const response = await apiClient.get("/departments");
      setDepartments(response.data.results);
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Program
          </p>
          <input
            type="text"
            value={snap.programName}
            onChange={(e) => (programData.programName = e.target.value)}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
            required
          />
        </span>
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Acronym
          </p>
          <input
            type="text"
            value={snap.programAcronym}
            onChange={(e) => (programData.programAcronym = e.target.value)}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
            required
          />
        </span>
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Department
          </p>
          <select
            required
            onChange={(e) => (programData.departmentId = e.target.value)}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value=""></option>
            {departments.map((dept, index) => (
              <option key={index} value={dept._id}>
                {dept.departmentName}
              </option>
            ))}
          </select>
          {/* <input
            type="number"
            value={snap.departmentId}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          /> */}
        </span>
      </div>
    </div>
  );
};

export default AddProgram;
