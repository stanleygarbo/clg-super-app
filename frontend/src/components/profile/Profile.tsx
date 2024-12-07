import { useDropzone } from "react-dropzone";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { useSnapshot } from "valtio";
import ProfileInfo from "./ProfileInfo";
import { studentData } from "../../store/StudentData";

const Profile = () => {
  const [pfp, setPfp] = useState("");
  const [infoOpacity, setInfoOpacity] = useState("opacity-0 w-0");
  const [addressOpacity, setAddressOpacity] = useState(
    "opacity-0 w-0 h-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
  );

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
    <div className="shadow-lg rounded-lg relative m-10 xs:m-[]">
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
      <span className="flex flex-col p-10 gap-2 relative">
        <section
          className={`flex flex-col bg-slate-50 p-5 rounded-md absolute duration-200 overflow-hidden ${addressOpacity}`}
        >
          <div className="flex justify-between pb-4">
            <p className="text-lg font-semibold">Add Address</p>
            <button
              onClick={() => {
                setAddressOpacity(
                  "opacity-0 w-0 h-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
                );
              }}
              className="text-lg font-semibold px-3 rounded-md hover:text-red-500 hover:bg-slate-200 duration-200"
            >
              x
            </button>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <input
              className="text-md text-slate-800 font-semibold text-center p-1 rounded-lg border-0 bg-slate-200 shadow-sm "
              type="text"
              placeholder="Brgy. or Street"
            />

            <input
              className="text-md text-slate-800 font-semibold text-center p-1 rounded-lg border-0 bg-slate-200 shadow-sm "
              type="text"
              placeholder="City"
            />

            <input
              className="text-md text-slate-800 font-semibold text-center p-1 rounded-lg border-0 bg-slate-200 shadow-sm "
              type="text"
              placeholder="Province"
            />
            <button
              className="text-slate-800 border mt-3 border-green-600 py-1 font-bold rounded-lg shadow-md hover:text-slate-50 hover:bg-green-600 duration-200"
              type="submit"
            >
              Add
            </button>
          </div>
        </section>
        <section className="flex justify-between">
          <h1 className="text-lg font-bold mb-3">Address</h1>
          <button
            onClick={() => {
              setAddressOpacity(
                "w-[400px] opacity-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              );
            }}
            className="bg-slate-50 rounded-lg shadow-sm font-bold px-4 hover:text-white hover:bg-slate-400 duration-200"
          >
            Add
          </button>
        </section>
        <section className="flex flex-wrap gap-10 justify-start">
          <span className="flex group gap-5 bg-slate-50 hover:bg-slate-300 shadow-sm py-3 px-5 rounded-lg duration-200">
            <h1 className="bg-yellow-400 flex justify-center items-center rounded-full w-[40px] h-[40px] text-slate-700">
              M
            </h1>
            <section className="flex flex-col">
              <span className="flex">
                <p>Macabug</p>
                <p>, Ormoc City</p>
                <p>, Leyte</p>
              </span>
              <p className="text-center text-xs font-bold text-slate-400 group-hover:text-slate-500">
                Permanent Address
              </p>
            </section>
            <button className="group-hover:text-red-600 text-lg drop-shadow-sm pl-4 font-bold opacity-0 group-hover:opacity-100 duration-200">
              x
            </button>
          </span>
        </section>
      </span>
      <section className="flex flex-col gap-5 p-10">
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
        <span className="flex flex-col gap-6 my-5 relative">
          <ProfileInfo />

          {/* Edit Profile */}
          <form
            className={`bg-slate-50 backdrop-blur-md bg-opacity-60 p-5 rounded-lg shadow-md absolute left-0 transform -translate-x-1/2 -translate-y-1/2 ${infoOpacity} duration-100 flex flex-col gap-5`}
          >
            <section className="flex justify-between pb-5">
              <p className="font-bold text-xl">Edit Information</p>
              <button
                className="font-bold hover:text-red-500 p-1"
                onClick={() => {
                  setInfoOpacity("opacity-0 w-0");
                }}
              >
                x
              </button>
            </section>
            <div className="flex flex-col gap-3 pt-3 px-6 w-full">
              <div className="gap-5 grid grid-cols-3">
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="LASTNAME"
                  value={snap.lastName}
                  onChange={(e) => {
                    studentData.lastName = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="FIRST NAME"
                  value={snap.firstName}
                  onChange={(e) => {
                    studentData.firstName = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="MIDDLE NAME"
                  value={snap.middleName}
                  onChange={(e) => {
                    studentData.middleName = e.target.value;
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-5 ">
                <input
                  type="number"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="TEL NO."
                  value={snap.telNum}
                  onChange={(e) => {
                    studentData.telNum = e.target.value;
                  }}
                />
                <input
                  type="number"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="CELLPHONE NO."
                  maxLength={11}
                  value={snap.phoneNum}
                  onChange={(e) => {
                    studentData.phoneNum = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="EMAIL"
                  value={snap.email}
                  onChange={(e) => {
                    studentData.email = e.target.value;
                  }}
                />
              </div>
              <h1>BIRTH'S INFORMATION</h1>
              <div className="grid grid-cols-5 gap-5 ">
                <input
                  type="date"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  value={snap.birthDate}
                  onChange={(e) => {
                    studentData.birthDate = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="PLACE OF BIRTH"
                  value={snap.birthPlace}
                  onChange={(e) => {
                    studentData.birthPlace = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="CITiZENSHIP"
                  value={snap.citizenship}
                  onChange={(e) => {
                    studentData.citizenship = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="SEX"
                  value={snap.sex}
                  onChange={(e) => {
                    studentData.sex = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="RELIGION"
                  value={snap.religion}
                  onChange={(e) => {
                    studentData.religion = e.target.value;
                  }}
                />
              </div>
            </div>

            <div className="px-6 flex flex-col gap-3">
              <h1 className="text-start pt-10">
                SPOUSE'S INFORMATION (IF MARRIED)
              </h1>

              <div className="grid grid-cols-4 gap-5">
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="LASTNAME"
                  value={snap.spouseLasttName}
                  onChange={(e) => {
                    studentData.spouseLasttName = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="FIRST NAME"
                  value={snap.spouseFirsttName}
                  onChange={(e) => {
                    studentData.spouseFirsttName = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="MIDDLE NAME"
                  value={snap.spouseMiddleName}
                  onChange={(e) => {
                    studentData.spouseMiddleName = e.target.value;
                  }}
                />
                <input
                  type="number"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="NO. OF CHILDREN"
                  value={snap.spouseNumChild}
                  onChange={(e) => {
                    studentData.spouseNumChild = e.target.value;
                  }}
                />
              </div>
              <h1>HOME ADDRESS</h1>
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
        </span>
      </section>
    </div>
  );
};

export default Profile;
