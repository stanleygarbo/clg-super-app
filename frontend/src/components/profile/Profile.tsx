import { useDropzone } from "react-dropzone";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { useSnapshot } from "valtio";
import ProfileInfo from "./ProfileInfo";
import { studentData } from "../../store/StudentData";

const Profile = () => {
  const [pfp, setPfp] = useState("");
  const [infoOpacity, setInfoOpacity] = useState("opacity-0 w-0");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles?.[0];
      const url = URL.createObjectURL(file);
      setPfp(url);
    },
    accept: { "image/*": [] },
    multiple: false,
  });

  const snap = useSnapshot(studentData);

  return (
    <div className="shadow-lg rounded-lg relative w-[1100px] xs:m-[] mb-10">
      <span className="flex gap-5 items-start border-b p-10 rounded-t-lg bg-slate-100">
        <section {...getRootProps()} className="relative">
          <div className=" flex hover:opacity-100 justify-center items-center opacity-0 w-full h-full bg-black/50 absolute top-0 left-0 rounded-full duration-200 cursor-pointer">
            <p className="flex text-white text-xl">
              <MdEdit />
            </p>
            <input {...getInputProps()} />
          </div>
          <img
            src={pfp}
            alt=""
            className="w-[100px] h-[100px] bg-blue-400 rounded-full shadow-md object-cover border border-slate-700"
          />
        </section>
        <section className="flex flex-col justify-center ">
          <p className="text-lg text-start font-bold text-slate-800">
            Mheg Ryan T. Limpangog
          </p>
          <p className="flex gap-2 text-slate-500 font-semibold">
            <p>Computer Science</p>
            <p>
              3<sup>rd</sup> Year
            </p>
          </p>
          <p className="text-slate-500 font-semibold">Student</p>
        </section>
      </span>
      <section className="flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-sm bg-white">
        <h1 className="py-2 px-5 font-bold">Personal Information</h1>
      </section>

      <section className="flex flex-col gap-5 p-10 relative">
        <section className="flex justify-between">
          <h1 className="font-bold text-lg">Information</h1>
          <button
            onClick={() => {
              setInfoOpacity("opacity-100 left-1/2 w-[100%]");
            }}
            type="button"
            className="bg-slate-50 py-2 px-4 font-bold rounded-lg shadow-sm"
          >
            Edit
          </button>
        </section>
        <span className="flex flex-col gap-6 my-5">
          {/* Edit Profile */}
          <form
            className={`bg-white p-5 rounded-lg shadow-md absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 ${infoOpacity} duration-100 flex flex-col gap-5`}
          >
            <section className="flex justify-between pb-5">
              <p className="font-bold text-lg">Edit Information</p>
              <button
                type="button"
                className="font-bold text-lg hover:text-red-500 hover:bg-slate-100 px-3 rounded-md duration-200"
                onClick={() => {
                  setInfoOpacity("opacity-0 w-0");
                }}
              >
                x
              </button>
            </section>
            <div className="flex flex-col gap-3 pt- px-6 w-full">
              <div className="gap-3 grid grid-cols-3">
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Last Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.lastName}
                    onChange={(e) => {
                      studentData.lastName = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    First Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.firstName}
                    onChange={(e) => {
                      studentData.firstName = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Middle Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.middleName}
                    onChange={(e) => {
                      studentData.middleName = e.target.value;
                    }}
                  />
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 ">
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Tel No.
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.telNum}
                    onChange={(e) => {
                      studentData.telNum = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Phone No.
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.phoneNum}
                    onChange={(e) => {
                      studentData.phoneNum = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Email
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.email}
                    onChange={(e) => {
                      studentData.email = e.target.value;
                    }}
                  />
                </span>
              </div>
              <h1 className="">BIRTH'S INFORMATION</h1>
              <div className="grid grid-cols-5 gap-3 ">
                <span className="relative">
                  <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Birth Date
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="date"
                    required
                    value={snap.birthDate}
                    onChange={(e) => {
                      studentData.birthDate = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Birth Place
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.birthPlace}
                    onChange={(e) => {
                      studentData.birthPlace = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Citizenship
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.citizenship}
                    onChange={(e) => {
                      studentData.citizenship = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Sex
                  </p>
                  <select
                    value={snap.sex}
                    onChange={(e) => {
                      studentData.sex = e.target.value;
                    }}
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  >
                    <option value=" "> </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Religion
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.religion}
                    onChange={(e) => {
                      studentData.religion = e.target.value;
                    }}
                  />
                </span>
              </div>
            </div>

            <div className="px-6 flex flex-col gap-3">
              <h1 className="text-start">SPOUSE'S INFORMATION (IF MARRIED)</h1>

              <div className="grid grid-cols-4 gap-3">
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Last Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.spouseLasttName}
                    onChange={(e) => {
                      studentData.spouseLasttName = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    First Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.spouseFirsttName}
                    onChange={(e) => {
                      studentData.spouseFirsttName = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Middle Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.spouseMiddleName}
                    onChange={(e) => {
                      studentData.spouseMiddleName = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    No. of Child
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="number"
                    required
                    value={snap.spouseNumChild}
                    onChange={(e) => {
                      studentData.spouseNumChild = e.target.value;
                    }}
                  />
                </span>
              </div>
              <h1 className="">HOME ADDRESS</h1>
              <div className="grid grid-cols-5 gap-5 ">
                <input
                  type="number"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="HOUSE NO."
                  value={snap.houseNum}
                  onChange={(e) => {
                    studentData.houseNum = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="STREET/BRGY."
                  value={snap.street}
                  onChange={(e) => {
                    studentData.street = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="CITY"
                  value={snap.city}
                  onChange={(e) => {
                    studentData.city = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="PROVINCE"
                  value={snap.province}
                  onChange={(e) => {
                    studentData.province = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="DISTRICT"
                  value={snap.district}
                  onChange={(e) => {
                    studentData.district = e.target.value;
                  }}
                />
              </div>
              <h1>CITY ADRESS (IF BOARDING)</h1>
              <div className="grid grid-cols-3 gap-5 ">
                <input
                  type="number"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="HOUSE NO."
                  value={snap.boardingHouseNum}
                  onChange={(e) => {
                    studentData.boardingHouseNum = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="STREET/BRGY."
                  value={snap.boardingStreet}
                  onChange={(e) => {
                    studentData.boardingStreet = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="CITY"
                  value={snap.boardingCity}
                  onChange={(e) => {
                    studentData.boardingCity = e.target.value;
                  }}
                />
              </div>
            </div>
            <section className="flex justify-end">
              <button
                type="submit"
                className="border border-red-500 shadow-md font-bold rounded-lg py-1 px-10 mx-6 hover:border-blue-500 duration-200"
              >
                Save
              </button>
            </section>
          </form>
          <ProfileInfo />
        </span>
      </section>
    </div>
  );
};

export default Profile;
