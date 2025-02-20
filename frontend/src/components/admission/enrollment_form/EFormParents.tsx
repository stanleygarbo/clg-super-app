import { useSnapshot } from "valtio";
import { useState } from "react";
import { studentPostData } from "../../../store/StudentData";

const EFormParents = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-3">
      <p className="font-bold px-6">PARENT'S & GUARDIAN'S INFORMATION</p>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full ">
        <h1 className="text-start font-semibold">FATHER'S INFORMATION</h1>

        <div className="gap-3 grid grid-cols-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.lastName}
              onChange={(e) => {
                studentPostData.father.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.firstName}
              onChange={(e) => {
                studentPostData.father.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.middleName}
              onChange={(e) => {
                studentPostData.father.middleName = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.occupation}
              onChange={(e) => {
                studentPostData.father.occupation = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.companyName}
              onChange={(e) => {
                studentPostData.father.companyName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Address
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.companyAddress}
              onChange={(e) => {
                studentPostData.father.companyAddress = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.telephone}
              onChange={(e) => {
                studentPostData.father.telephone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.phone}
              onChange={(e) => {
                studentPostData.father.phone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.father.email}
              onChange={(e) => {
                studentPostData.father.email = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <h1 className="text-start font-semibold">MOTHER'S INFORMATION</h1>

        <div className="gap-3 grid grid-cols-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.lastName}
              onChange={(e) => {
                studentPostData.mother.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.firstName}
              onChange={(e) => {
                studentPostData.mother.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.middleName}
              onChange={(e) => {
                studentPostData.mother.middleName = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.occupation}
              onChange={(e) => {
                studentPostData.mother.occupation = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.companyName}
              onChange={(e) => {
                studentPostData.mother.companyName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Address
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.companyAddress}
              onChange={(e) => {
                studentPostData.mother.companyAddress = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.telephone}
              onChange={(e) => {
                studentPostData.mother.telephone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.phone}
              onChange={(e) => {
                studentPostData.mother.phone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.mother.email}
              onChange={(e) => {
                studentPostData.mother.email = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="flex w-full px-6 pt-3 flex-col gap-5">
        <h1 className="text-start font-semibold">GUARDIAN'S INFORMATION</h1>

        <div className="grid grid-cols-4 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.lastName}
              onChange={(e) => {
                studentPostData.guardian.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.firstName}
              onChange={(e) => {
                studentPostData.guardian.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.middleName}
              onChange={(e) => {
                studentPostData.guardian.middleName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Relationship
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.relationship}
              onChange={(e) => {
                studentPostData.guardian.relationship = e.target.value;
              }}
            />
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Occupation
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.occupation}
              onChange={(e) => {
                studentPostData.guardian.occupation = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.companyName}
              onChange={(e) => {
                studentPostData.guardian.companyName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Company Address
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.companyAddress}
              onChange={(e) => {
                studentPostData.guardian.companyAddress = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephon No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.telephone}
              onChange={(e) => {
                studentPostData.guardian.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.guardian.phone}
              onChange={(e) => {
                studentPostData.guardian.phone = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardian.email}
              onChange={(e) => {
                studentPostData.guardian.email = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold">
          SPOUSE'S INFORMATION ( IF MARRIED )
        </h1>
        <div className="grid grid-cols-4 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.lastName}
              onChange={(e) => {
                studentPostData.guardianSpouse.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.firstName}
              onChange={(e) => {
                studentPostData.guardianSpouse.firstName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.middleName}
              onChange={(e) => {
                studentPostData.guardianSpouse.middleName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              No. of Children
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.guardianSpouse.children}
              onChange={(e) => {
                studentPostData.guardianSpouse.children = Number(
                  e.target.value
                );
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EFormParents;
