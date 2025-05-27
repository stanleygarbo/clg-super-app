import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// API
import { deleteSchedule, getSchedules } from "../../api/schedule";
import { getPrograms } from "../../api/programs";
// Interface
import { ISchedule } from "../../interface/ISchedule";
import { IProgram } from "../../interface/IProgram";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

function Schedule() {
  // const [programs, setPrograms] = useState<IProgram[]>([]);
  // const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const navigate = useNavigate();

  // const loadCourses = async () => {
  //   try {
  //     const program = await getPrograms();
  //     const schedule = await getSchedules();

  //     // setPrograms(program.results);
  //     // setSchedules(schedule);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  const schedules = useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
    refetchOnMount: true, // <--- THIS forces fresh data on navigation
  });

  const programs = useQuery({
    queryKey: ["program"],
    queryFn: getPrograms,
  });

  // const handleCreateClick = () => {
  //   navigate("form");
  // };

  const deleteSched = useMutation({
    mutationFn: deleteSchedule,
    onSuccess: () => {
      toast.success("Successfully Deleted");
      schedules.refetch();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // useEffect(() => {
  //   loadCourses();
  // }, []);

  return (
    <main className="flex flex-col gap-8 w-full mx-16 my-8">
      <header className="flex justify-between items-center h-12">
        <p className="text-2xl font-bold">Schedules</p>
        <button
          className="px-3 py-2 text-white font-semibold rounded-md bg-blue-600"
          onClick={() => {
            navigate("/registrar/schedule/form");
          }}
        >
          Create schedule
        </button>
      </header>
      <div>
        <div className="bg-slate-100"></div>
        <table className="w-full border-collapse">
          <thead className="border-b-2">
            <tr className="grid grid-cols-scheduleDisplay px-4 py-2 ">
              <th>Program</th>
              <th>Semester</th>
              <th>School Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {schedules.data?.map((schedule: ISchedule) => {
              const program = programs.data?.results.find(
                (program: IProgram) => program._id == schedule.program
              );

              return (
                <tr className="grid grid-cols-scheduleDisplay items-center px-4 py-2 bg-slate-50 even:bg-slate-100">
                  <td>{program?.programName}</td>
                  <td className="text-center">{schedule.semester}</td>
                  <td className="text-center">{schedule.schoolYear}</td>
                  <td className="flex justify-end gap-2">
                    <button
                      onClick={() => navigate(`${schedule._id}`)}
                      className="px-3 py-2 rounded-md text-white bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        deleteSched.mutate(schedule._id);
                      }}
                      className="px-3 py-2 rounded-md text-white bg-red-600 active:scale-90 duration-200"
                    >
                      Delete
                    </button>
                    {/* <button
                      onClick={() => navigate(`form/${schedule._id}`)}
                      className="px-4 py-2 rounded-md text-white bg-green-600"
                    >
                      Edit
                    </button> */}
                  </td>
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
