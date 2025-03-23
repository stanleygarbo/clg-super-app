import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IStudentsPost } from "../../../interface/IStudents";
import { addStudent } from "../../../api/student";
import { getPrograms } from "../../../api/programs";
import { IProgramGet } from "../../../interface/IProgram";

export interface Sibling {
  fullName: string;
  age: string;
  occupationSchool: string;
}

function EForm() {
  const navigate = useNavigate();

  // const [siblings, setSiblings] = useState<Sibling[]>([
  //   { fullName: "", age: "", occupationSchool: "" },
  // ]);

  // const handleChange = (index: number, field: keyof Sibling, value: string) => {
  //   const updatedSiblings = [...siblings];
  //   updatedSiblings[index][field] = value;
  //   setSiblings(updatedSiblings);
  // };

  // const addSibling = () => {
  //   setSiblings([...siblings, { fullName: "", age: "", occupationSchool: "" }]);
  // };

  // const removeSibling = (index: number) => {
  //   const updatedSiblings = siblings.filter((_, i) => i !== index);
  //   setSiblings(updatedSiblings);
  // };

  const { handleSubmit, register } = useForm<IStudentsPost>();

  const programs = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const addMutation = useMutation({
    mutationFn: addStudent,
    onSuccess: () => {
      toast.success("Added Successfully");
      navigate("/admission/enroll-student");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => addMutation.mutate(data))}
      className="p-10 w-[1100px]"
    >
      <div className="bg-black p-2 text-white rounded-t-md">
        <h1 className="text-2xl text-center font-bold justify-items-stretch">
          EForm
        </h1>
      </div>
      <div className="flex flex-col gap-2 mx-auto border-4 border-black mb-20 p-10 rounded-b-md">
        <div className="flex justify-between px-10">
          <div className="flex justify-center items-center w-[200px]">
            <img src="/aclc-logo-text.png" alt="" className="" />
          </div>
          <div className="border py-10 px-5 flex flex-col border-slate-500 rounded-md w-[400px] gap-3">
            <section className="grid grid-cols-2 gap-3">
              <span className={` relative `}>
                <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  School Year
                </p>
                <select
                  required
                  {...register("schoolYear")}
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  <option value="2024-2025" selected>
                    2024-2025
                  </option>
                </select>
              </span>
              <span className={` relative `}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Standing
                </p>
                <select
                  required
                  {...register("standing")}
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  {[
                    "freshman",
                    "sophomore",
                    "junior",
                    "senoir",
                    "graduate",
                  ].map((standing, index) => (
                    <option key={index} value={standing} selected={index === 0}>
                      {standing}
                    </option>
                  ))}
                </select>
              </span>
            </section>
            <section className="grid grid-cols-2 gap-3">
              <span className={`relative  `}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Program
                </p>
                <select
                  required
                  {...register("program")}
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  {programs.data?.results.map(
                    (prog: IProgramGet, index: number) => (
                      <option
                        key={index}
                        selected={index === 0}
                        value={prog._id}
                      >
                        {prog.programAcronym}
                      </option>
                    )
                  )}
                </select>
              </span>
              <span className={` relative `}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Semester
                </p>
                <select
                  required
                  {...register("semester")}
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  <option value="1st" selected>
                    1st
                  </option>
                  <option value="2nd">2nd</option>
                </select>
              </span>
            </section>
            <h1 className="text-sm font-bold text-black">INITIAL PAYMENT :</h1>
            <section className="grid grid-cols-3 gap-3">
              <span className={` relative `}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Date
                </p>
                <input
                  readOnly
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="date"
                />
              </span>
              <span className={` relative `}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  OR No.
                </p>
                <input
                  readOnly
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                />
              </span>
              <span className={` relative `}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Amount
                </p>
                <input
                  readOnly
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                />
              </span>
            </section>
          </div>
        </div>
        {/* <EFormSchoolYear /> */}
        <div className="p-3">
          <div className="flex flex-col gap-3 pt-3 px-6 w-full">
            {/* Student */}
            <section className="flex justify-between">
              <p className="font-bold">STUDENT'S INFORMATION</p>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  USN/LRN
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("username")}
                />
              </span>
            </section>
            <div className="gap-3 grid grid-cols-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("surname")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("firstName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("middleName")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Telephone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("telephone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Phone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("phone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Email
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("email")}
                />
              </span>
            </div>
            {/* Birthdate */}
            <h1 className="text-start font-semibold">BIRTH'S INFORMATION</h1>
            <div className="grid grid-cols-5 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Birthdate
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="date"
                  {...register("birth.birthDate")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Birthplace
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.birthPlace")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Citizenship
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.citizenship")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Sex
                </p>
                <select
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  {...register("birth.sex")}
                >
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Religion
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.religion")}
                />
              </span>
            </div>
          </div>
          {/* Spouse */}
          <div className="px-6 flex flex-col gap-3 pt-3">
            <h1 className="text-start font-semibold">
              SPOUSE'S INFORMATION ( IF MARRIED )
            </h1>

            <div className="grid grid-cols-4 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("spouse.lastName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("spouse.firstName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("spouse.middleName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  No. of Child
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="number"
                  {...register("spouse.children")}
                />
              </span>
            </div>
            {/* Home */}
            <h1 className="text-start font-semibold">HOME ADDRESS</h1>
            <div className="grid grid-cols-5 gap-3 ">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  House No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="number"
                  {...register("homeAddress.houseNum")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Street/Brgy.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.homeAddress?.streetBrgy}
                  {...register("homeAddress.streetBrgy")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  City
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.homeAddress.city}
                  {...register("homeAddress.city")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Province
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.homeAddress.province}
                  {...register("homeAddress.province")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  District
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.homeAddress.district}
                  {...register("homeAddress.district")}
                />
              </span>
            </div>
            {/* Boarding */}
            <h1 className="text-start font-semibold">
              CITY ADRESS ( IF BOARDING )
            </h1>
            <div className="grid grid-cols-4 gap-3 ">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  House No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.boardAddress.houseNum}
                  {...register("boardAddress.houseNum")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Street/Brgy.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.boardAddress.streetBrgy}
                  {...register("boardAddress.streetBrgy")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  City
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.boardAddress.city}
                  {...register("boardAddress.city")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  District
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.boardAddress.district}
                  {...register("boardAddress.district")}
                />
              </span>
            </div>
          </div>
        </div>
        {/* <EFormStudent /> */}
        <div className="p-3">
          <p className="font-bold px-6">PARENT'S & GUARDIAN'S INFORMATION</p>
          <div className="flex flex-col gap-3 pt-3 px-6 w-full ">
            {/* Father */}
            <h1 className="text-start font-semibold">FATHER'S INFORMATION</h1>
            <div className="gap-3 grid grid-cols-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.lastName}
                  {...register("father.lastName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.firstName}
                  {...register("father.firstName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.middleName}
                  {...register("father.middleName")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Occupation
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.occupation}
                  {...register("father.occupation")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Company Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.companyName}
                  {...register("father.companyName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Company Address
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.companyAddress}
                  {...register("father.companyAddress")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Telephone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.telephone}
                  {...register("father.telephone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Phone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.phone}
                  {...register("father.phone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Email
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.father.email}
                  {...register("father.email")}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-3 px-6 w-full">
            {/* Mother */}
            <h1 className="text-start font-semibold">MOTHER'S INFORMATION</h1>
            <div className="gap-3 grid grid-cols-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.lastName}
                  {...register("mother.lastName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.firstName}
                  {...register("mother.firstName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.middleName}
                  {...register("mother.middleName")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Occupation
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.occupation}
                  {...register("mother.occupation")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Company Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.companyName}
                  {...register("mother.companyName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Company Address
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.companyAddress}
                  {...register("mother.companyAddress")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Telephone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.telephone}
                  {...register("mother.telephone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Phone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.phone}
                  {...register("mother.phone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Email
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.mother.email}
                  {...register("mother.email")}
                />
              </span>
            </div>
          </div>

          <div className="flex w-full px-6 pt-3 flex-col gap-5">
            {/* Guardian */}
            <h1 className="text-start font-semibold">GUARDIAN'S INFORMATION</h1>
            <div className="grid grid-cols-4 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.lastName}
                  {...register("guardian.lastName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.firstName}
                  {...register("guardian.firstName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.middleName}
                  {...register("guardian.middleName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Relationship
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.relationship}
                  {...register("guardian.relationship")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Occupation
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.occupation}
                  {...register("guardian.occupation")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Company Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.companyName}
                  {...register("guardian.companyName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Company Address
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.companyAddress}
                  {...register("guardian.companyAddress")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Telephon No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.telephone}
                  {...register("guardian.telephone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Phone No.
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="number"
                  // value={snap.guardian.phone}
                  {...register("guardian.phone")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Email
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardian.email}
                  {...register("guardian.email")}
                />
              </span>
            </div>
            <h1 className="text-start font-semibold">
              SPOUSE'S INFORMATION ( IF MARRIED )
            </h1>
            <div className="grid grid-cols-4 gap-3">
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardianSpouse.lastName}
                  {...register("guardianSpouse.lastName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardianSpouse.firstName}
                  {...register("guardianSpouse.firstName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  // value={snap.guardianSpouse.middleName}
                  {...register("guardianSpouse.middleName")}
                />
              </span>
              <span className={` relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  No. of Children
                </p>
                <input
                  className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="number"
                  // value={snap.guardianSpouse.children}
                  {...register("guardianSpouse.children")}
                />
              </span>
            </div>
          </div>
        </div>
        {/* <EFormParents /> */}
        {/* <div className="p-3 duration-200">
          <section className="flex justify-between">
            <p className="font-bold pb-4 px-6">SIBLING'S INFORMATION</p>
          </section>

          <div className="flex flex-col gap-3 px-6">
            <section className="">
              {siblings?.map((sibling, index) => (
                <div key={index} className="flex flex-col relative">
                  <div
                    className={`${
                      siblings.length > 1 ? "pr-10" : ""
                    } grid grid-cols-3 gap-3 pb-5`}
                  >
                    <span className={` relative`}>
                      <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                        Name
                      </p>
                      <input
                        className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                        type="text"
                        value={sibling?.fullName}
                        // onChange={(e) => {
                        //   handleChange(index, "fullName", e.target.value);
                        // }}
                      />
                    </span>
                    <span className={` relative`}>
                      <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                        Age
                      </p>
                      <input
                        className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                        type="number"
                        value={sibling?.age}
                        // onChange={(e) => {
                        //   handleChange(index, "age", e.target.value);
                        // }}
                      />
                    </span>
                    <span className={` relative`}>
                      <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                        Occupation/School
                      </p>
                      <input
                        className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                        type="text"
                        value={sibling?.occupationSchool}
                        // onChange={(e) => {
                        //   handleChange(
                        //     index,
                        //     "occupationSchool",
                        //     e.target.value
                        //   );
                        // }}
                      />
                    </span>
                     {siblings.length > 1 && (
                      <button
                        type="button"
                        // onClick={() => removeSibling(index)}
                        className="text-white text-xl shadow-sm shadow-red-600/50 my-1 rounded-md bg-red-600 p-1 absolute transform -translate-x-1 -translate-y-5 top-4 right-0 hover:scale-105 active:scale-95 duration-200"
                      >
                        <MdDeleteForever />
                      </button>
                    )} 
                  </div>
                </div>
              ))}
              <button
                type="button"
                // onClick={addSibling}
                className="py-2 bg-slate-200 w-52 text-black font-bold rounded-md shadow hover:shadow-lg active:shadow  duration-200"
              >
                Add Another Sibling
              </button>

               <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit
          </button>
            </section>
          </div>
        </div> */}
        {/* <EformSiblings /> */}
        <section className="flex justify-center px-7 mx-2">
          <button
            type="submit"
            className="text-center bg-blue-600 shadow hover:shadow-lg active:shadow font-bold text-white rounded-lg
            w-[40%] py-2 duration-200 flex justify-center"
          >
            {addMutation.isPending ? (
              <img src="/loading.svg" className="invert px-5" alt="" />
            ) : (
              "Enroll Student"
            )}
          </button>
        </section>
      </div>
    </form>
  );
}

export default EForm;
