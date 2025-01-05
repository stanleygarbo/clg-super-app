import { useEffect, useState } from "react";
import { studentData } from "../../store/StudentData";
import { useParams } from "react-router-dom";

function StudentGrade() {
    const { id } = useParams();
    const data = { id, studentData };
    const [student, setStudent] = useState<(typeof data)[]>();
    const [fullName, setFullName] = useState<string>();

    const fetchStudents = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/students/${id}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch student");
            }

            const data = await response.json();
            setStudent(data);
        } catch (err) {
            console.log("Error fetching students");
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        if (student) {
            setFullName(
                `${student.studentData.lastName}, ${student.studentData.firstName} ${student.studentData.middleName}`
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
                    <p>{student && student.studentData.usn}</p>
                    <p>{student && fullName}</p>
                    <p>{student && student.studentData.course}</p>
                </div>
            </div>
            <table></table>
        </div>
    );
}

export default StudentGrade;
