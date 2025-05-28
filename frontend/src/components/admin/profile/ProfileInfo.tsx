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
    <div className="">
      <div className="flex flex-col gap-3 pt-3">
        <section className="flex flex-col">
          <div className="gap-3 grid xl:grid-cols-3">
            <span className="relative">
              <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Last Name
              </p>
              <input
                className="border border-slate-500 h-[42px] w-full py-1 rounded-md font-bold text-center overflow-hidden text-sm"
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
        </section>
        <div className="grid xl:grid-cols-4 gap-5 ">
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
        </div>
        <section className="grid gap-3">
          <span className="relative">
            <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
              Roles
            </p>
            <input
              className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              type="text"
              readOnly
              value={query?.data?.roles}
            />
          </span>
        </section>
      </div>
    </div>
  );
};

export default ProfileInfo;
