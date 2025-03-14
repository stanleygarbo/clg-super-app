import { useEffect, useState } from "react";
import { getSchedules } from "../../api/schedule";
import { ISchedule } from "../../interface/ISchedule";
import { useNavigate } from "react-router-dom";
import { IProgram } from "../../interface/IProgram";
import { getPrograms } from "../../api/programs";

function Schedule() {
  const [programs, setPrograms] = useState<IProgram[]>([]);
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const navigate = useNavigate();

  const loadCourses = async () => {
    try {
      const program = await getPrograms();
      const schedule = await getSchedules();

      setPrograms(program.results);
      setSchedules(schedule);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleCreateClick = () => {
    navigate("create");
  };

  const handleViewClick = (id: string) => {
    navigate(`${id}`);
    console.log("click");
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <main className="flex flex-col gap-8 w-full">
      <header className="flex justify-between items-center h-12">
        <p className="text-2xl font-bold">Schedules</p>
        <button
          className="px-3 py-2 text-white font-semibold rounded-md bg-blue-600"
          onClick={handleCreateClick}
        >
          Create schedule
        </button>
      </header>
      <div>
        <div className="bg-slate-100"></div>
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr className="grid grid-cols-3">
              <th>Program</th>
              <th>Semester</th>
              <th>School Year</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => {
              const program = programs.find(
                (program) => program._id == schedule.program
              );

              return (
                <tr
                  className="grid grid-cols-3"
                  onClick={() => handleViewClick(schedule._id)}
                >
                  <td>{program?.programName}</td>
                  <td>{schedule.semester}</td>
                  <td>{schedule.schoolYear}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Schedule;
