import { IStudentsGet } from "../../../interface/IStudents";
import { useNavigate } from "react-router-dom";
import { MdPageview } from "react-icons/md";
import apiClient from "../../../api/apiClient";
import { getStudents } from "../../../api/student";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FaArchive } from "react-icons/fa";

interface Params {
  student: IStudentsGet;
  index: number;
}

function StudentCard({ student, index }: Params) {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const archiveStudents = async (id: string) => {
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
          onClick={() => navigate(`/admission/studentInfo/${student._id}`)}
          type="button"
          className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold hover:bg-blue-800 active:scale-95 duration-200"
        >
          <MdPageview />
        </button>
        <button
          onClick={() => archiveStudents(student._id)}
          type="button"
          className="bg-red-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
        >
          <FaArchive />
        </button>
      </h1>
    </span>
  );
}

export default StudentCard;
