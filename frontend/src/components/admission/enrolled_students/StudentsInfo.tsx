import { useParams } from "react-router-dom";
// import { useState } from "react";
import { getStudentById } from "../../../api/student";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { ISibling } from "../../../store/SiblingData";
import { IProgram } from "../../../store/ProgramData";
import { studentGetData } from "../../../store/StudentData";

const StudentsInfo = () => {
  const { id } = useParams();
  // const [student, setStudent] = useState<any>();

  if (!id) return;

  const query = useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudentById({ id }),
    enabled: !!id,
    // onSuccess: (data) => {

    // },
  });

  // Mao nani ang pag set sa data, pero mag conflict ang interface ug ang sa backend``

  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [type, setType] = useState<"button" | "submit" | "reset" | undefined>(
    "button"
  );
  // const [select, setSelect] = useState<"on" | "off" | undefined>("off");
  const [loading, setLoading] = useState(true);
  const snapStudent = useSnapshot(studentGetData);
  const [sibling, setSibling] = useState<ISibling[]>([]);
  const [programs, setPrograms] = useState<IProgram[]>([]);

  const updateStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const updatedStudent = {
        username: snapStudent?.username,
        firstName: snapStudent?.firstName,
        surname: snapStudent?.surname,
        middleName: snapStudent?.middleName,
        email: snapStudent?.email,
        telephone: snapStudent?.telephone,
        phone: snapStudent?.phone,
        program: snapStudent.program,
        birth: {
          birthDate: snapStudent?.birth?.birthDate,
          birthPlace: snapStudent?.birth?.birthPlace,
          citizenship: snapStudent?.birth?.citizenship,
          sex: snapStudent?.birth?.sex,
          religion: snapStudent?.birth?.religion,
        },
        homeAddress: {
          houseNum: snapStudent?.homeAddress.houseNum,
          streetBrgy: snapStudent?.homeAddress.streetBrgy,
          city: snapStudent?.homeAddress.city,
          district: snapStudent?.homeAddress.district,
          province: snapStudent?.homeAddress.province,
        },
      };

      await apiClient.patch("/students/" + id, updatedStudent);
      toast.success("Successfully updated student");
    } catch {
      toast.error("Error in updating student");
    } finally {
      isUpdate ? setLoading(false) : setLoading(true);
      setIsUpdate(true);
    }
  };

  const fetchPrograms = async () => {
    try {
      const response = await apiClient.get("/programs");
      setPrograms(response.data.results);
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    if (query.data) {
      studentGetData.surname = query.data.surname;
      studentGetData.firstName = query.data.firstName;
      studentGetData.middleName = query.data.middleName;
      studentGetData.username = query.data.username;
      studentGetData.telephone = query.data.telephone;
      studentGetData.phone = query.data.phone;
      studentGetData.email = query.data.email;
      studentGetData.birth = query.data.birth;
      studentGetData.program = query.data.program;

      setSibling(query.data.siblings);
    }

    // console.log(studentGetData.program.)
    fetchPrograms();
  }, [query.data]);

  return (
    <form
      onSubmit={updateStudent}
      className="mb-10 mt-5 flex flex-col border rounded-lg w-[1100px] shadow-md gap-5"
    >
      <h1 className="text-xl font-bold mb-10 rounded-t-lg border-b text-center bg-slate-50 py-5">
        Information
      </h1>
      <div className="flex flex-col gap-5 px-10 pb-10">
        <section className="flex gap-3 justify-end">
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
            type={type}
            onClick={() => {
              isUpdate ? setType("button") : setType("submit");
              isUpdate ? setLoading(false) : setLoading(true);
              setIsUpdate(false);
            }}
            // disabled={isUpdate}
            className={`${
              isUpdate
                ? "bg-blue-600 shadow-blue-500/50"
                : "bg-green-600 shadow-green-500/50"
            } p-1 px-4 text-white font-bold text-xl rounded-md shadow-sm  hover:scale-105 active:scale-95 duration-200`}
          >
            {isUpdate ? (
              "Edit"
            ) : loading ? (
              <img src="/loading.svg" className="invert px-5" alt="" />
            ) : (
              "Update"
            )}
          </button>
        </section>
        <section className="flex justify-between">
          <h1 className="text-md font-bold text-red-500">
            Student Information :{" "}
          </h1>
        </section>

        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              onChange={(e) => {
                studentGetData.surname = e.target.value;
              }}
              type="text"
              readOnly={isUpdate}
              value={snapStudent.surname}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              First Name
            </p>
            <input
              onChange={(e) => {
                studentGetData.firstName = e.target.value;
              }}
              type="text"
              readOnly={isUpdate}
              value={snapStudent.firstName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Middle Name
            </p>
            <input
              onChange={(e) => {
                studentGetData.middleName = e.target.value;
              }}
              value={snapStudent.middleName}
              type="text"
              readOnly={isUpdate}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Program
            </p>
            <select
              disabled={isUpdate}
              onChange={(e) => {
                studentGetData.program = e.target.value;
              }}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            >
              {/* <option value={snapStudent.program?._id}>
                {snapStudent.program?.programAcronym}
              </option> */}
              {programs.map((prog, index) => (
                <option
                  selected={prog.programAcronym === snapStudent.program}
                  key={index}
                  value={prog._id}
                >
                  {prog.programAcronym}
                </option>
              ))}
            </select>
            {/* <input
              type="text"
              readOnly
              value={query.data?.program}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            /> */}
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Standing
            </p>
            <select
              disabled={isUpdate}
              onChange={(e) => {
                studentGetData.standing = e.target.value;
              }}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            >
              {["freshman", "sophomore", "junior", "senoir", "graduate"].map(
                (standing, index) => {
                  return (
                    <option
                      selected={standing === snapStudent.standing}
                      key={index}
                      value={standing}
                    >
                      {standing}
                    </option>
                  );
                }
              )}
            </select>
            {/* <input
              readOnly
              type="text"
              value={query.data?.standing}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            /> */}
          </section>
        </span>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              School Year
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              onChange={(e) => {
                studentGetData.schoolYear = e.target.value;
              }}
              value={snapStudent.schoolYear}
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
              onChange={(e) => {
                studentGetData.username = e.target.value;
              }}
              value={snapStudent.username}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Telelphone No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              onChange={(e) => {
                studentGetData.telephone = e.target.value;
              }}
              value={snapStudent.telephone}
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
              onChange={(e) => {
                studentGetData.phone = e.target.value;
              }}
              value={snapStudent.phone}
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
              onChange={(e) => {
                studentGetData.email = e.target.value;
              }}
              value={snapStudent.email}
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
              onChange={(e) => {
                studentGetData.birth.birthDate = e.target.value;
              }}
              value={snapStudent.birth.birthDate}
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
              onChange={(e) => {
                studentGetData.birth.birthPlace = e.target.value;
              }}
              value={snapStudent.birth.birthPlace}
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
              onChange={(e) => {
                studentGetData.birth.citizenship = e.target.value;
              }}
              value={snapStudent.birth.citizenship}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
          <section className={`relative rounded-lg`}>
            <p className="text-xs font-bold absolute text-slate-600 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Sex
            </p>
            <select
              disabled={isUpdate}
              onChange={(e) => {
                studentGetData.birth.sex = e.target.value;
              }}
              value={snapStudent.birth.sex}
              className={`border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1`}
            >
              <option value={snapStudent.birth.sex}>
                {snapStudent.birth.sex}
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {/* <input
              type="text"
              readOnly={isUpdate}
              onChange={(e) => {
                studentGetData.birth.sex = e.target.value;
              }}
              value={snapStudent.birth.sex}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            /> */}
          </section>
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Religion
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              onChange={(e) => {
                studentGetData.birth.religion = e.target.value;
              }}
              value={snapStudent.birth.religion}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-sm font-bold text-red-500">
          Student Spouse Information :{" "}
        </h1>
        <span className="grid grid-cols-4 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              value={query.data?.spouse?.lastName}
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
              value={query.data?.spouse?.firstName}
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
              value={query.data?.spouse?.middleName}
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
              value={query.data?.spouse?.numChildren || "0"}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-md font-bold text-red-500">Home Address : </h1>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              House No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              value={query.data?.homeAddress?.houseNum}
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
              value={query.data?.homeAddress?.street}
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
              value={query.data?.homeAddress?.city}
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
              value={query.data?.homeAddress?.province}
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
              value={query.data?.homeAddress?.district}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-md font-bold text-red-500">
          Address ( if Boarding ) :{" "}
        </h1>
        <span className="grid grid-cols-4 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              House No.
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              value={query.data?.boardAddress?.houseNum}
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
              value={query.data?.boardAddress?.street}
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
              value={query.data?.boardAddress?.city}
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
              value={query.data?.boardAddress?.city}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-md font-bold text-red-500">
          Father Information :{" "}
        </h1>
        <span className="grid grid-cols-4 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              value={query.data?.father?.lastName}
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
              value={query.data?.father?.firstName}
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
              value={query.data?.father?.middleName}
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
              value={query.data?.father?.occupation}
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
              value={query.data?.father?.companyName}
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
              value={query.data?.father?.companyAddress}
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
              value={query.data?.father?.telephone}
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
              value={query.data?.father?.phone}
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
              value={query.data?.father?.email}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-md font-bold text-red-500">
          Mother Information :{" "}
        </h1>
        <span className="grid grid-cols-4 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              value={query.data?.mother?.lastName}
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
              value={query.data?.mother?.firstName}
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
              value={query.data?.mother?.middleName}
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
              value={query.data?.mother?.occupation}
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
              value={query.data?.mother?.companyName}
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
              value={query.data?.mother?.companyAddress}
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
              value={query.data?.mother?.telephone}
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
              value={query.data?.mother?.phone}
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
              value={query.data?.mother?.email}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-md font-bold text-red-500">
          Guardian Information :{" "}
        </h1>
        <span className="grid grid-cols-5 gap-2">
          <section className="relative rounded-lg">
            <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
              Last Name
            </p>
            <input
              type="text"
              readOnly={isUpdate}
              value={query.data?.guardian?.lastName}
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
              value={query.data?.guardian?.firstName}
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
              value={query.data?.guardian?.middleName}
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
              value={query.data?.guardian?.occupation}
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
              value={query.data?.guardian?.relationship}
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
              value={query.data?.guardian?.company}
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
              value={query.data?.guardian?.companyAddress}
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
              value={query.data?.guardian?.contact?.telnum}
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
              value={query.data?.guardian?.contact?.phoneNum}
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
              value={query.data?.guardian?.contact?.email}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-sm font-bold text-red-500">
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
              value={query.data?.guardian?.spouse?.lastName}
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
              value={query.data?.guardian?.spouse?.firstName}
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
              value={query.data?.guardian?.spouse?.middleName}
              className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
            />
          </section>
        </span>
        <h1 className="text-md font-bold text-red-500">
          Sibling Information :{" "}
        </h1>
        {snapStudent.siblings.length > 0 ? (
          sibling.map((sib, index) => (
            <span key={index} className="grid grid-cols-3 gap-2">
              <section className="relative rounded-lg">
                <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Full Name
                </p>
                <input
                  type="text"
                  readOnly={isUpdate}
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
                  readOnly={isUpdate}
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
                  readOnly={isUpdate}
                  value={sib.occupationSchool}
                  className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                />
              </section>
            </span>
          ))
        ) : (
          <span className="grid grid-cols-3 gap-2">
            <section className="relative rounded-lg">
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Full Name
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                value={query.data?.siblings?.name}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className="relative rounded-lg">
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                Age
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                value={query.data?.siblings[0]?.age}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
            <section className="relative rounded-lg">
              <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                School/Occupation
              </p>
              <input
                type="text"
                readOnly={isUpdate}
                value={query.data?.siblings[0]?.occupation}
                className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
              />
            </section>
          </span>
        )}
      </div>
    </form>
  );
};

export default StudentsInfo;
