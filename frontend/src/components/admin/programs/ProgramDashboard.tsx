import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import { programData } from "../../../store/ProgramData";
import apiClient from "../../../api/apiClient";
import AddProgram from "./AddProgram";
import ProgramList from "./ProgramList";

const ProgramDashboard = () => {
  const [isOpenProg, setIsOpenProg] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  //   ADD PROGRAM
  const handleSubmitProgram = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = {
        programName: programData.programName,
        programAcronym: programData.programAcronym,
        departmentId: programData.departmentId,
      };
      console.log("To be Added : ", data);
      await apiClient.post("/programs", data);
      setIsOpenProg(true);
      toast.success("Program added successfully!");
    } catch (err) {
      setError("Error adding Program");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[1000px] h-[600px] mt-10">
        <h1 className="bg-blue-600 font-bold text-2xl text-white py-5 text-center rounded-t-md">
          Programs
        </h1>
        <section className="shadow-md border relative h-[100%] overflow-hidden">
          <span className="flex items-center justify-evenly pt-10 pb-2 px-10">
            <button
              type="button"
              onClick={() => {
                isOpenProg ? setIsOpenProg(false) : setIsOpenProg(true);
              }}
              className="flex items-center gap-2 rounded-md px-2 bg-blue-600 shadow-sm shadow-blue-600/50 text-white text-lg py-1 hover:scale-105 active:scale-100 duration-200"
            >
              <MdOutlinePlaylistAdd />
              Program
            </button>
          </span>
          
          {/* ADD PROGRAM */}
          <form
            onSubmit={handleSubmitProgram}
            className={`${
              isOpenProg
                ? "opacity-0 w-0 left-0"
                : "w-[400px] opacity-100 left-1/2 z-50"
            } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border rounded-md duration-150 overflow-hidden p-5 flex flex-col justify-center`}
          >
            <h2 className="text-2xl font-semibold mb-4 flex justify-between">
              Add Position{" "}
              <button
                type="button"
                onClick={() => {
                  isOpenProg ? setIsOpenProg(false) : setIsOpenProg(true);
                }}
                className="mr-3 bg-red-600 py- px-3 text-lg text-white rounded-md shadow-md font-bold hover:scale-105 duration-200"
              >
                X
              </button>
            </h2>
            <AddProgram />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 mx-5 py-2 text-white font-bold rounded-md shadow-md hover:scale-105 active:scale-95 duration-200"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Program"}
            </button>
          </form>

          <span className="flex justify-evenly w-[100%] h-[100%] px-10">
            <ProgramList />
          </span>
        </section>
      </div>
    </div>
  );
};

export default ProgramDashboard;
