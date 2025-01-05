import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { Data } from "../../../store/Data";

const EformSiblings = () => {
  const snap = useSnapshot(studentData);
  const isOpen = useSnapshot(Data);
  return (
    <div className="p-3 duration-200">
      <p className="font-bold pb-2 xs:text-center xs:pb-5 sm:text-center sm:pb-5 md:pb-5 md:text-center">
        SIBLING'S INFORMATION
      </p>
      <span className="flex flex-col gap-3 pt-3 px-6 w-full xs:px-0 sm:px-2">
        <section className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sibling Full Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingName}
              onChange={(e) => {
                studentData.siblingName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Age
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.siblingAge}
              onChange={(e) => {
                studentData.siblingAge = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation/School
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingOccupation}
              onChange={(e) => {
                studentData.siblingOccupation = e.target.value;
              }}
            />
          </span>
        </section>
        <section className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 xs:pt-5 sm:pt-5 md:grid-cols-1 md:pt-5">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sibling Full Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingName2}
              onChange={(e) => {
                studentData.siblingName2 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Age
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.siblingAge2}
              onChange={(e) => {
                studentData.siblingAge2 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation/School
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingOccupation2}
              onChange={(e) => {
                studentData.siblingOccupation2 = e.target.value;
              }}
            />
          </span>
        </section>
        <section className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 xs:pt-5 sm:pt-5 md:grid-cols-1 md:pt-5">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sibling Full Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingName3}
              onChange={(e) => {
                studentData.siblingName3 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Age
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.siblingAge3}
              onChange={(e) => {
                studentData.siblingAge3 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation/School
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingOccupation3}
              onChange={(e) => {
                studentData.siblingOccupation3 = e.target.value;
              }}
            />
          </span>
        </section>
        <section className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 xs:pt-5 sm:pt-5 md:grid-cols-1 md:pt-5">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sibling Full Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingName4}
              onChange={(e) => {
                studentData.siblingName4 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Age
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.siblingAge4}
              onChange={(e) => {
                studentData.siblingAge4 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation/School
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingOccupation4}
              onChange={(e) => {
                studentData.siblingOccupation4 = e.target.value;
              }}
            />
          </span>
        </section>
        <section className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 xs:pt-5 sm:pt-5 md:grid-cols-1 md:pt-5">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sibling Full Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingName5}
              onChange={(e) => {
                studentData.siblingName5 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Age
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.siblingAge5}
              onChange={(e) => {
                studentData.siblingAge5 = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation/School
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.siblingOccupation5}
              onChange={(e) => {
                studentData.siblingOccupation5 = e.target.value;
              }}
            />
          </span>
        </section>
      </span>
    </div>
  );
};

export default EformSiblings;
