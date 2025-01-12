// src/components/AddDepartment.tsx
import { useSnapshot } from "valtio";
import { positionData } from "../../store/PositionData";
import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";



const AddPosition = () => {
  
  const snap = useSnapshot(positionData);



  return (
    <div className="p-4">
      <div className="mb-4">
        <label
          htmlFor="departmentName"
          className="block text-sm font-medium text-gray-700"
        >
          Position Name
        </label>
        <input
          type="text"
          value={snap.jobTitle}
          onChange={(e) => (positionData.jobTitle = e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <input
          type="number"
          value={snap.hourlyWage}
          onChange={(e) => (positionData.hourlyWage = Number(e.target.value))}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
    </div>
  );
};

export default AddPosition;
