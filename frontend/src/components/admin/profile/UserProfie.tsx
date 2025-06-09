import { useSnapshot } from "valtio";
import { authState, sidebarState } from "../../../store/auth";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../../../api/employee";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdEdit } from "react-icons/md";
import { getStudentById } from "../../../api/student";

const UserProfie = () => {
  const [pfp, setPfp] = useState(
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
  );
  // const [infoOpacity, setInfoOpacity] = useState("opacity-0 w-0");
  //   const navigate = useNavigate();

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

  //   if (id) {
  //     const query = useQuery({
  //       queryKey: ["employee", id],
  //       queryFn: () => getEmployeeById({ id }),
  //       enabled: !!id,
  //     });

  //     // console.log("Query Data: ", query.isSuccess);

  //     if (query.isSuccess && !employee) {
  //       // console.log(query.data);
  //       setEmployee(query.data);
  //     }
  //   }

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;
  const { user } = useSnapshot(authState);

  const loginUser = useQuery({
    queryKey: ["user", user.id],
    queryFn: async () => {
      if (user.role.includes("students")) {
        return await getStudentById({ id: user.id });
      } else return await getEmployeeById({ id: user.id });
    },
  });

  return (
    <div
      className={`${
        isOpen ? "-z-50 xl:z-50" : ""
      } relative w-full xl:w-[1200px] xl:h-[700px] rounded-lg xl:mt-20 border border-slate-200`}
    >
      <span className="flex gap-5 xl:items-start py-10 px-5 xl:p-16 xl:rounded-t-lg bg-blue-800 pt-16">
        <section
          {...getRootProps()}
          className="relative w-[100px] aspect-square"
        >
          <div className=" flex hover:opacity-100 opacity-0 w-full h-full bg-black/50 absolute top-0 left-0 rounded-lg duration-200 cursor-pointer">
            <p className="flex text-white text-xl">
              <MdEdit />
            </p>
            <input {...getInputProps()} />
          </div>
          <img
            src={pfp}
            alt=""
            className="w-full h-full xl:w-[100px] xl:h-[100px] rounded-lg shadow-md object-cover border-0"
          />
        </section>
        <section className="flex flex-col justify-center">
          <p className="text-sm xl:text-lg text-start font-bold text-slate-200">
            {loginUser.data?.surname}, {loginUser.data?.firstName}{" "}
            {loginUser.data?.middleName[0]
              ? loginUser.data?.middleName[0] + "."
              : ""}
          </p>
          <p className="flex gap-2 text-xs xl:text-base text-slate-200 font-semibold">
            <p>Position : {loginUser.data?.position?.jobTitle}</p>
          </p>
          <p className="text-slate-200 text-xs xl:text-base font-semibold">
            Department : {loginUser.data?.department?.departmentName}
          </p>
        </section>
      </span>
      <div className="flex flex-col items-center">
        <section className="flex justify-center absolute w-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-100 z-50 border border-slate-100">
          <h1 className="py-2 font-bold text-blue-900 xl:text-xl">
            User Information
          </h1>
        </section>
      </div>

      <section className="flex flex-col gap-5 p-5 py-10 relative rounded-b-lg">
        <section className="flex flex-col-reverse gap-5 xl:flex-row items-center justify-between">
          <h1 className="font-bold text-xl xl:text-2xl text-blue-800">
            Information
          </h1>
          {/* <button
              onClick={() => {
                // setInfoOpacity("opacity-100 left-1/2 w-[100%]");
                navigate("/admin/employees");
              }}
              type="button"
              className="bg-blue-600 py-2 px-5 font-bold rounded-lg shadow-md shadow-bluee-600/50 text-white text-lg hover:scale-105 active:scale-95 duration-200"
            >
              Employees
            </button> */}
        </section>
        <span className="flex flex-col mb-5 gap-5 mt-5 xl:px-5">
          <section className="grid xl:grid-cols-3 gap-5 xl:gap-3">
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Last Name
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.surname}
                className="border-b group-hover:border-red-700 font-bold text-slate-900 bg-slate-100 border-b-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                First Name
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.firstName}
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-16 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Middle Name
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.middleName}
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
          </section>
          <section className="grid xl:grid-cols-5 gap-5">
            {/* <span className="flex flex-col items-start">
              <p className="text-base font-bold text-blue-500">Birthdate</p>
              <input
                className="border-0 border-slate-500 h-[42px] w-full py-1 rounded-lg font-bold text-center overflow-hidden outline-none"
                type="text"
                readOnly
                value={
                  loginUser?.data?.birth.birthDate.toString().split("T")[0]
                }
              />
            </span> */}
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Birthdate
              </p>
              <input
                type="text"
                readOnly
                value={
                  loginUser?.data?.birth.birthDate.toString().split("T")[0]
                }
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Birthplace
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.birth.birthPlace}
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Nationality
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.birth.citizenship}
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Religion
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.birth.religion}
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
            <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
              <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-11 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50">
                Gender
              </p>
              <input
                type="text"
                readOnly
                value={loginUser?.data?.birth.sex}
                className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-lg text-center overflow-hidden px-1"
              />
            </span>
          </section>
        </span>
      </section>
    </div>
  );
};

export default UserProfie;
