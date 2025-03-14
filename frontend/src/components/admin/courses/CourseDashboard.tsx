import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import { courseData } from "../../../store/CourseData";
import apiClient from "../../../api/apiClient";
import AddCourse from "./AddCourse";
import CoursesList from "./CoursesList";
import { AiFillDelete } from "react-icons/ai";
import { ICourseGet, ICoursePost } from "../../../interface/ICourse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addCourse, getCourses } from "../../../api/course";
import { useForm } from "react-hook-form";
import { IoHandLeft } from "react-icons/io5";

const CourseDashboard = () => {
  const [search, setSearch] = useState<string>("");
  const { handleSubmit, register, setValue } = useForm<ICoursePost>();

  const query = useQuery({
    queryKey: ["course"],
    queryFn: getCourses,
  });

  const addCourMutation = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      toast.success("Added Successfully");
    },
  });

  const filteredData = query.data?.results?.filter((cour: ICourseGet) =>
    cour.courseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="w-[1100px] h-[650px]">
        {/* ADD DEPARTMENT */}
        <section className={`p-5 flex items-center justify-between gap-10`}>
          <h1 className="text-xl font-bold text-blue-800">Add Department</h1>
          <form
            className="flex gap-10"
            onSubmit={handleSubmit((data: ICoursePost) =>
              addCourMutation.mutate(data)
            )}
          >
            <section className="flex items-center gap-3">
              <h1 className="font-semibold text-sm">Department Name :</h1>
              <input
                type="text"
                // {...register("departmentName")}
                placeholder="Department"
                className="outline-none border-0 py-1 px-2 text-lg text-blue-900 font-semibold text-center border-b-2 border-b-blue-800"
              />
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[190px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addCourMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Add Department"
              )}
            </button>
          </form>
        </section>

        <section className="bg-slate-200 px-5 py-2 rounded-md flex items-center justify-between">
          <span className="flex gap-3">
            <h1 className="text-xl font-bold text-blue-800">Department List</h1>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border-0 rounded-md px-5 py-2 outline-none text-center"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section>
          <span className="flex flex-col">
            <span className="flex gap-5 mb-3 mt-2 text-lg">
              <h1 className="w-[150px] font-bold">Course Code</h1>
              <h1 className="w-[400px] font-bold text-center">Course</h1>
              <h1 className="w-[200px] font-bold">Units</h1>
              <h1 className="w-[200px] font-bold text-center">Action</h1>
            </span>
            <span className="overflow-scroll no-scrollbar">
              {filteredData?.map((cour: ICourseGet, index: number) => (
                <section
                  key={cour._id}
                  className={`${
                    index == 0
                      ? "rounded-t-md"
                      : index == query.data?.results?.length - 1
                      ? "rounded-b-md"
                      : ""
                  } ${
                    index % 2 == 0
                      ? "bg-blue-100 hover:bg-blue-600 hover:text-white"
                      : "bg-slate-100 hover:bg-slate-400 hover:text-white"
                  } flex items-center gap-5 py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[150px] pl-3">{cour.courseCode}</h1>
                  <h1 className="w-[400px] text-center">{cour.courseName}</h1>
                  <h1 className="w-[200px]">{cour.units} units</h1>
                  <h1 className="w-[200px] flex justify-center">
                    <button
                      onClick={() => {
                        // deleteDeptMutation.mutate(cour._id);
                      }}
                      className="bg-red-500 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-red-700 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                  </h1>
                </section>
              ))}
            </span>
          </span>
        </section>
      </div>
    </div>
  );
};

export default CourseDashboard;
