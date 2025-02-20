// src/components/AddDepartment.tsx
import { useSnapshot } from "valtio";
import { positionPostData } from "../../../store/PositionData";

const AddPosition = () => {
  const snap = useSnapshot(positionPostData);

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Job Title
          </p>
          <input
            type="text"
            value={snap.jobTitle}
            onChange={(e) => (positionPostData.jobTitle = e.target.value)}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
            required
          />
        </span>
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Hourly Wage
          </p>
          <input
            type="number"
            value={snap.hourlyWage}
            onChange={(e) =>
              (positionPostData.hourlyWage = Number(e.target.value))
            }
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </span>
      </div>
    </div>
  );
};

export default AddPosition;
