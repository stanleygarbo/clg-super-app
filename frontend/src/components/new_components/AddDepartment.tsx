// src/components/AddDepartment.tsx
import { departmentData } from "../../store/DepartmentData";
import { useSnapshot } from "valtio";

const AddDepartment = () => {
  // const [departmentName, setDepartmentName] = useState<string>("");
  const snap = useSnapshot(departmentData);

  return (
    <div className="p-4">
      <div className="mb-4">
        <label
          htmlFor="departmentName"
          className="block text-sm font-medium text-gray-700"
        >
          Department Name
        </label>
        <input
          type="text"
          value={snap.departmentName}
          onChange={(e) => (departmentData.departmentName = e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
    </div>
  );
};

export default AddDepartment;
