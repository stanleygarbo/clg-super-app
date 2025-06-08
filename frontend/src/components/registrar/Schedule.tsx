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
    <div className="flex my-14 xl:my-10 px-4">
      {/* Main Content */}
      <main className="flex flex-col gap-8 w-full xl:mx-16 xl:my-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center h-auto">
          <p className="text-2xl font-bold">Schedules</p>
          <button
            className="px-4 py-2 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-800 duration-200"
            onClick={() => {
              navigate("/registrar/schedule/form");
            }}
          >
            Create Schedule
          </button>
        </header>

        {/* Table/Card Container */}
        <div className="w-full">
          {/* Desktop Table */}
          <table className="w-full border-collapse hidden md:table">
            <thead className="border-b-2">
              <tr className="grid grid-cols-scheduleDisplay px-4 py-2">
                <th className="text-left">Program</th>
                <th>Semester</th>
                <th>School Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {schedules.data?.map((schedule: ISchedule) => {
                const program = programs.data?.results.find(
                  (program: IProgram) => program._id === schedule.program
                );

                return (
                  <tr
                    key={schedule._id}
                    className="grid grid-cols-scheduleDisplay items-center px-4 py-2 bg-slate-50 even:bg-slate-100"
                  >
                    <td className="text-left">{program?.programName}</td>
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
                        onClick={() => deleteSched.mutate(schedule._id)}
                        className="px-3 py-2 rounded-md text-white bg-red-600 active:scale-90 duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col">
            {schedules.data?.map((schedule: ISchedule, index: number) => {
              const program = programs.data?.results.find(
                (program: IProgram) => program._id === schedule.program
              );

              return (
                <div
                  key={schedule._id}
                  className={`${
                    index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                  } flex flex-col gap-5 p-4`}
                >
                  <div className="flex justify-between gap-5">
                    <p className="text-sm font-semibold text-gray-500">
                      Program:
                    </p>
                    <p className="font-bold text-sm">{program?.programName}</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="text-sm font-semibold text-gray-500">
                      Semester:
                    </p>
                    <p className="font-semibold text-sm">{schedule.semester}</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="text-sm font-semibold text-gray-500">
                      School Year:
                    </p>
                    <p className="font-semibold text-sm">
                      {schedule.schoolYear}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      onClick={() => navigate(`${schedule._id}`)}
                      className="px-3 py-2 text-sm rounded-md text-white bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => deleteSched.mutate(schedule._id)}
                      className="px-3 py-2 text-sm rounded-md text-white bg-red-600 active:scale-90 duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Schedule;
