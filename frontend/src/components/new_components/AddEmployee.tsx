import { useSnapshot } from "valtio";
import { employeeData } from "../../store/EmployeeData";
import { useState } from "react";

const AddEmployee = () => {
  const snap = useSnapshot(employeeData);
  const [confirmPass, setConfirmPass] = useState<string>();
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
            value={snap.lastName}
            onChange={(e) => {
              employeeData.lastName = e.target.value;
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
          <input
            type="text"
            required
            value={snap.position}
            onChange={(e) => {
              employeeData.position = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Office
          </p>
          <input
            type="text"
            required
            value={snap.department}
            onChange={(e) => {
              employeeData.department = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Date Hired
          </p>
          <input
            type="date"
            required
            value={snap.dateHired}
            onChange={(e) => {
              employeeData.dateHired = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>

        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            SSS No.
          </p>
          <input
            type="text"
            value={snap.sssNum}
            onChange={(e) => {
              employeeData.sssNum = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Phil Health No.
          </p>
          <input
            type="text"
            value={snap.philhealthNum}
            onChange={(e) => {
              employeeData.philhealthNum = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Pag-Ibig No.
          </p>
          <input
            type="text"
            value={snap.pagibigID}
            onChange={(e) => {
              employeeData.pagibigID = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span>
        {/* <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            TIN No.
          </p>
          <input
            type="text"
            value={snap.tinNum}
            onChange={(e) => {
              employeeData.tinNum = e.target.value;
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span> */}

        {/* <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            Confirm Pass
          </p>
          <input
            type="password"
            required
            value={confirmPass}
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
          />
        </span> */}
      </section>
      <section className="grid grid-cols-2 gap-3">
        <span className="relative rounded-lg">
          <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            User Name
          </p>
          <input
            type="text"
            required
            value={snap.userName}
            onChange={(e) => {
              employeeData.userName = e.target.value;
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
      </section>
    </div>
  );
};

export default AddEmployee;
