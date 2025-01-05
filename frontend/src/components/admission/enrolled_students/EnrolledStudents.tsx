import { useEffect, useState } from "react";
import { studentData } from "../../../store/StudentData";
import { Link, useParams } from "react-router-dom";

const EnrolledStudents = () => {
    const [students, setStudents] = useState<(typeof studentData)[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();
    const datas = { id, studentData };

    const fetchStudents = async () => {
        try {
            const response = await fetch("http://localhost:8000/students");
            if (!response.ok) {
                throw new Error("Failed to fetch students");
            }
            setError("");

            const data: (typeof datas)[] = await response.json();
            setStudents(
                data?.map(({ id: string, ...rest }) => rest.studentData)
            );
            loading;
            console.log(students);
        } catch (err) {
            setError("Error fetching students");
        } finally {
            setLoading(false);
        }
    };

    const getFullName = (student: typeof studentData) =>
        `${student.personalInfo.lastName}, ${student.personalInfo.firstName} ${student.personalInfo.middleName}`;

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        console.log(students);
    }, [students]);

    return (
        <div className="">
            <div className="">
                <h1 className="text-center py-5 text-2xl font-bold bg-slate-50 border-t border-r border-l rounded-t-md shadow-sm">
                    All Students
                </h1>
                <table className="w-full h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
                    <th className="grid grid-cols-3 text-lg font-bold gap-3 p-2 border-b mb-5 text-blue-800 border-blue-300 items-center w-[100%]">
                        <td className="w-[500px] text-start">Name</td>
                        <td className="w-[200px] text-center">Course</td>
                        <td className="w-[200px text-center">Year</td>
                    </th>
                    {error && (
                        <div className="flex justify-center items-center">
                            Failed to fetch data
                        </div>
                    )}
                    {loading && (
                        <div className="flex justify-center items-center">
                            Loading...
                        </div>
                    )}
                    <section className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
                        {students?.map((i, index) => (
                            <Link to={`/admission/studentInfo/${i.usn}`}>
                                <tr
                                    key={index}
                                    className="duration-200 hover:cursor-pointer font-semibold gap-3 text-sm grid grid-cols-3 px-2 py-4 rounded-sm hover:rounded-lg bg-slate-50 shadow-sm border hover:bg-blue-100 hover:border-blue-100 active:scale-95"
                                >
                                    <td className="w-[500px] text-start">
                                        {getFullName(i)}
                                    </td>
                                    <td className="w-[200px] text-center">
                                        {i.course}
                                    </td>
                                    <td className="w-[200px text-center">
                                        {i.year}
                                    </td>
                                </tr>
                            </Link>
                        ))}
                    </section>
                </table>
            </div>
        </div>
    );
};

export default EnrolledStudents;
