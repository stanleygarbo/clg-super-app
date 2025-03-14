import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { IoListOutline } from "react-icons/io5";
import { IStudentsGet } from "../../../interface/IStudents";

const EnrolledStudents = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const query = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

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
      <div className="w-[1000px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student's List</h1>
          <button
            onClick={() => {
              navigate("/admission/eform");
            }}
            className="bg-blue-500 px-3 py-2 text-white font-bold font-sans rounded-md hover:bg-blue-700 active:scale-95 duration-200"
          >
            Enroll Student
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
          <span className="flex gap-3">
            <button
              className={`bg-blue-600 text-white flex items-center gap-1 px-2 py-2 rounded-md shadow border-t`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </button>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border border-slate-500 rounded-sm px-5"
              placeholder="Q Search..."
            />
          </span>
        </section>
        <section className="py-3">
          <span className="flex gap-5 mb-3">
            <h1 className="w-[130px] font-bold pl-3">Last Name</h1>
            <h1 className="w-[130px] font-bold pl-3">First Name</h1>
            <h1 className="w-[130px] font-bold pl-3">Middle I.</h1>
            <h1 className="w-[130px] font-bold">Course</h1>
            <h1 className="w-[130px] font-bold">Standing</h1>
            <h1 className="w-[230px] font-bold text-center">Action</h1>
          </span>
          {query.data?.results.map((student: IStudentsGet, index: number) => (
            <span
              key={index}
              className={`${
                index == 0 ? "rounded-t-md" : ""
              } flex gap-5 bg-slate-50 pl-3 py-[5px] text-sm items-center border-b-2 hover:bg-slate-100 duration-200 ${
                index == query.data?.results.length - 1 ? "rounded-b-md" : ""
              }`}
            >
              <h1 className="flex gap-2 items-center w-[130px] font-semibold">
                {student.surname}
              </h1>
              <h1 className="w-[130px] font-semibold">{student.firstName}</h1>
              <h1 className="w-[130px] font-semibold pl-5">
                {student.middleName[0]}.
              </h1>
              <h1 className="w-[120px] font-semibold ">
                {student.program?.programAcronym}
              </h1>
              <h1 className="w-[120px] font-semibold ">{student.standing}</h1>
              <h1 className="w-[230px] font-semibold flex gap-2 justify-center">
                <button
                  onClick={() => {
                    id = student._id;
                    navigate(`/admission/studentInfo/${id}`);
                  }}
                  type="button"
                  className="bg-green-500 px-3 py-2 rounded-md text-white font-semibold hover:bg-green-700 active:scale-95 duration-200"
                >
                  View
                </button>
                <button
                  onClick={() => {
                    id = student._id;
                    archiveStudents();
                  }}
                  type="button"
                  className="bg-red-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
                >
                  Delete
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
