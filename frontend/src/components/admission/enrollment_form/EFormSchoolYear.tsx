import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { Data } from "../../../store/Data";

const EFormSchoolYear = () => {
  const snap = useSnapshot(studentData);
  const isOpen = useSnapshot(Data);

  return (
    <div className="p-10 xs:p-0 sm:p-1 md:p-2 flex xs:flex-col sm:flex-col md:flex-col xs:gap-3 sm:gap-5 md:gap-5 sm:items-center xs:items-center md:items-center justify-between">
      <div className="flex justify-center items-center w-[200px]">
        <img src="/aclc-logo-text.png" alt="" className="" />
      </div>
      <div className="border py-10 px-5 flex flex-col border-slate-500 rounded-md w-[400px] xs:w-[100%] sm:w-[100%] md:[100%] gap-3">
        <section className="grid grid-cols-2 gap-3">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative `}>
            <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              School Year
            </p>

            <select
              value={snap.schoolYear}
              onChange={(e) => {
                studentData.schoolYear = e.target.value;
              }}
              required
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option value=" "> </option>
              <option value="2024-2025">2024-2025</option>
              <option value="2025-2026">2025-2026</option>
            </select>
          </span>
          <span className={` ${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Semester
            </p>
            <select
              value={snap.semester}
              onChange={(e) => {
                studentData.semester = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
            </select>
          </span>
        </section>
        <section className="grid grid-cols-2 gap-3">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative  `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Course
            </p>
            <select
              value={snap.course}
              required
              onChange={(e) => {
                studentData.course = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option value=" "> </option>
              <option value="BSCS">BSCS</option>
              <option value="BSIT">BSIT</option>
              <option value="BSBA">BSBA</option>
              <option value="BSHM">BSHM</option>
            </select>
          </span>
          <span className={` ${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Year
            </p>
            <select
              value={snap.year}
              required
              onChange={(e) => {
                studentData.year = e.target.value;
              }}
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            >
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>
          </span>
        </section>
        <h1 className="text-sm font-bold text-black">INITIAL PAYMENT :</h1>
        <section className="grid grid-cols-3 gap-3">
          <span className={` ${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Date
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="date"
              value={snap.date}
              onChange={(e) => {
                studentData.date = e.target.value;
              }}
            />
          </span>
          <span className={` ${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              OR No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.orNum}
              onChange={(e) => {
                studentData.orNum = e.target.value;
              }}
            />
          </span>
          <span className={` ${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative `}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Amount
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.amount}
              onChange={(e) => {
                studentData.amount = e.target.value;
              }}
            />
          </span>
        </section>
      </div>
    </div>
  );
};

export default EFormSchoolYear;
