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
              value={snap.fatherLastName}
              onChange={(e) => {
                studentData.fatherLastName = e.target.value;
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
              value={snap.fatherFirstName}
              onChange={(e) => {
                studentData.fatherFirstName = e.target.value;
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
              value={snap.fatherMiddleName}
              onChange={(e) => {
                studentData.fatherMiddleName = e.target.value;
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
              value={snap.fatherOccupation}
              onChange={(e) => {
                studentData.fatherOccupation = e.target.value;
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
              value={snap.fatherCompany}
              onChange={(e) => {
                studentData.fatherCompany = e.target.value;
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
              value={snap.fatherCompanyAddress}
              onChange={(e) => {
                studentData.fatherCompanyAddress = e.target.value;
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
              value={snap.fatherTelNum}
              onChange={(e) => {
                studentData.fatherTelNum = e.target.value;
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
              value={snap.fatherPhoneNum}
              onChange={(e) => {
                studentData.fatherPhoneNum = e.target.value;
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
              value={snap.fatherEmail}
              onChange={(e) => {
                studentData.fatherEmail = e.target.value;
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
              value={snap.motherLastName}
              onChange={(e) => {
                studentData.motherLastName = e.target.value;
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
              value={snap.motherFirstName}
              onChange={(e) => {
                studentData.motherFirstName = e.target.value;
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
              value={snap.motherMiddleName}
              onChange={(e) => {
                studentData.motherMiddleName = e.target.value;
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
              value={snap.motherOccupation}
              onChange={(e) => {
                studentData.motherOccupation = e.target.value;
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
              value={snap.motherCompany}
              onChange={(e) => {
                studentData.motherCompany = e.target.value;
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
              value={snap.motherCompanyAddress}
              onChange={(e) => {
                studentData.motherCompanyAddress = e.target.value;
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
              value={snap.motherTelNum}
              onChange={(e) => {
                studentData.motherTelNum = e.target.value;
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
              value={snap.motherPhoneNum}
              onChange={(e) => {
                studentData.motherPhoneNum = e.target.value;
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
              value={snap.motherEmail}
              onChange={(e) => {
                studentData.motherEmail = e.target.value;
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
              value={snap.guardianLastName}
              onChange={(e) => {
                studentData.guardianLastName = e.target.value;
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
              value={snap.guardianFirstName}
              onChange={(e) => {
                studentData.guardianFirstName = e.target.value;
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
              value={snap.guardianMiddleName}
              onChange={(e) => {
                studentData.guardianMiddleName = e.target.value;
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
              value={snap.guardianRelationship}
              onChange={(e) => {
                studentData.guardianRelationship = e.target.value;
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
              value={snap.guardianOccupation}
              onChange={(e) => {
                studentData.guardianOccupation = e.target.value;
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
              value={snap.guardianCompany}
              onChange={(e) => {
                studentData.guardianCompany = e.target.value;
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
              value={snap.guardianCompanyAddress}
              onChange={(e) => {
                studentData.guardianCompanyAddress = e.target.value;
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
              value={snap.guardianTelNum}
              onChange={(e) => {
                studentData.guardianTelNum = e.target.value;
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
              value={snap.guardianPhoneNum}
              onChange={(e) => {
                studentData.guardianPhoneNum = e.target.value;
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
              value={snap.guardianEmail}
              onChange={(e) => {
                studentData.guardianEmail = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
          SPOUSE'S INFORMATION ( IF MARRIED )
        </h1>
        <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouseLastName}
              onChange={(e) => {
                studentData.guardianSpouseLastName = e.target.value;
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
              value={snap.guardianSpouseFirstName}
              onChange={(e) => {
                studentData.guardianSpouseFirstName = e.target.value;
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
              value={snap.guardianSpouseMiddleName}
              onChange={(e) => {
                studentData.guardianSpouseMiddleName = e.target.value;
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EFormParents;
