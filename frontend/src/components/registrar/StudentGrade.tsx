import { useEffect, useState } from "react";
import { studentData } from "../../store/StudentData";
import { useParams } from "react-router-dom";

function StudentGrade() {
    const { usn } = useParams();
    const [student, setStudent] = useState<typeof studentData>();
    const [gradesRow, setGradesRow] = useState<JSX.Element[]>([]);
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

    const fetchCourse = async (courseUID: string) => {
        const res = await fetch(`http://localhost:8000/courses/${courseUID}`);
        const data = await res.json();
        return data.course || {};
    };

    const renderGrades = async () => {
        student?.grades.map(async (grade) => {
            const course = await fetchCourse(grade.courseUID);
            console.log(course);

            const newRow = (
                <tr
                    className="grid grid-cols-grades place-items-center"
                    key={course.courseCode}
                >
                    <td className="w-full text-start">{course.courseCode}</td>
                    <td>{course.courseName}</td>
                    <td>{grade.grade}</td>
                    <td>{grade.remark}</td>
                </tr>
            );
            setGradesRow([...gradesRow, newRow]);
        });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        if (student) {
            setFullName(
                `${student.personalInfo.lastName}, ${student.personalInfo.firstName} ${student.personalInfo.middleName}`
            );
            renderGrades();
        }
    }, [student]);

    return (
        <div className="w-full max-w-[1280px]">
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
                    {gradesRow && gradesRow}
                </tbody>
            </table>
        </div>
    );
}

export default StudentGrade;
