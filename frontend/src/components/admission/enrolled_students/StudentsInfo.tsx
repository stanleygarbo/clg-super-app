import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import { getStudentById, updateStudent } from "../../../api/student";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getPrograms } from "../../../api/programs";
import { IProgramGet } from "../../../interface/IProgram";
import { IStudentsGet, IStudentsPost } from "../../../interface/IStudents";
import { useForm } from "react-hook-form";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";
// import { Sibling } from "../enrollment_form/EForm";

const StudentsInfo = () => {
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [type, setType] = useState<"button" | "submit" | "reset" | undefined>(
    "button"
  );
  // const [loading, setLoading] = useState(true);
  // const snapStudent = useSnapshot(studentGetData);
  const navigate = useNavigate();
  // const [sibling, setSibling] = useState<ISibling[]>([]);
  const { id } = useParams();
  const { handleSubmit, register, reset } = useForm<IStudentsPost>();

  if (!id) return;

  const query = useQuery<IStudentsGet>({
    queryKey: ["student", id],
    queryFn: () => getStudentById({ id }),
    enabled: !!id,
  });

  const programs = useQuery({
    queryKey: ["departments"],
    queryFn: getPrograms,
  });

  const updateStudMutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      toast.success("Updated Successfully");
      query.refetch();
      navigate("/admission/enroll-student");
    },
    onError: (err: any) => {
      toast.error(err.response.data.message, {});
    },
  });

  useEffect(() => {
    if (query.data) {
      reset({
        firstName: query.data?.firstName,
        surname: query.data?.surname,
        middleName: query.data?.middleName,
        email: query.data?.email,
        program: query.data?.program._id,
        // roles: deaf,
        phone: query.data?.phone,
        documents: query.data?.documents,
        // grades: query.data?.grades,
        birth: {
          birthDate: query.data?.birth.birthDate?.toString().split("T")[0],
          birthPlace: query.data?.birth.birthPlace,
          religion: query.data?.birth.religion,
          citizenship: query.data?.birth.citizenship,
        },
        homeAddress: {
          houseNum: query.data?.homeAddress?.houseNum,
          streetBrgy: query.data?.homeAddress?.streetBrgy,
          city: query.data?.homeAddress?.city,
          province: query.data?.homeAddress?.province,
          district: query.data?.homeAddress?.district,
        },
        cityAddress: {
          houseNum: query.data?.cityAddress?.houseNum,
          streetBrgy: query.data?.cityAddress?.streetBrgy,
          city: query.data?.cityAddress?.city,
          province: query.data?.cityAddress?.province,
          district: query.data?.cityAddress?.district,
        },
      });
    }

    if (query.data?.cityAddress?.streetBrgy != null) {
      setCheckboarding(true);
    }
  }, [query.data, reset]);

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;
  const [checkboarding, setCheckboarding] = useState<boolean>(false);

  return (
    <div className="flex p-3">
      <div className="w-0 xl:w-72"></div>
      <form
        onSubmit={handleSubmit((data) => {
          if (!id) {
            toast.error("No employee ID found!");
            return;
          }
          updateStudMutation.mutate({ data, id });
        })}
        className="mb-10 mt-5 flex flex-col border rounded-lg w-full xl:w-[1100px] shadow-md gap-5"
      >
        <h1 className="text-2xl font-bold mb-10 rounded-t-lg text-blue-800 border-b text-center bg-slate-100 py-4">
          Update Student
        </h1>
        <div className="flex flex-col gap-5 px-10 pb-10">
          <section className="xl:absolute bg-slate-50 top-[150px] right-[953px] flex gap-10 px-5 rounded-md p-3 shadow-sm border border-slate-100">
            <div className="flex flex-col">
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="nso"
                  {...register("documents.birthCertificate")}
                  // defaultChecked={query.data?.documents?.birthCertificate}
                />
                <label htmlFor="nso">NSO</label>
              </span>
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="form137"
                  {...register("documents.form137")}
                  // defaultChecked={query.data?.documents?.tin}
                />
                <label htmlFor="form137">Form 137</label>
              </span>
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="form138"
                  {...register("documents.form138")}
                  // defaultChecked={query.data?.documents?.tin}
                />
                <label htmlFor="form138">Form 138</label>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="flex gap-1 items-center p-1">
                <input
                  type="checkbox"
                  id="goodmoral"
                  {...register("documents.goodMoral")}
                  // defaultChecked={query.data?.documents?.birthCertificate}
                />
                <label htmlFor="goodmoral">Good Moral</label>
              </span>
              {/* <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="tor"
                {...register("documents.tor")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="tor">TOR</label>
            </span>
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="philhealth"
                {...register("documents.philhealth")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="philhealth">Philhealth</label>
            </span> */}
            </div>
          </section>
          <section className="flex gap-3 justify-end pt-20">
            <button
              disabled={isUpdate}
              type="button"
              onClick={() => {
                isUpdate ? setIsUpdate(false) : setIsUpdate(true);
              }}
              className={`${
                isUpdate
                  ? "bg-red-600 shadow-red-500/50 opacity-0"
                  : "bg-red-500 shadow-red-500/50 opacity-100"
              } p-1 px-4 text-white font-bold text-xl rounded-md shadow-sm  hover:scale-105 active:scale-95 duration-200`}
            >
              Cancel
            </button>
            <button
              disabled={isUpdate && !query.data}
              type={type}
              onClick={() => {
                isUpdate ? setType("button") : setType("submit");
                setIsUpdate(false);
              }}
              className={`${
                isUpdate
                  ? "bg-blue-600 shadow-blue-500/50 disabled:opacity-50"
                  : "bg-green-600 shadow-green-500/50 "
              } p-1 px-4 text-white font-bold text-xl rounded-md shadow-sm  hover:scale-105 active:scale-95 duration-200`}
            >
              {isUpdate ? (
                "Edit"
              ) : updateStudMutation.isPending ? (
                <img src="/loading.svg" className="invert px-5" alt="" />
              ) : (
                "Update"
              )}
            </button>
          </section>
          <section className="flex justify-between">
            <h1 className="text-lg font-bold">Student Information : </h1>
          </section>

          <span className="grid xl:grid-cols-5 gap-2">
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-[11px] px-1 font-bold absolute text-blue-700 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Last Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.surname}
                {...register("surname")}
                className="border focus:border-2 border-blue-700 outline-none h-[35px] w-[100%] py-1 rounded-md font-semibold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-[11px] px-1 font-bold absolute text-blue-700 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                First Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.firstName}
                {...register("firstName")}
                className="border border-blue-700 focus:border-2 outline-none h-[35px] w-[100%] py-1 rounded-md font-semibold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-[11px] px-1 font-bold absolute text-blue-700 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Middle Name
              </p>
              <input
                defaultValue={query.data?.middleName}
                {...register("middleName")}
                type="text"
                readOnly={isUpdate}
                className="border border-blue-700 focus:border-2 outline-none h-[35px] w-[100%] py-1 rounded-md font-semibold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Program
              </p>
              <select
                disabled={isUpdate}
                {...register("program")}
                className="border border-slate-500 bg-white h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              >
                {programs.data?.results.map(
                  (prog: IProgramGet, index: number) => (
                    <option
                      selected={prog._id == query.data?.program._id}
                      key={index}
                      value={prog._id}
                    >
                      {prog.programAcronym}
                    </option>
                  )
                )}
              </select>
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Standing
              </p>
              <select
                disabled={isUpdate}
                {...register("standing")}
                className="border border-slate-500 bg-white h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              >
                {["freshman", "sophomore", "junior", "senoir", "graduate"].map(
                  (standing, index) => {
                    return (
                      <option
                        selected={standing == query.data?.standing}
                        key={index}
                        value={standing}
                      >
                        {standing}
                      </option>
                    );
                  }
                )}
              </select>
            </section>
          </span>
          <span className="grid xl:grid-cols-[1fr_1fr_1fr_2fr] gap-2">
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                School Year
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.schoolYear}
                {...register("schoolYear")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                USN
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.username}
                {...register("username")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>

            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Phone No.
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.phone}
                {...register("phone")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Email
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.email}
                {...register("email")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
          </span>
          <span className="grid xl:grid-cols-6 gap-2">
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Birth Date
              </p>
              <input
                type="date"
                readOnly={isUpdate}
                defaultValue={query.data?.birth.birthDate}
                {...register("birth.birthDate")}
                className="border border-slate-500 bg-white flex justify-center h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Birth Place
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.birth.birthPlace}
                {...register("birth.birthPlace")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Marital Status
              </p>
              <select
                disabled={isUpdate}
                {...register("maritalStatus")}
                className={`border border-slate-500 bg-white h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1`}
              >
                {[
                  { value: "single", label: "Single" },
                  { value: "married", label: "Married" },
                  { value: "widow", label: "Widow" },
                ].map((marital, index) => (
                  <option
                    key={index}
                    value={marital.value}
                    selected={marital.value == query.data?.maritalStatus}
                  >
                    {marital.label}
                  </option>
                ))}
              </select>
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Citizenship
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.birth.citizenship}
                {...register("birth.citizenship")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Sex
              </p>
              <select
                disabled={isUpdate}
                {...register("birth.sex")}
                className={`border border-slate-500 bg-white h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1`}
              >
                {[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ].map((gender, index) => (
                  <option
                    key={index}
                    value={gender.value}
                    selected={gender.value == query.data?.birth?.sex}
                  >
                    {gender.label}
                  </option>
                ))}
              </select>
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Religion
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.birth.religion}
                {...register("birth.religion")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
          </span>
          {query.data?.spouse.lastName &&
            query.data?.maritalStatus === "married" && (
              <div className="flex flex-col gap-5">
                <h1 className="text-sm font-bold">
                  Student Spouse Information :{" "}
                </h1>
                <span className="grid xl:grid-cols-4 gap-2">
                  <section
                    className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                  >
                    <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Last Name
                    </p>
                    <input
                      type="text"
                      readOnly={isUpdate}
                      defaultValue={query.data?.spouse?.lastName}
                      {...register("spouse.lastName")}
                      className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                    />
                  </section>
                  <section
                    className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                  >
                    <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      First Name
                    </p>
                    <input
                      type="text"
                      readOnly={isUpdate}
                      defaultValue={query.data?.spouse?.firstName}
                      {...register("spouse.firstName")}
                      className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                    />
                  </section>
                  <section
                    className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                  >
                    <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      Middle Name
                    </p>
                    <input
                      type="text"
                      readOnly={isUpdate}
                      defaultValue={query.data?.spouse?.middleName}
                      {...register("spouse.middleName")}
                      className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                    />
                  </section>
                  <section
                    className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                  >
                    <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                      No. of Children
                    </p>
                    <input
                      type="text"
                      readOnly={isUpdate}
                      defaultValue={query.data?.spouse?.children}
                      {...register("spouse.children")}
                      className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                    />
                  </section>
                </span>
              </div>
            )}
          <section className="flex justify-between">
            <h1 className="text-sm font-bold">Home Address : </h1>
            <section className="flex gap-3 items-center">
              <input
                type="checkbox"
                id="boarding"
                className="w-4 h-4"
                checked={checkboarding}
                onClick={() => {
                  if (!query.data?.cityAddress?.streetBrgy) {
                    setCheckboarding(!checkboarding);
                  }
                }}
              />
              <label htmlFor="boarding" className="text-blue-700 font-bold">
                ( check if boarding)
              </label>
            </section>
          </section>
          <span className="grid xl:grid-cols-5 gap-2">
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                House No.
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.homeAddress?.houseNum}
                {...register("homeAddress.houseNum")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Brgy./Street
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.homeAddress?.streetBrgy}
                {...register("homeAddress.streetBrgy")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                City
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.homeAddress?.city}
                {...register("homeAddress.city")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Province
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                {...register("homeAddress.province")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                District
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                {...register("homeAddress.district")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
          </span>
          {(query.data?.cityAddress?.streetBrgy || checkboarding) && (
            <div>
              <h1 className="text-sm font-bold pb-5">
                Address ( if Boarding ) :{" "}
              </h1>
              <span className="grid xl:grid-cols-4 gap-2">
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    House No.
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    // defaultValue={query.data?.cityAddress?.houseNum}
                    {...register("cityAddress.houseNum")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    Brgy./Street
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    // defaultValue={query.data?.cityAddress?.streetBrgy}
                    {...register("cityAddress.streetBrgy")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    City
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    // defaultValue={query.data?.cityAddress?.city}
                    {...register("cityAddress.city")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    District
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    // defaultValue={query.data?.cityAddress?.district}
                    {...register("cityAddress.district")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
              </span>
            </div>
          )}
          <h1 className="text-sm font-bold">Guardian Information : </h1>
          <span className="grid xl:grid-cols-5 gap-2">
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Last Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.lastName}
                {...register("guardian.lastName")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                First Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.firstName}
                {...register("guardian.firstName")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Middle Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.middleName}
                {...register("guardian.middleName")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Occupation
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.occupation}
                {...register("guardian.occupation")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Relationship
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.relationship}
                {...register("guardian.relationship")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
          </span>
          <span className="grid xl:grid-cols-[1fr_1fr_1fr_2fr] gap-2">
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Company Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.companyName}
                {...register("guardian.companyName")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 w-[105px] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Company Address
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.companyAddress}
                {...register("guardian.companyAddress")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Phone No.
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.phone}
                {...register("guardian.phone")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Email
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                defaultValue={query.data?.guardian?.email}
                {...register("guardian.email")}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
          </span>
          {query.data?.guardianSpouse?.lastName && (
            <div>
              <h1 className="text-sm font-bold">
                Guardian Spouse Information :{" "}
              </h1>
              <span className="grid grid-cols-3 gap-2">
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    Last Name
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    defaultValue={query.data?.guardianSpouse?.lastName}
                    {...register("guardianSpouse.lastName")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    First Name
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    defaultValue={query.data?.guardianSpouse?.firstName}
                    {...register("guardianSpouse.firstName")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
                <section
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}
                >
                  <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    Middle Name
                  </p>
                  <input
                    type="text"
                    readOnly={isUpdate}
                    defaultValue={query.data?.guardianSpouse?.middleName}
                    {...register("guardianSpouse.middleName")}
                    className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                  />
                </section>
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default StudentsInfo;
