import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import apiClient from "../../../api/apiClient";

type progData = {
  _id: string;
  programName: string;
  programAcronym: string;
  departmentId: object;
};

const ProgramList = () => {
  const [programs, setPrograms] = useState<progData[]>([]);
  let id: string;

  const fetchPrograms = async () => {
    try {
      const response = await apiClient.get("/programs");
      setPrograms(response.data.results);
      console.log("Program :: ", programs);
    } catch (err) {
    } finally {
    }
  };

  const deleteProgram = async () => {
    try {
      console.log(id);
      await apiClient.delete("/programs/" + id);
      toast.success("Successly deleted");
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className="flex flex-col gap-3 pt-2 pb-10 rounded-b-md h-[90%] overflow-scroll no-scrollbar">
      <h1 className="text-center font-bold text-xl">Programs :</h1>
      {programs.map((prog) => (
        <section
          key={prog._id}
          className="relative group bg-slate-400 p-2 text-white font-semibold flex justify-center items-center rounded-md shadow-sm shadow-slate-300/50 duration-200"
        >
          <h1 className="flex flex-wrap w-[200px]">
            {prog.programName} ({prog.programAcronym})
          </h1>
          <button
            type="button"
            onClick={() => {
              id = prog._id;
              deleteProgram();
            }}
            className="absolute top-0 right-0 mt-1 mr-1 opacity-0 text-red-600 text-sm p-[3px] shadow-md rounded-md bg-white group-hover:opacity-100 hover:scale-110 duration-200"
          >
            <MdDelete />
          </button>
        </section>
      ))}
    </div>
  );
};

export default ProgramList;
