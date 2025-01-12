import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";
import { employeeData } from "../../store/EmployeeData";

type postData = {
  _id: string;
  jobTitle: string;
  hourlyWage: number;
};

type deptData = {
  _id: string;
  departmentName: string;
};

const UpdateEmployee = () => {
  const snap = useSnapshot(employeeData);
  const [departments, setDepartments] = useState<deptData[]>([]);
  const [positions, setPositions] = useState<postData[]>([]);
  // const [toUpdateEmployees, setToUpdateEmployees] = useState<typeof employeeData>();

  const fetchDepartments = async () => {
    try {
      const response = await apiClient.get(
        "/departments" + employeeData.department
      );
      setDepartments(response.data.results);
      //   console.log(departments);
    } catch (err) {
    } finally {
    }
  };

  const fetchPositions = async () => {
    try {
      const response = await apiClient.get("/positions");
      setPositions(response.data.results);
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
            onChange={(e) => {
              employeeData.surname = e.target.value;
            }}
            type="text"
            required
            value={snap.surname}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            First Name
          </p>
          <input
            onChange={(e) => {
              employeeData.firstName = e.target.value;
            }}
            type="text"
            required
            value={snap.firstName}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Middle Name
          </p>
          <input
            onChange={(e) => {
              employeeData.middleName = e.target.value;
            }}
            required
            type="text"
            value={snap.middleName}
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
            {positions.map((post, index) => (
              <option key={index} value={post._id}>
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
            {departments?.map((dept, index) => (
              <option key={index} value={dept._id}>
                {dept.departmentName}
              </option>
            ))}
          </select>
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Username
          </p>
          <input
            type="text"
            readOnly
            value={snap.username}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Date Hired
          </p>
          <input
            type="text"
            readOnly
            value={snap.hireDate}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Roles
          </p>
          <select
            onChange={(e) => {
              employeeData.roles.push(e.target.value);
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          >
            {/* <option value={snap.roles}>
              {snap.roles}
            </option> */}
            <option value="user">User</option>
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
            <option value="probationary">Probationary</option>
            <option value="regular">Regular</option>
            <option value="contractual">Contractual</option>
            <option value="part-time">Part-time</option>
            <option value="OJT">OJT</option>
          </select>
        </span>
      </section>
    </div>
  );
};

export default UpdateEmployee;
