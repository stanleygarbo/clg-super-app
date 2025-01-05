import { useEffect, useState } from "react";
import { studentData } from "../../store/StudentData";
import { useParams } from "react-router-dom";

function StudentGrade() {
    const { usn } = useParams();
    const [student, setStudent] = useState<typeof studentData>();
    const [fullName, setFullName] = useState<string>();

    const fetchStudents = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/students/${usn}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch student");
            }

            const data = await response.json();
            setStudent(data.studentData);
        } catch (err) {
            console.log("Error fetching students");
        }
    };

    const renderGrades = () => {
        console.log(student?.grades);
        return student?.grades.map((grade) => (
            <tr
                className="grid grid-cols-grades place-items-center"
                key={grade.course.courseCode}
            >
                <td className="w-full text-start">{grade.course.courseCode}</td>
                <td>{grade.course.course}</td>
                <td>{grade.grade}</td>
                <td>{grade.remark}</td>
            </tr>
        ));
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        if (student) {
            setFullName(
                `${student.personalInfo.lastName}, ${student.personalInfo.firstName} ${student.personalInfo.middleName}`
            );
        }
    }, [student]);

    return (
        <div>
            <div className="grid grid-cols-[6rem,1fr]">
                <div>
                    <p>USN</p>
                    <p>Name</p>
                    <p>Course</p>
                </div>
                <div>
                    <p>{student && student.usn}</p>
                    <p>{student && fullName}</p>
                    <p>{student && student.course}</p>
                </div>
            </div>
            <table className="flex flex-col gap-4 w-full px-6 py-8 border rounded-b-md shadow-md">
                <thead>
                    <tr className="grid grid-cols-grades px-4">
                        <th>Course Code</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-2">
                    {student && renderGrades()}
                </tbody>
            </table>
        </div>
    );
}

export default StudentGrade;
