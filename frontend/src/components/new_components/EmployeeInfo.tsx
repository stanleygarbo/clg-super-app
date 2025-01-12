import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";
import { employeeData } from "../../store/EmployeeData";
import { useParams } from "react-router-dom";

const EmployeeInfo = () => {
  const [employeeInfo, setEmployeeInfo] = useState(typeof employeeData);
  const { id } = useParams();
  const fetchEmployee = async () => {
    try {
      const response = await apiClient.get("/employees/" + id);
      console.log("Employee Info : ", response.data);
      console.log(id);
      // setEmployeeInfo(response);
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div>
      <div>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            LastName
          </p>
          <input
            type="text"
            readOnly
            value={employeeInfo}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
      </div>
    </div>
  );
};

export default EmployeeInfo;
