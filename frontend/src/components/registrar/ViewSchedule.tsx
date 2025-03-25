import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSchedule } from "../../api/schedule";
import { ISchedule } from "../../interface/ISchedule";
import { ICourseGet } from "../../interface/ICourse";
import { getCourses } from "../../api/course";
import { IRoomGet } from "../../interface/IRoom";
import { getRooms } from "../../api/room";
import { IEmployeeGet } from "../../interface/IEmployee";
import { getEmployees } from "../../api/employee";
import { capitalizeFirstLetter, convertMilitaryTo12Hour } from "../../Helper";
import { useQuery } from "@tanstack/react-query";

function ViewSchedule() {
  const { id } = useParams();
  const [schedule, setSchedule] = useState<ISchedule>();

  const loadData = async (id: string) => {
    const schedule = await getSchedule(id);

    setSchedule(schedule);
  };

  const instructors = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const rooms = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const courses = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  useEffect(() => {
    loadData(id || "");
  }, []);

  return (
    <main className="flex flex-col gap-8 w-full mx-16 my-8">
      <header className="flex justify-between">
        <p className="text-2xl font-bold">Schedule</p>
        <div className="flex gap-4 text-lg font-semibold">
          <p>{schedule?.schoolYear}</p>
          <p>{schedule?.semester} semester</p>
        </div>
      </header>
      <main>
        <table className="w-full border-collapse">
          <thead>
            <tr className="grid grid-cols-scheduleView w-full  py-2 border-b-2">
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Units</th>
              <th>Time</th>
              <th>Days</th>
              <th>Room</th>
              <th className="pr-2">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {schedule?.subjectSchedules.map((schedule) => {
              const course = courses.data?.results.find(
                (c: ICourseGet) => c._id == schedule.courseID
              );
              const room = rooms.data?.find(
                (t: IRoomGet) => t._id == schedule.room
              );
              const instructor = instructors.data?.results?.find(
                (i: IEmployeeGet) => i._id == schedule.instructorID
              );
              const formattedDay = schedule.day.map((day) =>
                capitalizeFirstLetter(day)
              );

              return (
                <tr className="grid grid-cols-scheduleView w-full px-4 py-2 even:bg-slate-100">
                  <td>{course?.courseCode}</td>
                  <td className="text-center">{course?.courseName}</td>
                  <td className="text-center">{course?.units}</td>
                  <td className="text-center">{`${convertMilitaryTo12Hour(
                    schedule.timeStart
                  )} - ${convertMilitaryTo12Hour(schedule.timeEnd)}`}</td>
                  <td className="text-center">{formattedDay.join(" / ")}</td>
                  <td className="text-center">{`${room?.building}${room?.room}`}</td>
                  <td className="text-center">{`${instructor?.surname} ${instructor?.firstName[0]}. `}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </main>
  );
}

export default ViewSchedule;
