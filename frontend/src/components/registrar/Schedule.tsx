import { useEffect, useState } from "react";
import { getCourses } from "../../api/course";
import { getSchedules } from "../../api/schedule";
import { ISchedule } from "../../interface/ISchedule";
import { ICourse } from "../../interface/ICourse";
import { IEmployeeGet } from "../../interface/IEmployee";
import { getEmployeees } from "../../api/employee";
import { useNavigate } from "react-router-dom";
import { IRoom } from "../../interface/IRoom";
import { getRooms } from "../../api/room";

function Schedule() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [employees, setEmployees] = useState<IEmployeeGet[]>([]);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      const sched = await getSchedules();
      const emp = await getEmployeees();
      const rms = await getRooms();

      setCourses(res.results);
      setSchedules(sched);
      setEmployees(emp);
      setRooms(rms);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleClick = () => {
    navigate("create");
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <main className="w-full">
      <header className="flex justify-between items-center h-12">
        <p className="text-2xl font-bold">Schedule</p>
        <button
          className="px-3 py-2 text-white font-semibold rounded-md bg-blue-600"
          onClick={handleClick}
        >
          Create schedule
        </button>
      </header>
      <div>
        <div className="bg-slate-100"></div>
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr className="grid grid-cols-scheduleCol">
              <th>Course Code</th>
              <th>Subject Title</th>
              <th>Time</th>
              <th>Days</th>
              <th>Room</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => {
              const subjectSchedules = schedule.subjectSchedules;
              const courseID = subjectSchedules[0].courseID;
              const course = courses.find((course) => course._id == courseID);
              const instructor = employees.find(
                (employee) => employee._id == subjectSchedules[0].instructorID
              );
              const room = rooms.find(
                (rm) => rm._id == subjectSchedules[0].room
              );

              return (
                <tr className="grid grid-cols-scheduleCol">
                  <td>{course?.courseCode}</td>
                  <td>{course?.courseName}</td>
                  <td>
                    {subjectSchedules[0].timeStart +
                      " / " +
                      subjectSchedules[0].timeEnd}
                  </td>
                  <td>{subjectSchedules[0].day.join(", ")}</td>
                  <td>{room ? room.building + room.room : ""}</td>
                  <td>{instructor?.firstName}</td>
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
