import { useDropzone } from "react-dropzone";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployee } from "../../../api/employee";
import { IEmployee } from "../../../interface/IEmployee";

const Profile = () => {
  const [pfp, setPfp] = useState(
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
  );
  const [infoOpacity, setInfoOpacity] = useState("opacity-0 w-0");
  const [employee, setEmployee] = useState<IEmployee>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles?.[0];
      const url = URL.createObjectURL(file);
      setPfp(url);
    },
    accept: { "image/*": [] },
    multiple: false,
  });

  // const snap = useSnapshot(studentData);

  if (id) {
    const query = useQuery({
      queryKey: ["employee", id],
      queryFn: () => getEmployee({ id }),
      enabled: !!id,
    });

    console.log("Query Data: ", query.isSuccess);

    if (query.isSuccess && !employee) {
      console.log(query.data);
      setEmployee(query.data);
    }
  }

  return (
    <div className="shadow-lg rounded-lg relative w-full xs:m-[] mb-10">
      <span className="flex gap-5 items-start border-b p-10 rounded-t-lg bg-blue-600">
        <section {...getRootProps()} className="relative">
          <div className=" flex hover:opacity-100 justify-center items-center opacity-0 w-full h-full bg-black/50 absolute top-0 left-0 rounded-lg duration-200 cursor-pointer">
            <p className="flex text-white text-xl">
              <MdEdit />
            </p>
            <input {...getInputProps()} />
          </div>
          <img
            src={pfp}
            alt=""
            className="w-[100px] h-[100px] bg-blue-400 rounded-lg shadow-md object-cover border"
          />
        </section>
        <section className="flex flex-col justify-center ">
          <p className="text-lg text-start font-bold text-slate-50">
            {employee?.surname}, {employee?.firstName} {employee?.middleName[0]}
            .
          </p>
          <p className="flex gap-2 text-slate-300 font-semibold">
            <p>{employee?.position?.jobTitle}</p>
          </p>
          <p className="text-slate-300 font-semibold">
            Office : {employee?.department?.departmentName}
          </p>
        </section>
      </span>
      <section className="flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md bg-slate-50 z-50">
        <h1 className="py-2 px-5 font-bold">Personal Information</h1>
      </section>

      <section className="flex flex-col gap-5 p-10 relative">
        <section className="flex justify-between">
          <h1 className="font-bold text-2xl">Information</h1>
          <button
            onClick={() => {
              // setInfoOpacity("opacity-100 left-1/2 w-[100%]");
              navigate("/admin/employees");
            }}
            type="button"
            className="bg-blue-600 py-2 px-5 font-bold rounded-lg shadow-md shadow-bluee-600/50 text-white text-lg hover:scale-105 active:scale-95 duration-200"
          >
            Emlpoyees
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
            {/* <div className="flex flex-col gap-3 pt- px-6 w-full">
              <div className="gap-3 grid grid-cols-3">
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Last Name
                  </p>
                  <input
                    className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    required
                    value={snap.personalInfo.lastName}
                    onChange={(e) => {
                      studentData.personalInfo.lastName = e.target.value;
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
                    value={snap.personalInfo.firstName}
                    onChange={(e) => {
                      studentData.personalInfo.firstName = e.target.value;
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
                    value={snap.personalInfo.middleName}
                    onChange={(e) => {
                      studentData.personalInfo.middleName = e.target.value;
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
                    value={snap.personalInfo.telNum}
                    onChange={(e) => {
                      studentData.personalInfo.telNum = e.target.value;
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
                    value={snap.personalInfo.phoneNum}
                    onChange={(e) => {
                      studentData.personalInfo.phoneNum = e.target.value;
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
                    value={snap.personalInfo.email}
                    onChange={(e) => {
                      studentData.personalInfo.email = e.target.value;
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
                    value={snap.personalInfo.birthDate}
                    onChange={(e) => {
                      studentData.personalInfo.birthDate = e.target.value;
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
                    value={snap.personalInfo.birthPlace}
                    onChange={(e) => {
                      studentData.personalInfo.birthPlace = e.target.value;
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
                    value={snap.personalInfo.citizenship}
                    onChange={(e) => {
                      studentData.personalInfo.citizenship = e.target.value;
                    }}
                  />
                </span>
                <span className="relative">
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Sex
                  </p>
                  <select
                    value={snap.personalInfo.sex}
                    onChange={(e) => {
                      studentData.personalInfo.sex = e.target.value;
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
                    value={snap.personalInfo.religion}
                    onChange={(e) => {
                      studentData.personalInfo.religion = e.target.value;
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
                    value={snap.personalInfo.spouse?.lastName}
                    onChange={(e) => {
                      if (studentData.personalInfo.spouse) {
                        studentData.personalInfo.spouse.lastName =
                          e.target.value;
                      }
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
                    value={snap.personalInfo.spouse?.firstName}
                    onChange={(e) => {
                      if (studentData.personalInfo.spouse) {
                        studentData.personalInfo.spouse.firstName =
                          e.target.value;
                      }
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
                    value={snap.personalInfo.spouse?.middleName}
                    onChange={(e) => {
                      if (studentData.personalInfo.spouse) {
                        studentData.personalInfo.spouse.middleName =
                          e.target.value;
                      }
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
                    value={snap.personalInfo.spouse?.numChild}
                    onChange={(e) => {
                      if (studentData.personalInfo.spouse) {
                        studentData.personalInfo.spouse.numChild =
                          e.target.value;
                      }
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
                  value={snap.address.permanent.houseNum}
                  onChange={(e) => {
                    studentData.address.permanent.houseNum = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="STREET/BRGY."
                  value={snap.address.permanent.street}
                  onChange={(e) => {
                    studentData.address.permanent.street = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="CITY"
                  value={snap.address.permanent.city}
                  onChange={(e) => {
                    studentData.address.permanent.city = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="PROVINCE"
                  value={snap.address.permanent.province}
                  onChange={(e) => {
                    studentData.address.permanent.province = e.target.value;
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="DISTRICT"
                  value={snap.address.permanent.district}
                  onChange={(e) => {
                    studentData.address.permanent.district = e.target.value;
                  }}
                />
              </div>
              <h1>CITY ADRESS (IF BOARDING)</h1>
              <div className="grid grid-cols-3 gap-5 ">
                <input
                  type="number"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="HOUSE NO."
                  value={snap.address.boarding?.houseNum}
                  onChange={(e) => {
                    if (studentData.address.boarding) {
                      studentData.address.boarding.houseNum = e.target.value;
                    }
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="STREET/BRGY."
                  value={snap.address.boarding?.street}
                  onChange={(e) => {
                    if (studentData.address.boarding) {
                      studentData.address.boarding.street = e.target.value;
                    }
                  }}
                />
                <input
                  type="text"
                  className="rounded-lg py-1 text-center border-0 shadow-md"
                  placeholder="CITY"
                  value={snap.address.boarding?.city}
                  onChange={(e) => {
                    if (studentData.address.boarding) {
                      studentData.address.boarding.city = e.target.value;
                    }
                  }}
                />
              </div>
            </div> */}
            <section className="flex justify-end">
              {/* <button
                type="submit"
                className="border border-red-500 shadow-md font-bold rounded-lg py-1 px-10 mx-6 hover:border-blue-500 duration-200"
              >
                Save
              </button> */}
            </section>
          </form>
          <ProfileInfo />
        </span>
      </section>
    </div>
  );
};

export default Profile;
