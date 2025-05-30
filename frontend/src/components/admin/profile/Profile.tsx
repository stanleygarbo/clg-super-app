import { useDropzone } from "react-dropzone";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IEmployeeGet } from "../../../interface/IEmployee";
import { getEmployeeById } from "../../../api/employee";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

const Profile = () => {
  const [pfp, setPfp] = useState(
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
  );
  // const [infoOpacity, setInfoOpacity] = useState("opacity-0 w-0");
  const [employee, setEmployee] = useState<IEmployeeGet>();
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
      queryFn: () => getEmployeeById({ id }),
      enabled: !!id,
    });

    console.log("Query Data: ", query.isSuccess);

    if (query.isSuccess && !employee) {
      console.log(query.data);
      setEmployee(query.data);
    }
  }

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className="flex">
      <div className="xl:w-72 w-0"></div>
      <div
        className={`${
          isOpen ? "-z-50 xl:z-50" : ""
        } rounded-md shadow relative w-full xl:w-[1100px] xl:h-[700px] my-10`}
      >
        <span className="flex gap-5 items-start border-b p-10 rounded-t-lg bg-blue-600">
          <section
            {...getRootProps()}
            className="relative w-[100px] aspect-square"
          >
            <div className=" flex hover:opacity-100 justify-center items-center opacity-0 w-full h-full bg-black/50 absolute top-0 left-0 rounded-lg duration-200 cursor-pointer">
              <p className="flex text-white text-xl">
                <MdEdit />
              </p>
              <input {...getInputProps()} />
            </div>
            <img
              src={pfp}
              alt=""
              className="w-full h-full xl:w-[100px] xl:h-[100px] bg-blue-400 rounded-lg shadow-md object-cover border"
            />
          </section>
          <section className="flex flex-col justify-center">
            <p className="text-sm xl:text-lg text-start font-bold text-slate-50">
              {employee?.surname}, {employee?.firstName}{" "}
              {employee?.middleName[0]}.
            </p>
            <p className="flex gap-2 text-xs xl:text-base text-slate-300 font-semibold">
              <p>Position : {employee?.position?.jobTitle}</p>
            </p>
            <p className="text-slate-300 text-xs xl:text-base font-semibold">
              Department : {employee?.department?.departmentName}
            </p>
          </section>
        </span>
        <div className="flex flex-col items-center">
          <section className="flex absolute w-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md bg-slate-50 z-50">
            <h1 className="py-2 px-5 font-bold">Personal Information</h1>
          </section>
        </div>

        <section className="flex flex-col gap-5 p-5 py-10 relative">
          <section className="flex flex-col-reverse gap-5 xl:flex-row items-center justify-between">
            <h1 className="font-bold text-xl xl:text-2xl">Information</h1>
            <button
              onClick={() => {
                // setInfoOpacity("opacity-100 left-1/2 w-[100%]");
                navigate("/admin/employees");
              }}
              type="button"
              className="bg-blue-600 py-2 px-5 font-bold rounded-lg shadow-md shadow-bluee-600/50 text-white text-lg hover:scale-105 active:scale-95 duration-200"
            >
              Employees
            </button>
          </section>
          <span className="flex flex-col mb-5">
            <ProfileInfo />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Profile;
