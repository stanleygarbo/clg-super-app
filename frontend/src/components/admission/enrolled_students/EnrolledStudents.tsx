import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { studentData } from "../../../store/StudentData";

const EnrolledStudents = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const query = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  console.log(query.data);

  const getFullName = (student: any) => {
    return `${student.surname}, ${student.firstName} ${student.middleName}`;
  };

  const archiveStudents = async () => {
    try {
      await apiClient.delete("/students/" + id);
      toast.success("Successfully archived student");
    } catch {
      toast.error("Failed to delete students");
    } finally {
    }
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-center py-5 text-2xl font-bold bg-blue-600 text-white border-t border-r border-l rounded-t-md shadow-sm">
          All Students
        </h1>
        <table className="w-full h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
          <thead className="grid grid-cols-4 text-lg font-bold gap-3 p-2 border-b mb-5 text-slate-800 border-slate-300 items-center w-[100%]">
            <td className="w-[500px] text-start">Name</td>
            <td className="w-[200px] text-center">Course</td>
            <td className="w-[200px text-center">Standing</td>
            <td className="w-[200px text-center">
              <button
                onClick={() => {
                  navigate("/admission/eform");
                }}
                className="text-white bg-blue-600 p-2 rounded-md shadow-sm shadow-blue-500/50 hover:scale-105 active:scale-95 duration-200"
              >
                Enroll Student
              </button>
            </td>
          </thead>
          {query.isError && (
            <div className="flex justify-center items-center">
              Failed to fetch data
            </div>
          )}
          {query.isPending && (
            <div className="flex justify-center items-center">Loading...</div>
          )}
          <tbody className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
            {query.data?.results.map((student: any, index: number) => (
              <tr
                key={index}
                className="duration-200 hover:cursor-pointer font-semibold gap-3 text-sm grid grid-cols-4 px-2 items-center py-2 rounded-sm group bg-slate-50 shadow-sm border hover:bg-slate-200 hover:border-slate-200"
              >
                <td className="w-[500px] text-start">{getFullName(student)}</td>
                <td className="w-[200px] text-center">
                  {student.program?.programAcronym}
                </td>
                <td className="w-[200px text-center">{student.standing}</td>
                <td className="flex gap-3 justify-center">
                  <button
                    onClick={() => {
                      id = student._id;
                      console.log(id);
                      archiveStudents();
                    }}
                    type="button"
                    className="bg-red-600 text-white opacity-0 group-hover:opacity-100 p-2 font-bold rounded-md shadow-sm shadow-blue-red/50 active:scale-95 hover:scale-105 duration-200"
                  >
                    Archive
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/admission/studentInfo/${student._id}`);
                      id = student._id;
                      console.log(id);
                      // archiveStudents();
                    }}
                    type="button"
                    className="bg-blue-600 text-white opacity-0 group-hover:opacity-100 p-2 font-bold rounded-md shadow-sm shadow-blue-600/50 active:scale-95 hover:scale-105 duration-200"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudents;
