import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IStudentsPost } from "../../../interface/IStudents";
import { addStudent } from "../../../api/student";
import { getPrograms } from "../../../api/programs";
import { IProgramGet } from "../../../interface/IProgram";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";
// import { MdDeleteForever } from "react-icons/md";

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

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IStudentsPost>();

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

  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [boarding, setBoarding] = useState<boolean>(false);
  const date = new Date();

  const handleInput1 = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;
    input = input.replace(/\D/g, ""); // Remove non-digits
    if (input.length > 11) input = input.slice(0, 11); // Limit to 6 digits
    setValue("phone", input); // Set clean value
  };

  const handleInput2 = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;
    input = input.replace(/\D/g, ""); // Remove non-digits
    if (input.length > 11) input = input.slice(0, 11); // Limit to 6 digits
    setValue("guardian.phone", input); // Set clean value
  };

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className="flex py-5">
      <div className="px-2">
        <form
          onSubmit={handleSubmit((data) => addMutation.mutate({ ...data }))}
          className={`${isOpen ? "" : ""} w-full xl:w-[1100px] flex flex-col`}
        >
          <div className="bg-black p-2 text-white rounded-t-md">
            <h1 className="text-2xl text-center font-bold justify-items-stretch">
              EForm
            </h1>
          </div>
          <div className="flex flex-col gap-2 border-4 border-black py-10 xl:p-10 rounded-b-md">
            <div className="flex flex-col xl:flex-row gap-5 items-center justify-between px-10">
              <div className="flex justify-center items-center w-40 xl:w-[200px]">
                <img src="/aclc-logo-text.png" alt="" className="w-full" />
              </div>
              <div className="border py-10 px-5 flex flex-col border-slate-500 rounded-md w- xl:w-[400px] gap-3">
                <section className="grid grid-cols-2 gap-3">
                  {/* <span
                className= 
              >
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  SSS
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  {...register("governmentId.sss")}
                />
              </span> */}
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs w-full xl:w-[82px] px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      School Year
                    </p>
                    <select
                      required
                      {...register("schoolYear")}
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                    >
                      <option
                        value={`${
                          date.getFullYear() - 1
                        } - ${date.getFullYear()}`}
                        selected
                      >
                        {date.getFullYear() - 1} - {date.getFullYear()}
                      </option>
                      <option
                        value={`${date.getFullYear()} - ${
                          date.getFullYear() + 1
                        }`}
                      >
                        {date.getFullYear()} - {date.getFullYear() + 1}
                      </option>
                    </select>
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Standing
                    </p>
                    <select
                      required
                      {...register("standing")}
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                    >
                      {[
                        "freshman",
                        "sophomore",
                        "junior",
                        "senoir",
                        "graduate",
                      ].map((standing, index) => (
                        <option
                          key={index}
                          value={standing}
                          selected={index === 0}
                        >
                          {standing}
                        </option>
                      ))}
                    </select>
                  </span>
                </section>
                <section className="grid grid-cols-2 gap-3">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Program
                    </p>
                    <select
                      required
                      {...register("program")}
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
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
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Semester
                    </p>
                    <select
                      required
                      {...register("semester")}
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                    >
                      <option value={1} selected>
                        1st
                      </option>
                      <option value={2}>2nd</option>
                    </select>
                  </span>
                </section>
                <h1 className="text-xs font-bold text-black">
                  INITIAL PAYMENT :
                </h1>
                <section className="grid grid-cols-3 gap-3">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-8 xl:left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Date
                    </p>
                    <input
                      readOnly
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="date"
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-8 w-[54px] xl:w-[57px] xl:left-11 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      OR No.
                    </p>
                    <input
                      readOnly
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-11 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Amount
                    </p>
                    <input
                      readOnly
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                    />
                  </span>
                </section>
              </div>
            </div>
            {/* <EFormSchoolYear /> */}
            <div className="p-3 flex flex-col">
              <div className="flex flex-col gap-3 pt-3 px-5 w-full">
                {/* Student */}
                <section className="flex flex-col gap-3 xl:flex-row justify-between">
                  <p className="font-bold">STUDENT'S INFORMATION</p>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      USN/LRN
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("username")}
                    />
                  </span>
                </section>
                <div className="gap-3 grid xl:grid-cols-3">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Last Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("surname")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      First Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("firstName")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-16 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Middle Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("middleName")}
                    />
                  </span>
                </div>
                <div className="grid xl:grid-cols-[1fr_2fr] gap-3">
                  {/* <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Telephone No.
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  {...register("telephone")}
                />
              </span> */}
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Phone No.
                    </p>
                    <input
                      type="text"
                      placeholder="e.g. 09*********"
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      inputMode="numeric"
                      {...register("phone", {
                        pattern: {
                          value: /^0\d{0,11}$/, // Must start with 0, max 11 digits
                          message: "Must start with 0 with 11 digits",
                        },
                      })}
                      onInput={handleInput1}
                    />
                    {errors.phone && (
                      <p
                        style={{ color: "red" }}
                        className="absolute font-bold text-xs left-14"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Email
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("email", {
                        // required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        style={{ color: "red" }}
                        className="absolute text-xs top-10 font-bold right-[190px]"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </span>
                </div>
                {/* Birthdate */}
                <h1 className="text-start font-semibold">
                  BIRTH'S INFORMATION
                </h1>
                <div className="grid xl:grid-cols-5 gap-3">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Birthdate
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="date"
                      {...register("birth.birthDate")}
                    />
                  </span>
                  <section className="grid xl:grid-cols-2 gap-3">
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Birthplace
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        {...register("birth.birthPlace")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-11 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Citizenship
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        {...register("birth.citizenship")}
                      />
                    </span>
                  </section>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Gender
                    </p>
                    <select
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      {...register("birth.sex")}
                    >
                      <option value="male" selected>
                        Male
                      </option>
                      <option value="female">Female</option>
                    </select>
                  </span>

                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Marital Status
                    </p>
                    <select
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      {...register("maritalStatus")}
                      onChange={(e) => {
                        setMaritalStatus(e.target.value);
                      }}
                    >
                      <option value="single" selected>
                        Single
                      </option>
                      <option value="married">Married</option>
                      <option value="widow">Widow</option>
                    </select>
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Religion
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("birth.religion")}
                    />
                  </span>
                </div>
              </div>
              {/* Spouse */}
              <div className="px-6 flex flex-col gap-3 pt-3">
                <section
                  className={`${
                    maritalStatus === "married" ? "" : "hidden"
                  } flex flex-col gap-3`}
                >
                  <h1 className="text-start font-semibold">
                    SPOUSE'S INFORMATION
                  </h1>

                  <div className="grid xl:grid-cols-4 gap-3">
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Last Name
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        {...register("spouse.lastName")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        First Name
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        {...register("spouse.firstName")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Middle Name
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        {...register("spouse.middleName")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        No. of Child
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="number"
                        {...register("spouse.children")}
                      />
                    </span>
                  </div>
                </section>
                {/* Home */}
                <section className="flex gap-10">
                  <h1 className="text-start font-semibold">HOME ADDRESS</h1>
                  <span className="flex gap-2 items-center justify-center">
                    <input
                      type="checkbox"
                      checked={boarding}
                      onChange={() => {
                        boarding ? setBoarding(false) : setBoarding(true);
                      }}
                      id="boarding"
                      className="hover:cursor-pointer duration-200 mt-1"
                    />
                    <label
                      htmlFor="boarding"
                      className="hover:cursor-pointer font-semibold hover:text-blue-600 duration-200"
                    >
                      ( check if boarding )
                    </label>
                  </span>
                </section>
                <div className="grid xl:grid-cols-5 gap-3 ">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      House No.
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="number"
                      {...register("homeAddress.houseNum")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Street/Brgy.
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.homeAddress?.streetBrgy}
                      {...register("homeAddress.streetBrgy")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-8 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      City
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.homeAddress.city}
                      {...register("homeAddress.city")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Province
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.homeAddress.province}
                      {...register("homeAddress.province")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      District
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.homeAddress.district}
                      {...register("homeAddress.district")}
                    />
                  </span>
                </div>
                {/* Boarding */}
                <section
                  className={`${boarding ? "" : "hidden"} flex flex-col gap-3`}
                >
                  <h1 className="text-start font-semibold">
                    CITY ADRESS ( IF BOARDING )
                  </h1>
                  <div className="grid xl:grid-cols-4 gap-3 ">
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        House No.
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        // value={snap.cityAddress.houseNum}
                        {...register("cityAddress.houseNum")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Street/Brgy.
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        // value={snap.cityAddress.streetBrgy}
                        {...register("cityAddress.streetBrgy")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-8 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        City
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        // value={snap.cityAddress.city}
                        {...register("cityAddress.city")}
                      />
                    </span>
                    <span
                      className={`${
                        isOpen ? "-z-50 xl:z-50" : ""
                      } relative group`}
                    >
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        District
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        // value={snap.cityAddress.district}
                        {...register("cityAddress.district")}
                      />
                    </span>
                  </div>
                </section>
              </div>
            </div>
            {/* <EFormStudent /> */}
            <div className="p-3">
              {/* <p className="font-bold px-6">PARENT'S & GUARDIAN'S INFORMATION</p> */}
              <div className="flex flex-col px-6 w-full ">
                {/* Father */}
                {/* <h1 className="text-start font-semibold">FATHER'S INFORMATION</h1>
            <div className="gap-3 grid grid-cols-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Last Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.lastName}
                  {...register("father.lastName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  First Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.firstName}
                  {...register("father.firstName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Middle Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.middleName}
                  {...register("father.middleName")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Occupation
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.occupation}
                  {...register("father.occupation")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Company Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.companyName}
                  {...register("father.companyName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Company Address
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.companyAddress}
                  {...register("father.companyAddress")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Telephone No.
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.telephone}
                  {...register("father.telephone")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Phone No.
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.phone}
                  {...register("father.phone")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Email
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.father.email}
                  {...register("father.email")}
                />
              </span>
            </div> */}
              </div>

              <div className="flex flex-col px-6 w-full">
                {/* Mother */}
                {/* <h1 className="text-start font-semibold">MOTHER'S INFORMATION</h1>
            <div className="gap-3 grid grid-cols-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Last Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.lastName}
                  {...register("mother.lastName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  First Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.firstName}
                  {...register("mother.firstName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Middle Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.middleName}
                  {...register("mother.middleName")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Occupation
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.occupation}
                  {...register("mother.occupation")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Company Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.companyName}
                  {...register("mother.companyName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Company Address
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.companyAddress}
                  {...register("mother.companyAddress")}
                />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Telephone No.
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.telephone}
                  {...register("mother.telephone")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Phone No.
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.phone}
                  {...register("mother.phone")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Email
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.mother.email}
                  {...register("mother.email")}
                />
              </span>
            </div> */}
              </div>

              <div className="flex w-full px-6 flex-col gap-5">
                {/* Guardian */}
                <h1 className="text-start font-semibold">
                  GUARDIAN'S INFORMATION
                </h1>
                <div className="grid xl:grid-cols-4 gap-3">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Last Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.lastName}
                      {...register("guardian.lastName")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      First Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.firstName}
                      {...register("guardian.firstName")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Middle Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.middleName}
                      {...register("guardian.middleName")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Relationship
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.relationship}
                      {...register("guardian.relationship")}
                    />
                  </span>
                </div>
                <div className="grid xl:grid-cols-3 gap-3">
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Occupation
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.occupation}
                      {...register("guardian.occupation")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-16 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Company Name
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.companyName}
                      {...register("guardian.companyName")}
                    />
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-20 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Company Address
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      // value={snap.guardian.companyAddress}
                      {...register("guardian.companyAddress")}
                    />
                  </span>
                </div>
                <div className="grid xl:grid-cols-[1fr_2fr] gap-3">
                  {/* <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Telephon No.
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.guardian.telephone}
                  {...register("guardian.telephone")}
                />
              </span> */}
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Phone No.
                    </p>
                    <input
                      type="text"
                      placeholder="e.g. 09*********"
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      inputMode="numeric"
                      {...register("guardian.phone", {
                        pattern: {
                          value: /^0\d{0,11}$/, // Must start with 0, max 11 digits
                          message: "Must start with 0 with 11 digits",
                        },
                      })}
                      onInput={handleInput2}
                    />
                    {errors.guardian?.phone && (
                      <p
                        style={{ color: "red" }}
                        className="absolute font-bold text-xs left-14"
                      >
                        {errors.guardian?.phone.message}
                      </p>
                    )}
                  </span>
                  <span
                    className={`${
                      isOpen ? "-z-50 xl:z-50" : ""
                    } relative group`}
                  >
                    <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Email
                    </p>
                    <input
                      className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                      type="text"
                      {...register("guardian.email", {
                        // required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.guardian?.email && (
                      <p
                        style={{ color: "red" }}
                        className="absolute text-xs top-10 font-bold right-[190px]"
                      >
                        {errors.guardian?.email.message}
                      </p>
                    )}
                  </span>
                </div>
                {/* <h1 className="text-start font-semibold">
              SPOUSE'S INFORMATION ( IF MARRIED )
            </h1>
            <div className="grid grid-cols-4 gap-3">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Last Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.guardianSpouse.lastName}
                  {...register("guardianSpouse.lastName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  First Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.guardianSpouse.firstName}
                  {...register("guardianSpouse.firstName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Middle Name
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="text"
                  // value={snap.guardianSpouse.middleName}
                  {...register("guardianSpouse.middleName")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  No. of Children
                </p>
                <input
                  className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  type="number"
                  // value={snap.guardianSpouse.children}
                  {...register("guardianSpouse.children")}
                />
              </span>
            </div> */}
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
                    <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Name
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        value={sibling?.fullName}
                        onChange={(e) => {
                          handleChange(index, "fullName", e.target.value);
                        }}
                      />
                    </span>
                    <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Age
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="number"
                        value={sibling?.age}
                        onChange={(e) => {
                          handleChange(index, "age", e.target.value);
                        }}
                      />
                    </span>
                    <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}>
                      <p className="text-xs px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                        Occupation/School
                      </p>
                      <input
                        className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                        type="text"
                        value={sibling?.occupationSchool}
                        onChange={(e) => {
                          handleChange(
                            index,
                            "occupationSchool",
                            e.target.value
                          );
                        }}
                      />
                    </span>
                    {siblings.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSibling(index)}
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
                onClick={addSibling}
                className="py-2 bg-slate-200 w-52 text-black font-bold rounded-md shadow hover:shadow-lg active:shadow  duration-200"
              >
                Add Another Sibling
              </button> */}

            {/* <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Submit
              </button> */}
            {/* </section>
          </div>
        </div> */}
            {/* <EformSiblings /> */}
            <section className="flex justify-center px-7 mx-2">
              <button
                type="submit"
                className="text-center bg-blue-600 shadow hover:shadow-lg active:shadow font-bold text-white rounded-lg
            xl:w-[40%] w-full py-2 duration-200 flex justify-center"
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
      </div>
    </div>
  );
}

export default EForm;
