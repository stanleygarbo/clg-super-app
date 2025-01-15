import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";
import { employeeData } from "../../../store/EmployeeData";
import apiClient from "../../../api/apiClient";

type deptData = {
  _id: string;
  departmentName: string;
};

type postData = {
  _id: string;
  jobTitle: string;
  hourlyWage: number;
};

const AddEmployee = () => {
  const snap = useSnapshot(employeeData);
  const [departments, setDepartments] = useState<deptData[]>([]);
  const [positions, setPositions] = useState<postData[]>([]);

  const fetchDepartments = async () => {
    try {
      const response = await apiClient.get("/departments");
      setDepartments(response.data.results);
      console.log(departments);
    } catch (err) {
    } finally {
    }
  };

  const fetchPositions = async () => {
    try {
      const response = await apiClient.get("/positions");
      setPositions(response.data.results);
      console.log("Positions : ", positions);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    fetchPositions();
    fetchDepartments();
  }, []);

  return (
    <div className="flex flex-col gap-3 w-[100%]">
      <section className="grid grid-cols-3 gap-3">
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Last Name
          </p>
          <input
            type="text"
            required
            value={snap.surname}
            onChange={(e) => {
              employeeData.surname = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            First Name
          </p>
          <input
            type="text"
            required
            value={snap.firstName}
            onChange={(e) => {
              employeeData.firstName = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Middle Name
          </p>
          <input
            type="text"
            value={snap.middleName}
            onChange={(e) => {
              employeeData.middleName = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Position
          </p>
          <select
            onChange={(e) => {
              employeeData.position = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          >
            {positions?.map((post, index) => (
              <option
                selected
                key={index}
                defaultValue={post._id[0]}
                value={post._id}
              >
                {post.jobTitle}
              </option>
            ))}
          </select>
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Department
          </p>
          <select
            onChange={(e) => {
              employeeData.department = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          >
            <option value={snap.department}> </option>
            {departments.map((dept, index) => (
              <option selected key={index} value={dept._id}>
                {dept.departmentName}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            required
            value={snap.department}
            
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          /> */}
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Username
          </p>
          <input
            type="text"
            required
            value={snap.username}
            onChange={(e) => {
              employeeData.username = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Password
          </p>
          <input
            type="password"
            required
            value={snap.password}
            onChange={(e) => {
              employeeData.password = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Roles
          </p>
          <select
            defaultValue="user"
            onChange={(e) => {
              employeeData.roles.push(e.target.value);
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          >
            <option selected value="user">
              User
            </option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="admission">Admission</option>
            <option value="accounting">Accounting</option>
            <option value="registrar">Registrar</option>
            <option value="faculty">Faculty</option>
            <option value="clinic">Clinic</option>
            <option value="ssc">SCC</option>
            <option value="super">Super</option>
          </select>
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Employment Type
          </p>
          <select
            onChange={(e) => {
              employeeData.employmentType = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          >
            <option selected value="probationary">
              Probationary
            </option>
            <option value="regular">Regular</option>
            <option value="contractual">Contractual</option>
          </select>
        </span>
      </section>
    </div>
  );
};

export default AddEmployee;
