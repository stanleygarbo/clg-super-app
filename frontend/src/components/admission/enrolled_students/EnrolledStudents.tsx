import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { IStudentsGet } from "../../../interface/IStudents";
import { FaArchive } from "react-icons/fa";
import { MdPageview } from "react-icons/md";
import { useState } from "react";

const EnrolledStudents = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  let { id } = useParams();

  const query = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  // const filteredStudents = query.data?.results?.length
  //   ? query.data.results.filter((stud: IStudentsGet) =>
  //       `${stud.surname} ${stud.firstName} ${stud.middleName}`
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     )
  //   : [];

  const filteredStudents = query.data?.results?.length
    ? query.data.results
        .filter((stud: IStudentsGet) =>
          `${stud.surname} ${stud.firstName} ${stud.middleName}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .sort((a: IStudentsGet, b: IStudentsGet) =>
          a.surname.localeCompare(b.surname)
        )
    : [];

  // console.log(query.data);

  // const getFullName = (student: any) => {
  //   return `${student.surname}, ${student.firstName} ${student.middleName}`;
  // };

  const archiveStudents = async () => {
    try {
      await apiClient.delete("/students/" + id);
      query.refetch();
      toast.success("Successfully archived student");
    } catch {
      toast.error("Failed to delete students");
    } finally {
    }
  };

  return (
    <div className="">
      <div className="w-[1100px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold opacity-0">Student's List</h1>
          <button
            onClick={() => {
              navigate("/admission/eform");
            }}
            className="bg-blue-600 px-3 py-2 text-white font-bold font-sans rounded-md hover:bg-blue-800 active:scale-95 duration-200"
          >
            Enroll Student
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-2 rounded-md flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-800">Student's List</h1>
          <input
            type="text"
            className="border-0 rounded-md py-2 px-5 outline-none"
            placeholder="Q Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </section>
        <section className="py-3">
          <span className="flex mb-3 text-lg">
            <h1 className="w-[150px] font-bold pl-3">Last Name</h1>
            <h1 className="w-[150px] font-bold">First Name</h1>
            <h1 className="w-[150px] font-bold">Middle Name</h1>
            <h1 className="w-[150px] font-bold text-center">Gender</h1>
            <h1 className="w-[150px] font-bold text-center">Course</h1>
            <h1 className="w-[150px] font-bold text-center">Standing</h1>
            <h1 className="w-[200px] font-bold text-center">Action</h1>
          </span>
          {filteredStudents.map((student: IStudentsGet, index: number) => (
            <span
              key={index}
              className={`${
                index == 0
                  ? "rounded-t-md"
                  : index == query.data?.results.length - 1
                  ? "rounded-b-md"
                  : ""
              } ${
                index % 2 == 0 ? "bg-slate-200" : "bg-slate-100"
              } flex py-2 text-sm items-center hover:bg-slate-300 group duration-200`}
            >
              <h1 className="w-[150px] pl-3">{student.surname}</h1>
              <h1 className="w-[150px]">{student.firstName}</h1>
              <h1 className="w-[150px]">{student.middleName}</h1>
              <h1 className="w-[150px] text-center">{student.birth.sex}</h1>
              <h1 className="w-[150px] text-center">
                {student.program?.programAcronym}
              </h1>
              <h1 className="w-[150px] text-center">{student.standing}</h1>
              <h1 className="w-[200px] flex gap-2 text-lg justify-center opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => {
                    id = student._id;
                    navigate(`/admission/studentInfo/${id}`);
                  }}
                  type="button"
                  className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold hover:bg-blue-800 active:scale-95 duration-200"
                >
                  <MdPageview />
                </button>
                <button
                  onClick={() => {
                    id = student._id;
                    archiveStudents();
                  }}
                  type="button"
                  className="bg-red-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
                >
                  <FaArchive />
                </button>
              </h1>
            </span>
          ))}
        </section>
      </div>
    </div>
  );
};

export default EnrolledStudents;
