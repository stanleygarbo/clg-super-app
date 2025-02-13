import { useEffect, useState } from "react";
import { getCourses } from "../../api/course";

function Schedule() {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const res = await getCourses();
            console.log(res.results);
            setCourses(res.results);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="w-full h-min border rounded-md">
            <h1>Schedule</h1>
        </div>
    );
}

export default Schedule;
