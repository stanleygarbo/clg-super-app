// src/components/CoursesList.tsx
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import apiClient from "../../../api/apiClient";

type courData = {
    _id: string;
    courseName: string;
    courseCode: string;
    units: string;
};

const CoursesList = () => {
    const [courses, setCourses] = useState<courData[]>([]);
    let id: string;

    const fetchCourses = async () => {
        try {
            const response = await apiClient.get("/courses");
            setCourses(response.data.results);
            console.log(response.data.results);
            // console.log(departments);
        } catch (err) {
        } finally {
        }
    };

    const deleteCourse = async () => {
        try {
            await apiClient.delete("/courses/" + id);
            toast.success("Succesfully deleted");
            // console.log(response);
        } catch (err) {
        } finally {
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [courses.length]);

    return (
        <div className="flex flex-col gap-3 pt-2 pb-10 rounded-b-md h-[90%] overflow-scroll no-scrollbar">
            <h1 className="text-center font-bold text-xl">Courses :</h1>
            {courses.map((cour) => (
                <section
                    key={cour._id}
                    className="relative group bg-slate-400 p-2 text-white font-semibold flex justify-center items-center rounded-md shadow-sm shadow-slate-300/50 duration-200"
                >
                    <h1 className="flex flex-col items-center">
                        ( {cour.courseCode} ) -:- {cour.units} units
                        <p>{cour.courseName} </p>
                    </h1>

                    <button
                        type="button"
                        onClick={() => {
                            id = cour._id;
                            deleteCourse();
                        }}
                        className="absolute top-0 right-0 mt-1 mr-1 opacity-0 text-red-600 text-sm p-[3px] shadow-md rounded-md bg-white group-hover:opacity-100 hover:scale-110 duration-200"
                    >
                        <MdDelete />
                    </button>
                </section>
            ))}
        </div>
    );
};

export default CoursesList;
