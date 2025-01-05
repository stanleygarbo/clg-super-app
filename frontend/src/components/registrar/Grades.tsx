import { useEffect, useState } from "react";
import { studentData } from "../../store/StudentData";
import { Link } from "react-router-dom";

function Grades() {
    const data = { studentData };
    const [students, setStudents] = useState<(typeof data)[]>();

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:8000/students");

            if (!response.ok) {
                throw new Error("Failed to fetch students");
            }

            const data = await response.json();
            setStudents(await data);
        } catch (err) {
            console.log("Error fetching students");
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="w-full h-full">
            <table className="flex flex-col gap-4 w-full px-6 py-8 border rounded-b-md shadow-md">
                <thead className="border-b border-blue-300">
                    <tr className="grid grid-cols-grades px-4">
                        <th className="text-start">Name</th>
                        <th>Course</th>
                        <th>Year</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-2">
                    {students?.map((student, index) => (
                        <Link
                            to={`/admission/studentInfo/${student.studentData.id}`}
                        >
                            <tr
                                key={index}
                                className="grid grid-cols-grades place-items-center h-12 px-4 bg-slate-100 shadow-sm hover:cursor-pointer hover:bg-blue-100 duration-300"
                            >
                                <td className="w-full text-start">
                                    {student.studentData.firstName}
                                </td>
                                <td>{student.studentData.course}</td>
                                <td>{student.studentData.year}</td>
                                <td>5.0</td>
                            </tr>
                        </Link>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Grades;
