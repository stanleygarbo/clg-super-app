import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { useState } from "react";
import { getGrades } from "../../../api/grade";
import { IGradesGet } from "../../../interface/IGrades";

const StudentGrades = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const query = useQuery<IStudentsGet>({
    queryKey: ["student", id],
    queryFn: () => getStudentById({ id }),
  });

  const grades = useQuery<IGradesGet>({
    queryKey: ["grades"],
    queryFn: getGrades,
  });

  console.log(grades?.data || "No data");

  return (
    <div className="my-10 w-[1100px]">
      <div className="flex flex-col gap-5">
        <section className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Semestral Grade</h1>
          <h1 className="font-semibold">
            {query.data?.semester === 1
              ? "st"
              : query.data?.semester === 2
              ? " nd"
              : ""}{" "}
            SEM.SY.
            {query.data?.schoolYear}
          </h1>
        </section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Hello World");
          }}
        >
          <section className="flex flex-col gap-3 font-bold items-start">
            <h1>USN: {query.data?.username}</h1>
            <h1>
              Name:{" "}
              {(
                query.data?.surname +
                "," +
                " " +
                query.data?.firstName +
                " " +
                query.data?.middleName
              ).toUpperCase()}
            </h1>
            <section className="flex justify-between w-full">
              <h1>
                Course: {query.data?.program.programAcronym}
                {" - "}
                {query.data?.standing === "freshman"
                  ? "1"
                  : query.data?.standing === "sophomore"
                  ? "2"
                  : query.data?.standing === "junior"
                  ? "3"
                  : "4"}
              </h1>
              <h1>
                <button
                  type="button"
                  className={`${
                    isEditing
                      ? "bg-red-700 hover:bg-red-800"
                      : "bg-blue-700 hover:bg-blue-800"
                  } mr-3  text-white px-4 rounded-lg py-2  active:scale-90 duration-200`}
                  onClick={() => {
                    setIsEditing(!isEditing);
                  }}
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                  type="submit"
                  className={`${
                    isEditing ? "" : "hidden"
                  } mr-3 bg-green-700 text-white px-4 rounded-lg py-2 hover:bg-green-800 active:scale-90 duration-200`}
                >
                  Save
                </button>
              </h1>
            </section>
          </section>
          <section className="flex flex-col gap-3 rounded-lg px-2 py-5">
            <span className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_2fr] text-lg font-semibold">
              <h1 className="text-center">Course Code</h1>
              <h1 className="text-center">Course Description</h1>
              <h1 className="text-center">Units</h1>
              <h1 className="text-center">Grade</h1>
              <h1 className="text-center">Remarks</h1>
              <h1 className="text-center">Instructor</h1>
            </span>
            <section className="flex flex-col gap-2">
              <span className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_2fr] items-center bg-slate-100 rounded-lg">
                <h1 className="text-center">ITE6202</h1>
                <h1 className="text-center">Social and Professional Issues</h1>
                <h1 className="text-center">3</h1>
                <input
                  type="number"
                  value={1.75}
                  className="w-full bg-inherit text-center outline-none py-2"
                />
                {/* <h1 className="text-center">1.75</h1> */}
                <h1 className="text-center">PASSED</h1>
                <h1 className="text-center">Dela Cruz</h1>
              </span>
              <span className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_2fr] items-center bg-slate-100 rounded-lg">
                <h1 className="text-center">ITE6202</h1>
                <h1 className="text-center">Social and Professional Issues</h1>
                <h1 className="text-center">3</h1>
                <input
                  type="number"
                  value={1.75}
                  className="w-full bg-inherit text-center outline-none py-2"
                />
                {/* <h1 className="text-center">1.75</h1> */}
                <h1 className="text-center">PASSED</h1>
                <h1 className="text-center">Dela Cruz</h1>
              </span>
            </section>
          </section>
        </form>
      </div>
    </div>
  );
};

export default StudentGrades;
