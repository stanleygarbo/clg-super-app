import { useEffect, useState } from "react";
import { getCourses } from "../../api/course";

function Schedule() {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const res = await getCourses();
            setCourses(res.results);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <main className="w-full border rounded-md overflow-hidden">
            <header className="flex justify-center items-center h-12 bg-blue-600">
                <p className="text-lg font-bold text-white">Schedule</p>
            </header>
            <div>
                <table></table>
            </div>
        </main>
    );
}

export default Schedule;
