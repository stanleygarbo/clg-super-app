import { useEffect, useState } from "react";
import { studentData } from "../../../store/StudentData";
import { Link, useParams } from "react-router-dom";

const EnrolledStudents = () => {
  const [students, setStudents] = useState<(typeof datas)[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const datas = { id, studentData };

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:8000/students");
      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }
      setError("");

      const data: (typeof datas)[] = await response.json();
      setStudents(data);
      loading;
      console.log(students);
    } catch (err) {
      setError("Error fetching students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className="text-center py-5 text-2xl font-bold bg-blue-600 text-white border-t border-r border-l rounded-t-md shadow-sm">
          All Students
        </h1>
        <table className="w-[1100px] h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
          <thead>
            <tr className="grid grid-cols-4 text-lg font-bold gap-3 p-2 border-b mb-5 text-slate-800 border-slate-300 items-center w-[100%]">
              <th className="text-start">Name</th>
              <th className=" text-center w-[400px]">Email</th>
              <th className=" text-end">Course</th>
              <th className="text-center">Year</th>
            </tr>
          </thead>
          {error && (
            <div className="flex justify-center items-center">
              Failed to fetch data
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center">Loading...</div>
          )}
          <section className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
            {students?.map((i, index) => (
              <Link to={`/admission/studentInfo/${i.id}`}>
                <tr
                  key={index}
                  className="duration-200 hover:cursor-pointer font-semibold gap-3 text-sm grid grid-cols-4 px-2 py-4 bg-slate-50 shadow-sm border hover:bg-blue-600 hover:border-blue-600 hover:text-white active:scale-95"
                >
                  <td className="w-[400px] text-start">
                    {i.studentData.lastName}, {i.studentData.firstName}{" "}
                    {i.studentData.middleName}
                  </td>
                  <td className="text-center w-[400px]">
                    {i.studentData.email}
                  </td>
                  <td className="text-end pr-3">{i.studentData.course}</td>
                  <td className="text-center">{i.studentData.year}</td>
                </tr>
              </Link>
            ))}
          </section>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudents;
