// src/components/DepartmentList.tsx
import { useState, useEffect } from "react";
import apiClient from "../../api/apiClient";

interface Department {
  id: number;
  name: string;
}

const DepartmentList = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await apiClient.get("/departments");
        setDepartments(response.data);
      } catch (err) {
        setError("Failed to load departments");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Departments List</h2>

      {/* {loading && <p>Loading departments...</p>} */}
      {error && <p className="text-red-500">{error}</p>}

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left">Department ID</th>
            <th className="py-3 px-6 text-left">Department Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.length > 0 ? (
            departments.map((department) => (
              <tr key={department.id} className="border-t">
                <td className="py-3 px-6">{department.id}</td>
                <td className="py-3 px-6">{department.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="py-3 px-6 text-center text-gray-500">
                No departments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
