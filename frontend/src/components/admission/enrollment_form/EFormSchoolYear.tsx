import { useSnapshot } from "valtio";
import apiClient from "../../../api/apiClient";
import { useEffect, useState } from "react";
import { IProgram } from "../../../store/ProgramData";
import { studentPostData } from "../../../store/StudentData";

const EFormSchoolYear = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [programs, setPrograms] = useState<IProgram[]>([]);

  // FETCH PROGRAMS
  const fetchPrograms = async () => {
    try {
      const response = await apiClient.get("/programs");
      setPrograms(response.data.results);
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className="p-10 flex justify-between">
      <div className="flex justify-center items-center w-[200px]">
        <img src="/aclc-logo-text.png" alt="" className="" />
      </div>
      <div className="border py-10 px-5 flex flex-col border-slate-500 rounded-md w-[400px] gap-3">
        <section className="grid grid-cols-2 gap-3">
          <span className={`${isOpen ? "" : ""} relative `}>
            <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              School Year
            </p>
            <select
              required
              onChange={(e) => {
                studentPostData.schoolYear = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option value="2024-2025" selected>
                2024-2025
              </option>
            </select>
          </span>
          <span className={` ${isOpen ? "" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Standing
            </p>
            <select
              required
              value={snap.semester}
              onChange={(e) => {
                studentPostData.semester = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option selected value="freshmen">
                Freshmen
              </option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior ">Senior </option>
              <option value="graduate">Graduate</option>
            </select>
          </span>
        </section>
        <section className="grid grid-cols-2 gap-3">
          <span className={`${isOpen ? "" : ""} relative  `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Program
            </p>
            <select
              value={snap.program}
              required
              onChange={(e) => {
                studentPostData.program = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              {programs.map((prog, index) => (
                <option
                  selected={snap.program == prog.programAcronym}
                  key={index}
                  value={prog.departmentId}
                >
                  {prog.programAcronym}
                </option>
              ))}
            </select>
          </span>
          <span className={` ${isOpen ? "" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Semester
            </p>
            <select
              required
              onChange={(e) => {
                studentPostData.semester = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option selected value="1st">
                1st
              </option>
              <option value="2nd">2nd</option>
            </select>
          </span>
        </section>
        <h1 className="text-sm font-bold text-black">INITIAL PAYMENT :</h1>
        <section className="grid grid-cols-3 gap-3">
          <span className={` ${isOpen ? "" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Date
            </p>
            <input
              readOnly
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="date"
              // onChange={(e) => {
              //   studentPostData.date = e.target.value;
              // }}
            />
          </span>
          <span className={` ${isOpen ? "" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              OR No.
            </p>
            <input
              readOnly
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              // value={snap.}
              // onChange={(e) => {
              //   studentPostData.orNum = e.target.value;
              // }}
            />
          </span>
          <span className={` ${isOpen ? "" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Amount
            </p>
            <input
              readOnly
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              // value={snap.amount}
              // onChange={(e) => {
              //   studentPostData.amount = e.target.value;
              // }}
            />
          </span>
        </section>
      </div>
    </div>
  );
};

export default EFormSchoolYear;
