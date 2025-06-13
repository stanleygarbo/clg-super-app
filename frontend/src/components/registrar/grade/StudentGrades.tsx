import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { useEffect, useState } from "react";
import { getSeats } from "../../../api/seat";
import { ISeatsGet } from "../../../interface/ISeats";
import { ISubjectSchedule } from "../../../interface/ISchedule";
import { getCourse } from "../../../api/course";
import { ICourseGet } from "../../../interface/ICourse";
import { getEmployeeById } from "../../../api/employee";
import { IEmployeeGet } from "../../../interface/IEmployee";
import { IGradesGet } from "../../../interface/IGrades";
import { getGrades } from "../../../api/grade";

const StudentGrades = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (!id) return;

  const query = useQuery<IStudentsGet>({
    queryKey: ["student", id],
    queryFn: () => getStudentById({ id }),
  });

  const grades = useQuery({
    queryKey: ["grades"],
    queryFn: getGrades,
  });

  const seats = useQuery({
    queryKey: ["seats"],
    queryFn: getSeats,
  });

  const getSeat: ISeatsGet = seats.data
    ?.filter((s: ISeatsGet) => s.student) // Only include seats with student
    .find((seat: ISeatsGet) => seat.student._id === id);

  const getGrade = grades.data?.filter(
    (grade: IGradesGet) => grade.seat?._id === getSeat?._id
  );

  // console.log(getGrade);

  // console.log(grades?.data || "No data");

  const CourseCode = ({ id }: { id: string }) => {
    const query = useQuery<ICourseGet>({
      queryKey: ["course", id],
      queryFn: () => getCourse({ id }),
    });

    return <h1>{query.data?.courseCode}</h1>;
  };

  const CourseName = ({ id }: { id: string }) => {
    const query = useQuery<ICourseGet>({
      queryKey: ["course", id],
      queryFn: () => getCourse({ id }),
    });

    return <h1>{query.data?.courseName}</h1>;
  };

  const CourseUnits = ({ id }: { id: string }) => {
    const query = useQuery<ICourseGet>({
      queryKey: ["course", id],
      queryFn: () => getCourse({ id }),
    });

    return <h1>{query.data?.units}</h1>;
  };

  const Intructor = ({ id }: { id: string }) => {
    const query = useQuery<IEmployeeGet>({
      queryKey: ["employee", id],
      queryFn: () => getEmployeeById({ id }),
    });

    return <h1>{query?.data?.surname}</h1>;
  };

  const Grades = ({ id }: { id: string }) => {
    const data: IGradesGet = getGrade.find(
      (gra: IGradesGet) => gra.course?._id === id
    );

    return <h1>{data?.finalGrade}</h1>;
  };

  const GradesValue = ({ id }: { id: string }) => {
    const data: IGradesGet = getGrade.find(
      (gra: IGradesGet) => gra.course?._id === id
    );

    return data?.finalGrade;
  };

  // console.log(Number(GradesValue({ id: "678625a887792f18812e1372" })) <= 4);

  useEffect(() => {
    if (id) {
      query.refetch();
    }
  }, [id, query.data]);

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
              {getSeat?.schedule?.subjectSchedules?.map(
                (sched: ISubjectSchedule, index: number) => (
                  <span
                    key={index}
                    className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_2fr] text-center items-center bg-slate-100 rounded-lg"
                  >
                    <CourseCode id={sched?.courseID} />
                    <CourseName id={sched?.courseID} />
                    <CourseUnits id={sched?.courseID} />
                    <Grades id={sched?.courseID} />
                    <h1>
                      {Number(GradesValue({ id: sched?.courseID })) <= 4
                        ? "PASSED"
                        : "FAIL"}
                    </h1>
                    <Intructor id={sched?.instructorID} />
                  </span>
                )
              )}
            </section>
          </section>
        </form>
      </div>
    </div>
  );
};

export default StudentGrades;
