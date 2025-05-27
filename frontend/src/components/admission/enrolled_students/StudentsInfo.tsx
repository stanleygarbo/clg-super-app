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
import { Sibling } from "../enrollment_form/EForm";

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
      toast.error(err.response.data.message);
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
        birth: {
          birthDate: query.data?.birth.birthDate,
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
        boardAddress: {
          houseNum: query.data?.homeAddress?.houseNum,
          streetBrgy: query.data?.homeAddress?.streetBrgy,
          city: query.data?.homeAddress?.city,
          province: query.data?.homeAddress?.province,
          district: query.data?.homeAddress?.district,
        },
      });
    }
  }, [query.data, reset]);

  // console.log(query);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (!id) {
          toast.error("No employee ID found!");
          return;
        }
        // console.log("Data to be patch : ", data);
        updateStudMutation.mutate({ data, id });
      })}
      className="mb-10 mt-5 flex flex-col border rounded-lg w-[1100px] shadow-md gap-5"
    >
      <h1 className="text-2xl font-bold mb-10 rounded-t-lg text-blue-800 border-b text-center bg-slate-100 py-4">
        Update Student
      </h1>
      <div className="flex flex-col gap-5 px-10 pb-10">
        <section className="absolute bg-slate-50 top-[170px] right-[830px] flex gap-10 px-5 rounded-md p-3 shadow-sm border border-slate-100">
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

        <span className="grid grid-cols-5 gap-2">
          <section className="relative">
            <p className="text-[11px] px-1 font-bold absolute text-blue-700 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              // value={snapStudent.surname}
              defaultValue={query.data?.surname}
              {...register("surname")}
              className="border focus:border-2 border-blue-700 outline-none h-[35px] w-[100%] py-1 rounded-md font-semibold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative">
            <p className="text-[11px] px-1 font-bold absolute text-blue-700 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              First Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              // value={snapStudent.firstName}
              defaultValue={query.data?.firstName}
              {...register("firstName")}
              className="border border-blue-700 focus:border-2 outline-none h-[35px] w-[100%] py-1 rounded-md font-semibold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-[11px] px-1 font-bold absolute text-blue-700 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Middle Name
            </p>
            <input
              // value={snapStudent.middleName}
              defaultValue={query.data?.middleName}
              {...register("middleName")}
              type="text"
              readOnly={isUpdate}
              className="border border-blue-700 focus:border-2 outline-none h-[35px] w-[100%] py-1 rounded-md font-semibold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Program
            </p>
            <select
              disabled={isUpdate}
              {...register("program")}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
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
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Standing
            </p>
            <select
              disabled={isUpdate}
              {...register("standing")}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
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
        <span className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-2">
          <section className="relative rounded-lg">
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
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              USN
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.username}
              {...register("username")}
              // value={snapStudent.username}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>

          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Phone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.phone}
              {...register("phone")}
              // value={snapStudent.phone}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Email
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.email}
              {...register("email")}
              // value={snapStudent.email}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Birth Date
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.birth.birthDate}
              {...register("birth.birthDate")}
              // value={snapStudent.birth.birthDate}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Birth Place
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.birth.birthPlace}
              {...register("birth.birthPlace")}
              // value={snapStudent.birth.birthPlace}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Citizenship
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.birth.citizenship}
              {...register("birth.citizenship")}
              // value={snapStudent.birth.citizenship}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className={`relative rounded-lg`}>
            <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Sex
            </p>
            <select
              disabled={isUpdate}
              {...register("birth.sex")}
              // value={snapStudent.birth.sex}
              className={`border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1`}
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
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Religion
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.birth.religion}
              {...register("birth.religion")}
              // value={snapStudent.birth.religion}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        {query.data?.spouse.lastName && (
          <div className="flex flex-col gap-5">
            <h1 className="text-sm font-bold">Student Spouse Information : </h1>
            <span className="grid grid-cols-4 gap-2">
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Last Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.spouse?.lastName}
                  {...register("spouse.lastName")}
                  // value={query.data?.spouse?.lastName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  First Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.spouse?.firstName}
                  {...register("spouse.firstName")}
                  // value={query.data?.spouse?.firstName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Middle Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.spouse?.middleName}
                  {...register("spouse.middleName")}
                  // value={query.data?.spouse?.middleName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  No. of Children
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.spouse?.children}
                  {...register("spouse.children")}
                  // value={query.data?.spouse?.children}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
            </span>
          </div>
        )}
        <h1 className="text-sm font-bold">Home Address : </h1>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              House No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.homeAddress?.houseNum}
              {...register("homeAddress.houseNum")}
              // value={query.data?.homeAddress?.houseNum}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Brgy./Street
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.homeAddress?.streetBrgy}
              {...register("homeAddress.streetBrgy")}
              // value={query.data?.homeAddress?.streetBrgy}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              City
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.homeAddress?.city}
              {...register("homeAddress.city")}
              // value={query.data?.homeAddress?.city}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Province
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              // defaultValue={query.data?.homeAddress?.province}
              {...register("homeAddress.province")}
              // value={query.data?.homeAddress?.province}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              District
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              // defaultValue={query.data?.homeAddress?.province}
              {...register("homeAddress.district")}
              // value={query.data?.homeAddress?.district}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        {query.data?.boardAddress?.houseNum && (
          <div>
            <h1 className="text-sm font-bold">Address ( if Boarding ) : </h1>
            <span className="grid grid-cols-4 gap-2">
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  House No.
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.boardAddress?.houseNum}
                  {...register("boardAddress.houseNum")}
                  // value={query.data?.boardAddress?.houseNum}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Brgy./Street
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.boardAddress?.streetBrgy}
                  {...register("boardAddress.streetBrgy")}
                  // value={query.data?.boardAddress?.streetBrgy}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  City
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.boardAddress?.city}
                  {...register("boardAddress.city")}
                  // value={query.data?.boardAddress?.city}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  District
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.boardAddress?.district}
                  {...register("boardAddress.district")}
                  // value={query.data?.boardAddress?.district}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
            </span>
          </div>
        )}
        {/* <h1 className="text-sm font-bold">Father Information : </h1>
        <span className="grid grid-cols-4 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.lastName}
              {...register("father.lastName")}
              // value={query.data?.father?.lastName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              First Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.firstName}
              {...register("father.firstName")}
              // value={query.data?.father?.firstName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Middle Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.middleName}
              {...register("father.middleName")}
              // value={query.data?.father?.middleName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Occupation
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.occupation}
              {...register("father.occupation")}
              // value={query.data?.father?.occupation}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Company Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.companyName}
              {...register("father.companyName")}
              // value={query.data?.father?.companyName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 w-[105px] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Company Address
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.companyAddress}
              {...register("father.companyAddress")}
              // value={query.data?.father?.companyAddress}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Telephone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.telephone}
              {...register("father.telephone")}
              // value={query.data?.father?.telephone}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Phone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.phone}
              {...register("father.phone")}
              // value={query.data?.father?.phone}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Email
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.father?.email}
              {...register("father.email")}
              // value={query.data?.father?.email}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-sm font-bold">Mother Information : </h1>
        <span className="grid grid-cols-4 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.lastName}
              {...register("mother.lastName")}
              // value={query.data?.mother?.lastName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              First Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.firstName}
              {...register("mother.firstName")}
              // value={query.data?.mother?.firstName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Middle Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.middleName}
              {...register("mother.middleName")}
              // value={query.data?.mother?.middleName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Occupation
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.occupation}
              {...register("mother.occupation")}
              // value={query.data?.mother?.occupation}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Company Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.companyName}
              {...register("mother.companyName")}
              // value={query.data?.mother?.companyName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 w-[105px] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Company Address
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.companyAddress}
              {...register("mother.companyAddress")}
              // value={query.data?.mother?.companyAddress}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Telephone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.telephone}
              {...register("mother.telephone")}
              // value={query.data?.mother?.telephone}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Phone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.phone}
              {...register("mother.phone")}
              // value={query.data?.mother?.phone}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Email
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.mother?.email}
              {...register("mother.email")}
              // value={query.data?.mother?.email}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span> */}
        <h1 className="text-sm font-bold">Guardian Information : </h1>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.lastName}
              {...register("guardian.lastName")}
              // value={query.data?.guardian?.lastName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              First Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.firstName}
              {...register("guardian.firstName")}
              // value={query.data?.guardian?.firstName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Middle Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.middleName}
              {...register("guardian.middleName")}
              // value={query.data?.guardian?.middleName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Occupation
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.occupation}
              {...register("guardian.occupation")}
              // value={query.data?.guardian?.occupation}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Relationship
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.relationship}
              {...register("guardian.relationship")}
              // value={query.data?.guardian?.relationship}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <span className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Company Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.companyName}
              {...register("guardian.companyName")}
              // value={query.data?.guardian?.companyName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 w-[105px] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Company Address
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.companyAddress}
              {...register("guardian.companyAddress")}
              // value={query.data?.guardian?.companyAddress}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Phone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.phone}
              {...register("guardian.phone")}
              // value={query.data?.guardian?.phone}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Email
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              defaultValue={query.data?.guardian?.email}
              {...register("guardian.email")}
              // value={query.data?.guardian?.email}
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
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Last Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.guardianSpouse?.lastName}
                  {...register("guardianSpouse.lastName")}
                  // value={query.data?.guardianSpouse.lastName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  First Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.guardianSpouse?.firstName}
                  {...register("guardianSpouse.firstName")}
                  // value={query.data?.guardianSpouse?.firstName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Middle Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
                  defaultValue={query.data?.guardianSpouse?.middleName}
                  {...register("guardianSpouse.middleName")}
                  // value={query.data?.guardianSpouse?.middleName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
            </span>
          </div>
        )}
        {/* {query.data?.siblings && (
          <h1 className="text-sm font-bold">Sibling Information : </h1>
        )} */}
        {/* {query.data?.siblings &&
          query.data?.siblings.map((sib: Sibling, index: number) => (
            <span key={index} className="grid grid-cols-3 gap-2">
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Full Name
                </p>
                <input
                  type="text"
                  readOnly
                  value={sib.fullName}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Age
                </p>
                <input
                  type="text"
                  readOnly
                  value={sib.age}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  School/Occupation
                </p>
                <input
                  type="text"
                  readOnly
                  value={sib.occupationSchool}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
            </span>
          ))} */}
      </div>
    </form>
  );
};

export default StudentsInfo;
