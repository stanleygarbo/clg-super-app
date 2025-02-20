import { useSnapshot } from "valtio";
import { departmentPostData } from "../../../store/DepartmentData";

const AddDepartment = () => {
  const snap = useSnapshot(departmentPostData);

  return (
    <div className="">
      <div className="">
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Department Name
          </p>
          <input
            // className="border border-slate-500  py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            type="text"
            value={snap.departmentName}
            onChange={(e) =>
              (departmentPostData.departmentName = e.target.value)
            }
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </span>
      </div>
    </div>
  );
};

export default AddDepartment;
