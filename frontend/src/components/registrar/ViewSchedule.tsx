import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSchedule } from "../../api/schedule";
import { ISchedule } from "../../interface/ISchedule";
import { ICourse } from "../../interface/ICourse";
import { getCourses } from "../../api/course";
import { IRoom } from "../../interface/IRoom";
import { getRooms } from "../../api/room";
import { IEmployee } from "../../interface/IEmployee";
import { getEmployeees } from "../../api/employee";

function ViewSchedule() {
  const params = useParams();
  const [schedule, setSchedule] = useState<ISchedule>();
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [instructors, setInstructors] = useState<IEmployee[]>([]);

  const loadData = async (id: string) => {
    const schedule = await getSchedule(id);
    const course = await getCourses();
    const room = await getRooms();
    const employee = await getEmployeees();

    setSchedule(schedule);
    setCourses(course.results);
    setRooms(room);
    setInstructors(employee);
  };

  useEffect(() => {
    loadData(params.id || "");
  }, []);

  return (
    <div className="w-full">
      <header className="flex justify-between">
        <p>Schedule</p>
        <div className="flex gap-4">
          <p>{schedule?.schoolYear}</p>
          <p>{schedule?.semester} semester</p>
        </div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Units</th>
              <th>Time</th>
              <th>Days</th>
              <th>Room</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {schedule?.subjectSchedules.map((schedule) => {
              const course = courses.find((c) => c._id == schedule.courseID);
              const room = rooms.find((t) => t._id == schedule.room);
              const instructor = instructors.find(
                (i) => i._id == schedule.instructorID
              );

              return (
                <tr>
                  <th>{course?.courseCode}</th>
                  <th>{course?.courseName}</th>
                  <th>{course?.units}</th>
                  <th>{`${schedule.timeStart}-${schedule.timeEnd}`}</th>
                  <th>{schedule.day.join("/")}</th>
                  <th>{`${room?.building}${room?.room}`}</th>
                  <th>{`${instructor?.firstName} ${instructor?.surname}`}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ViewSchedule;
