import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { Data } from "../../../store/Data";

const EFormStudent = () => {
  const snap = useSnapshot(studentData);
  const isOpen = useSnapshot(Data);
  return (
    <div className="p-3">
      <div className="flex flex-col gap-3 pt-3 px-6 xs:px-0 sm:px-2 md:px-6 lg:px-0 w-full">
        <section className="flex xs:flex-col xs:gap-5 sm:flex-col sm:gap-5 md:flex-col md:gap-5 lg:mb-5 xl:mb-5 justify-between">
          <p className="font-bold xs:text-center sm:text-center md:text-center lg:text-start">
            STUDENT'S INFORMATION
          </p>
          <span
            className={`${
              isOpen ? "xs:-z-50 sm:-z-50" : ""
            } relative xs:mr-0 sm:mr-0 md:mr-0 lg:mr-6`}
          >
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              USN/LRN
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.username}
              onChange={(e) => {
                studentData.username = e.target.value;
              }}
            />
          </span>
        </section>
        <div className="gap-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:px-6">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.surname}
              onChange={(e) => {
                studentData.surname = e.target.value;
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
              value={snap.firstName}
              onChange={(e) => {
                studentData.firstName = e.target.value;
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
              value={snap.middleName}
              onChange={(e) => {
                studentData.middleName = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 lg:px-6">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.telephone}
              onChange={(e) => {
                studentData.telephone = e.target.value;
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
              value={snap.phone}
              onChange={(e) => {
                studentData.phone = e.target.value;
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
              value={snap.email}
              onChange={(e) => {
                studentData.email = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold xs:text-center xs:py-5 sm:text-center md:text-center sm:py-5 md:py-5 lg:px-6">
          BIRTH'S INFORMATION
        </h1>
        <div className="grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 lg:px-6">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birthdate
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="date"
              value={snap.birth?.birthDate}
              onChange={(e) => {
                studentData.birth.birthDate = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birthplace
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birth?.birthPlace}
              onChange={(e) => {
                studentData.birth.birthPlace = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Citizenship
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birth?.citizenship}
              onChange={(e) => {
                studentData.birth.citizenship = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sex
            </p>
            <select
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              value={snap.birth?.sex}
              onChange={(e) => {
                studentData.birth.sex = e.target.value;
              }}
            >
              <option value=" "> </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Religion
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birth.religion}
              onChange={(e) => {
                studentData.birth.religion = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3 pt-3 xs:px-0 sm:px-2">
        <h1 className="text-start xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5 font-semibold">
          SPOUSE'S INFORMATION ( IF MARRIED )
        </h1>

        <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.spouse?.lastName}
              onChange={(e) => {
                studentData.spouse.lastName = e.target.value;
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
              value={snap.spouse?.firstName}
              onChange={(e) => {
                studentData.spouse.firstName = e.target.value;
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
              value={snap.spouse?.middleName}
              onChange={(e) => {
                studentData.spouse.middleName = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              No. of Child
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.spouse?.children}
              onChange={(e) => {
                studentData.spouse.children = Number(e.target.value);
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
          HOME ADDRESS
        </h1>
        <div className="grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 ">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.homeAddress?.houseNum}
              onChange={(e) => {
                studentData.homeAddress.houseNum = Number(e.target.value);
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street/Brgy.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress?.streetBrgy}
              onChange={(e) => {
                studentData.homeAddress.streetBrgy = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress.city}
              onChange={(e) => {
                studentData.homeAddress.city = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Province
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress.province}
              onChange={(e) => {
                studentData.homeAddress.province = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.homeAddress.district}
              onChange={(e) => {
                studentData.homeAddress.district = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5 font-semibold">
          CITY ADRESS ( IF BOARDING )
        </h1>
        <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 ">
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.houseNum}
              onChange={(e) => {
                studentData.boardAddress.houseNum = Number(e.target.value);
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street/Brgy.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.streetBrgy}
              onChange={(e) => {
                studentData.boardAddress.streetBrgy = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.city}
              onChange={(e) => {
                studentData.boardAddress.city = e.target.value;
              }}
            />
          </span>
          <span className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardAddress.district}
              onChange={(e) => {
                studentData.boardAddress.district = e.target.value;
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EFormStudent;
