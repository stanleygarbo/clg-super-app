import { useEffect, useState } from "react";
import { getCourses } from "../../api/course";
import { getSchedules } from "../../api/schedule";

function Schedule() {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const res = await getCourses();
            setCourses(res.results);
            // const sched = await getSchedules();
            // console.log(sched);
        } catch (error) {
            console.log("Error:", error);
        }

        // fetch("http://localhost:5173/api/schedules/")
        //     .then((res) => {
        //         console.log(res.json());
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };

    const postNew = async () => {
        fetch("http://localhost:5173/api/schedules/", {
            method: "POST",
            body: JSON.stringify({
                schoolYear: "2024-2025",
                semester: "1st",
                subjectSchedules: [
                    {
                        courseID: "678625a887792f18812e1372",
                        timeStart: "08:00",
                        timeEnd: "09:00",
                        day: ["mon", "fri"],
                        room: "A301",
                        instructorID: "67ac0f63b1c33b64568215f2",
                    },
                ],
            }),
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <main className="w-full border rounded-md overflow-hidden">
            <header className="flex justify-center items-center h-12 bg-blue-600">
                <p className="text-lg font-bold text-white">Schedule</p>
            </header>
            <div className="p-4">
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
                    <tbody>{/* {WIP} */}</tbody>
                </table>
            </div>
            <button onClick={postNew}>Test</button>
        </main>
    );
}

export default Schedule;
