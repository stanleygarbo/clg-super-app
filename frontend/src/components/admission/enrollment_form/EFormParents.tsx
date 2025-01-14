import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { Data } from "../../../store/Data";

const EFormParents = () => {
  const snap = useSnapshot(studentData);
  const isOpen = useSnapshot(Data);

  return (
    <div className="p-3">
      <p className="font-bold sm:text-center md:text-center">
        PARENT'S & GUARDIAN'S INFORMATION
      </p>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full xs:px-0 sm:px-2">
        <h1 className="text-start xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5 font-semibold">
          FATHER'S INFORMATION
        </h1>

        <div className="gap-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.lastName}
              onChange={(e) => {
                studentData.father.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.firstName}
              onChange={(e) => {
                studentData.father.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.middleName}
              onChange={(e) => {
                studentData.father.middleName = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.occupation}
              onChange={(e) => {
                studentData.father.occupation = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.companyName}
              onChange={(e) => {
                studentData.father.companyName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Address
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.companyAddress}
              onChange={(e) => {
                studentData.father.companyAddress = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.telephone}
              onChange={(e) => {
                studentData.father.telephone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.phone}
              onChange={(e) => {
                studentData.father.phone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.email}
              onChange={(e) => {
                studentData.father.email = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-3 px-6 w-full xs:px-0 sm:px-2">
        <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
          MOTHER'S INFORMATION
        </h1>

        <div className="gap-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.lastName}
              onChange={(e) => {
                studentData.mother.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.firstName}
              onChange={(e) => {
                studentData.mother.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.middleName}
              onChange={(e) => {
                studentData.mother.middleName = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.occupation}
              onChange={(e) => {
                studentData.mother.occupation = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.companyName}
              onChange={(e) => {
                studentData.mother.companyName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Address
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.companyAddress}
              onChange={(e) => {
                studentData.mother.companyAddress = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.telephone}
              onChange={(e) => {
                studentData.mother.telephone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.phone}
              onChange={(e) => {
                studentData.mother.phone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.email}
              onChange={(e) => {
                studentData.mother.email = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="flex w-full px-6 pt-3 flex-col gap-5 xs:px-0 sm:px-2">
        <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
          GUARDIAN'S INFORMATION
        </h1>

        <div className="grid grid-cols-4 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.lastName}
              onChange={(e) => {
                studentData.guardian.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.firstName}
              onChange={(e) => {
                studentData.guardian.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.middleName}
              onChange={(e) => {
                studentData.guardian.middleName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Relationship
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.relationship}
              onChange={(e) => {
                studentData.guardian.relationship = e.target.value;
              }}
            />
          </span>
        </div>

        <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.occupation}
              onChange={(e) => {
                studentData.guardian.occupation = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.companyName}
              onChange={(e) => {
                studentData.guardian.companyName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Address
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.companyAddress}
              onChange={(e) => {
                studentData.guardian.companyAddress = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephon No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.telephone}
              onChange={(e) => {
                studentData.guardian.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.guardian.phone}
              onChange={(e) => {
                studentData.guardian.phone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.email}
              onChange={(e) => {
                studentData.guardian.email = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
          SPOUSE'S INFORMATION ( IF MARRIED )
        </h1>
        <div className="grid grid-cols-4 gap-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.lastName}
              onChange={(e) => {
                studentData.guardianSpouse.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.firstName}
              onChange={(e) => {
                studentData.guardianSpouse.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.middleName}
              onChange={(e) => {
                studentData.guardianSpouse.middleName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              No. of Children
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.children}
              onChange={(e) => {
                studentData.guardianSpouse.children = Number(e.target.value);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EFormParents;
