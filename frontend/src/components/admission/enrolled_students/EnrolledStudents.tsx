import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";

const EnrolledStudents = () => {
    const navigate = useNavigate();

    const query = useQuery({
        queryKey: ["students"],
        queryFn: getStudents,
    });

    console.log(query.data);

    const getFullName = (student: any) => {
        return `${student.surname}, ${student.firstName} ${student.middleName}`;
    };

    return (
        <div className="">
            <div className="">
                <h1 className="text-center py-5 text-2xl font-bold bg-blue-600 text-white border-t border-r border-l rounded-t-md shadow-sm">
                    All Students
                </h1>
                <table className="w-full h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
                    <thead className="grid grid-cols-3 text-lg font-bold gap-3 p-2 border-b mb-5 text-slate-800 border-slate-300 items-center w-[100%]">
                        <td className="w-[500px] text-start">Name</td>
                        <td className="w-[200px] text-center">Course</td>
                        <td className="w-[200px text-center">Year</td>
                    </thead>
                    {query.isError && (
                        <div className="flex justify-center items-center">
                            Failed to fetch data
                        </div>
                    )}
                    {query.isPending && (
                        <div className="flex justify-center items-center">
                            Loading...
                        </div>
                    )}
                    <tbody className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
                        {query.data?.results.map(
                            (student: any, index: number) => (
                                <tr
                                    onClick={() =>
                                        navigate(
                                            `/admission/studentInfo/${student._id}`
                                        )
                                    }
                                    key={index}
                                    className="duration-200 hover:cursor-pointer font-semibold gap-3 text-sm grid grid-cols-3 px-2 py-4 rounded-sm hover:text-white bg-slate-50 shadow-sm border hover:bg-blue-600 hover:border-blue-600 active:scale-95"
                                >
                                    <td className="w-[500px] text-start">
                                        {getFullName(student)}
                                    </td>
                                    <td className="w-[200px] text-center">
                                        {student.course}
                                    </td>
                                    <td className="w-[200px text-center">
                                        {student.year}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledStudents;
