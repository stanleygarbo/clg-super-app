import { useEffect, useState } from "react";
import { studentData } from "../../store/StudentData";
import { useNavigate } from "react-router-dom";

function Grades() {
    const navigate = useNavigate();
    const [students, setStudents] = useState<(typeof studentData)[]>();
    const [tableRows, setTableRows] = useState<JSX.Element[]>();

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:8000/students");

            if (!response.ok) {
                throw new Error("Failed to fetch students");
            }

            const data = await response.json();
            setStudents(data?.map(({ id: {}, ...rest }) => rest.studentData));
        } catch (err) {
            console.log("Error fetching students");
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        const rows = students?.map((student, index) => {
            console.log(student);
            return (
                <tr
                    key={index}
                    className="grid grid-cols-grades place-items-center h-12 px-4 bg-slate-100 shadow-sm hover:cursor-pointer hover:bg-blue-100 duration-300"
                    onClick={() => navigate(`/registrar/grades/${student.usn}`)}
                >
                    <td className="w-full text-start">
                        {student.personalInfo.firstName}
                    </td>
                    <td>{student.course}</td>
                    <td>{student.year}</td>
                    <td>5.0</td>
                </tr>
            );
        });

        setTableRows(rows);
    }, [students]);

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
                <tbody className="flex flex-col gap-2">{tableRows}</tbody>
            </table>
        </div>
    );
}

export default Grades;
