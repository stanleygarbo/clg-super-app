import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { studentData } from "../../store/StudentData";

const ProfileInfo = () => {
  const snap = useSnapshot(studentData);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/students" + id);
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <div className="gap-5 grid grid-cols-3">
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.lastName}
              onChange={(e) => {
                studentData.lastName = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.firstName}
              onChange={(e) => {
                studentData.firstName = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.middleName}
              onChange={(e) => {
                studentData.middleName = e.target.value;
              }}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Telephone No.
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              readOnly
              value={snap.telNum}
              onChange={(e) => {
                studentData.telNum = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="number"
              readOnly
              value={snap.phoneNum}
              onChange={(e) => {
                studentData.phoneNum = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Email
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.email}
              onChange={(e) => {
                studentData.email = e.target.value;
              }}
            />
          </span>
        </div>
        <h1>BIRTH'S INFORMATION</h1>
        <div className="grid grid-cols-5 gap-5 ">
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birth Date
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.birthDate}
              onChange={(e) => {
                studentData.birthDate = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Birth Place
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.birthPlace}
              onChange={(e) => {
                studentData.birthPlace = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Citizenship
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.citizenship}
              onChange={(e) => {
                studentData.citizenship = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Gender
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.sex}
              onChange={(e) => {
                studentData.sex = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Religion
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.religion}
              onChange={(e) => {
                studentData.religion = e.target.value;
              }}
            />
          </span>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        <h1 className="text-start pt-3">SPOUSE'S INFORMATION (IF MARRIED)</h1>

        <div className="grid grid-cols-4 gap-5">
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.spouseLasttName}
              onChange={(e) => {
                studentData.spouseLasttName = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.spouseFirsttName}
              onChange={(e) => {
                studentData.spouseFirsttName = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.spouseMiddleName}
              onChange={(e) => {
                studentData.spouseMiddleName = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              No. of child
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.spouseNumChild}
              onChange={(e) => {
                studentData.spouseNumChild = e.target.value;
              }}
            />
          </span>
        </div>
        <h1>HOME ADDRESS</h1>
        <div className="grid grid-cols-5 gap-5 ">
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.houseNum}
              onChange={(e) => {
                studentData.houseNum = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.street}
              onChange={(e) => {
                studentData.street = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.city}
              onChange={(e) => {
                studentData.city = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Province
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.province}
              onChange={(e) => {
                studentData.province = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              District
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.district}
              onChange={(e) => {
                studentData.district = e.target.value;
              }}
            />
          </span>
        </div>
        <h1>CITY ADRESS (IF BOARDING)</h1>
        <div className="grid grid-cols-3 gap-5 ">
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              House No.
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.boardingHouseNum}
              onChange={(e) => {
                studentData.boardingHouseNum = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Street
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.boardingStreet}
              onChange={(e) => {
                studentData.boardingStreet = e.target.value;
              }}
            />
          </span>
          <span className="relative -z-50">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              City
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={snap.boardingCity}
              onChange={(e) => {
                studentData.boardingCity = e.target.value;
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
