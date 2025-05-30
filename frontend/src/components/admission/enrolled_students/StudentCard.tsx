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
  checkedStudents: Record<string, boolean>;
  onToggle: (id: string) => void;
}

function StudentCard({ student, index, checkedStudents, onToggle }: Params) {
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
    <div>
      <span
        key={index}
        className={`${
          index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
        } md:flex hidden py-2 text-sm items-center pl-1 hover:bg-slate-300 group duration-200`}
      >
        <input
          type="checkbox"
          checked={checkedStudents[student._id] || false}
          onChange={() => onToggle(student._id)}
          className="mt-[2px]"
        />

        <h1 className="w-[150px] pl-3">{student.surname}</h1>
        <h1 className="w-[150px]">{student.firstName}</h1>
        <h1 className="w-[150px]">{student.middleName}</h1>
        <h1 className="w-[150px] text-center">{student.birth.sex}</h1>
        <h1 className="w-[150px] text-center">
          {student.program?.programAcronym}
        </h1>
        <h1 className="w-[150px] text-center">{student.standing}</h1>
        <h1 className="w-[200px] flex gap-2 text-lg justify-center opacity-50 group-hover:opacity-100">
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

      {/* Mobile View */}
      <div
        key={index}
        className={`${
          index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
        } md:hidden w-[330px] p-4 shadow-sm font-semibold`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold">
              {student.surname}, {student.firstName} {student.middleName}
            </h2>
            <p className="text-sm">
              <strong>Program : </strong> {student.program?.programAcronym}
            </p>
          </div>
          <input
            type="checkbox"
            checked={checkedStudents[student._id] || false}
            onChange={() => onToggle(student._id)}
          />
        </div>

        <div className="text-sm">
          <p>
            <strong>Gender :</strong> {student.birth.sex}
          </p>
          <p>
            <strong>Standing:</strong> {student.standing}
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-2">
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
            className="bg-red-500 px-3 py-2 rounded-md text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
          >
            <FaArchive />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
