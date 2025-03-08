import { useSnapshot } from "valtio";
import { useState } from "react";
import { studentPostData } from "../../../store/StudentData";

const EFormStudent = () => {
  const snap = useSnapshot(studentPostData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="p-3">
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <section className="flex justify-between">
          <p className="font-bold">STUDENT'S INFORMATION</p>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              USN/LRN
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.username}
              onChange={(e) => {
                studentPostData.username = e.target.value;
              }}
            />
          </span>
        </section>
        <div className="gap-3 grid grid-cols-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.surname}
              onChange={(e) => {
                studentPostData.surname = e.target.value;
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
              value={snap.firstName}
              onChange={(e) => {
                studentPostData.firstName = e.target.value;
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
              value={snap.middleName}
              onChange={(e) => {
                studentPostData.middleName = e.target.value;
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
              value={snap.telephone}
              onChange={(e) => {
                studentPostData.telephone = e.target.value;
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
              value={snap.phone}
              onChange={(e) => {
                studentPostData.phone = e.target.value;
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
              value={snap.email}
              onChange={(e) => {
                studentPostData.email = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold">BIRTH'S INFORMATION</h1>
        <div className="grid grid-cols-5 gap-3">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birthdate
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="date"
              value={snap.birth?.birthDate}
              onChange={(e) => {
                studentPostData.birth.birthDate = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birthplace
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birth?.birthPlace}
              onChange={(e) => {
                studentPostData.birth.birthPlace = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Citizenship
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birth?.citizenship}
              onChange={(e) => {
                studentPostData.birth.citizenship = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sex
            </p>
            <select
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              value={snap.birth?.sex}
              onChange={(e) => {
                studentPostData.birth.sex = e.target.value;
              }}
            >
              <option value="male" selected>
                MALE
              </option>
              <option value="female">FEMALE</option>
            </select>
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Religion
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birth.religion}
              onChange={(e) => {
                studentPostData.birth.religion = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3 pt-3">
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
              value={snap.spouse?.lastName}
              onChange={(e) => {
                studentPostData.spouse.lastName = e.target.value;
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
              value={snap.spouse?.firstName}
              onChange={(e) => {
                studentPostData.spouse.firstName = e.target.value;
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
              value={snap.spouse?.middleName}
              onChange={(e) => {
                studentPostData.spouse.middleName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              No. of Child
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.spouse?.children}
              onChange={(e) => {
                studentPostData.spouse.children = Number(e.target.value);
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold">HOME ADDRESS</h1>
        <div className="grid grid-cols-5 gap-3 ">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.homeAddress?.houseNum}
              onChange={(e) => {
                studentPostData.homeAddress.houseNum = Number(e.target.value);
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street/Brgy.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress?.streetBrgy}
              onChange={(e) => {
                studentPostData.homeAddress.streetBrgy = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress.city}
              onChange={(e) => {
                studentPostData.homeAddress.city = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Province
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress.province}
              onChange={(e) => {
                studentPostData.homeAddress.province = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress.district}
              onChange={(e) => {
                studentPostData.homeAddress.district = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold">
          CITY ADRESS ( IF BOARDING )
        </h1>
        <div className="grid grid-cols-4 gap-3 ">
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.houseNum}
              onChange={(e) => {
                studentPostData.boardAddress.houseNum = Number(e.target.value);
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street/Brgy.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.streetBrgy}
              onChange={(e) => {
                studentPostData.boardAddress.streetBrgy = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.city}
              onChange={(e) => {
                studentPostData.boardAddress.city = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.district}
              onChange={(e) => {
                studentPostData.boardAddress.district = e.target.value;
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EFormStudent;
