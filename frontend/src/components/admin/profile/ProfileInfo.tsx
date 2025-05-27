import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../../../api/employee";
// import { useState } from "react";
// import { IEmployeeGet } from "../../../interface/IEmployee";

const ProfileInfo = () => {
  const { id } = useParams();

  // const authSnap = useSnapshot(authState);
  // console.log(authSnap.user.id);

  const query = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById({ id }),
    enabled: !!id,
  });

  console.log(query.data);

  // TEST ID: 67838a242a0c891e5b2c0de0

  return (
    <div>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <div className="gap-5 grid grid-cols-3">
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Last Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.surname}
            />
          </span>
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              First Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.firstName}
            />
          </span>
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Middle Name
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.middleName}
            />
          </span>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Phone No.
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.phone}
            />
          </span>
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Marital Status
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.maritalStatus}
            />
          </span>
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Username
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.username}
            />
          </span>
          <span className="relative">
            <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Employment
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.employmentType}
            />
          </span>
          {/* <input
                        type="number"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="TEL NO."
                        value={snap.personalInfo.telNum}
                    />
                    <input
                        type="number"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="CELLPHONE NO."
                        maxLength={11}
                        value={snap.personalInfo.phoneNum}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="EMAIL"
                        value={snap.personalInfo.email}
                    />
                </div>
                <h1>BIRTH'S INFORMATION</h1>
                <div className="grid grid-cols-5 gap-5 ">
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="dd/mm/yyyy"
                        value={snap.personalInfo.birthDate}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="PLACE OF BIRTH"
                        value={snap.personalInfo.birthPlace}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="CITiZENSHIP"
                        value={snap.personalInfo.citizenship}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="SEX"
                        value={snap.personalInfo.sex}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="RELIGION"
                        value={snap.personalInfo.religion}
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
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="LASTNAME"
                        value={snap.family.spouse?.lastName}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="FIRST NAME"
                        value={snap.family.spouse?.firstName}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="MIDDLE NAME"
                        value={snap.family.spouse?.middleName}
                    />
                    <input
                        type="number"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="NO. OF CHILDREN"
                        value={snap.family.spouse?.numChildren}
                    />
                </div>
                <h1>HOME ADDRESS</h1>
                <div className="grid grid-cols-5 gap-5 ">
                    <input
                        type="number"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="HOUSE NO."
                        value={snap.address.permanent.houseNum}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="STREET/BRGY."
                        value={snap.address.permanent.street}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="CITY"
                        value={snap.address.permanent.city}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="PROVINCE"
                        value={snap.address.permanent.province}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="DISTRICT"
                        value={snap.address.permanent.district}
                    />
                </div>
                <h1>CITY ADRESS (IF BOARDING)</h1>
                <div className="grid grid-cols-3 gap-5 ">
                    <input
                        type="number"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="HOUSE NO."
                        value={snap.address.boarding?.houseNum}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="STREET/BRGY."
                        value={snap.address.boarding?.street}
                    />
                    <input
                        type="text"
                        className="rounded-lg py-1 text-center"
                        readOnly
                        placeholder="CITY"
                        value={snap.address.boarding?.city}
                    /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
