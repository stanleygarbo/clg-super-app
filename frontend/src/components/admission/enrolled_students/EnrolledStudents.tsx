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
    <div className="my-10  mx-20">
      <table className="w-[1000px] h-[600px] p-10 border border-slate-400 flex flex-col rounded-md hover:border-red-500 shadow-md duration-200 overflow-hidden overflow-y-scroll no-scrollbar">
        <h1 className="text-center pb-5 text-xl font-bold">All Students</h1>
        <th className="grid grid-cols-3 text-lg font-bold gap-3 p-2 border-b mb-5 items-center w-[900px]">
          <td className="w-[500px] text-start">Name</td>
          <td className="w-[200px] text-center">Course</td>
          <td className="w-[200px text-center">Year</td>
        </th>
        {error && (
          <div className="flex justify-center items-center">
            Failed to fetch data
          </div>
        )}
        {loading && (
          <div className="flex justify-center items-center">Loading...</div>
        )}

        {students?.map((i, index) => (
          <Link to={`../../admin/admission/studentInfo/${i.id}`}>
            <tr
              key={index}
              className="duration-200 hover:cursor-pointer hover:border-l-2 hover:border-blue-500 font-semibold gap-3 text-sm grid grid-cols-3 p-2 border-l-4 rounded-l-lg border-b m-1 w-[900px]"
            >
              <td className="w-[500px] text-start">
                {i.studentData.lastName}, {i.studentData.firstName}{" "}
                {i.studentData.middleName}
              </td>
              <td className="w-[200px] text-center">{i.studentData.course}</td>
              <td className="w-[200px text-center">{i.studentData.year}</td>
            </tr>
          </Link>
        ))}
      </table>
    </div>
  );
};

export default EnrolledStudents;
