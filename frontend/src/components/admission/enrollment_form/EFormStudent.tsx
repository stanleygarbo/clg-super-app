import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { userData } from "../../../store/UserData";

const EFormStudent = () => {
  const snap = useSnapshot(studentData);
  const snap2 = useSnapshot(userData);
  return (
    <div className="p-3">
      <div className="flex flex-col gap-3 pt-3 px-6 xs:px-0 sm:px-2 md:px-6 lg:px-0 w-full">
        <section className="flex xs:flex-col xs:gap-5 sm:flex-col sm:gap-5 md:flex-col md:gap-5 lg:mb-5 xl:mb-5 justify-between">
          <p className="font-bold xs:text-center sm:text-center md:text-center lg:text-start">
            STUDENT'S INFORMATION
          </p>
          <span
            className={`${
              snap2.open ? "xs:-z-50 sm:-z-50" : ""
            } relative xs:mr-0 sm:mr-0 md:mr-0 lg:mr-6`}
          >
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              USN/LRN
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.usn}
              onChange={(e) => {
                studentData.usn = e.target.value;
              }}
            />
          </span>
        </section>
        <div className="gap-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:px-6">
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.lastName}
              onChange={(e) => {
                studentData.lastName = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
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
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
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
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.telNum}
              onChange={(e) => {
                studentData.telNum = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.phoneNum}
              onChange={(e) => {
                studentData.phoneNum = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
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
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birthdate
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="date"
              value={snap.birthDate}
              onChange={(e) => {
                studentData.birthDate = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birthplace
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.birthPlace}
              onChange={(e) => {
                studentData.birthPlace = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Citizenship
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.citizenship}
              onChange={(e) => {
                studentData.citizenship = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Sex
            </p>
            <select
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              value={snap.sex}
              onChange={(e) => {
                studentData.sex = e.target.value;
              }}
            >
              <option value=" "> </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Religion
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.religion}
              onChange={(e) => {
                studentData.religion = e.target.value;
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
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.spouseLasttName}
              onChange={(e) => {
                studentData.spouseLasttName = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.spouseFirsttName}
              onChange={(e) => {
                studentData.spouseFirsttName = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.spouseMiddleName}
              onChange={(e) => {
                studentData.spouseMiddleName = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              No. of Child
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.spouseNumChild}
              onChange={(e) => {
                studentData.spouseNumChild = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
          HOME ADDRESS
        </h1>
        <div className="grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 ">
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              value={snap.houseNum}
              onChange={(e) => {
                studentData.houseNum = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street/Brgy.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.street}
              onChange={(e) => {
                studentData.street = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.city}
              onChange={(e) => {
                studentData.city = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Province
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.province}
              onChange={(e) => {
                studentData.province = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.district}
              onChange={(e) => {
                studentData.district = e.target.value;
              }}
            />
          </span>
        </div>
        <h1 className="text-start xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5 font-semibold">
          CITY ADRESS ( IF BOARDING )
        </h1>
        <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5 ">
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardingHouseNum}
              onChange={(e) => {
                studentData.boardingHouseNum = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street/Brgy.
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardingStreet}
              onChange={(e) => {
                studentData.boardingStreet = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardingCity}
              onChange={(e) => {
                studentData.boardingCity = e.target.value;
              }}
            />
          </span>
          <span className={`${snap2.open ? "xs:-z-50 sm:-z-50" : ""} relative`}>
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              value={snap.boardingDistrict}
              onChange={(e) => {
                studentData.boardingDistrict = e.target.value;
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EFormStudent;
