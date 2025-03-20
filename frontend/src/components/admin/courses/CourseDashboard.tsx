import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { ICourseGet, ICoursePost } from "../../../interface/ICourse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addCourse, deleteCourse, getCourses } from "../../../api/course";
import { useForm } from "react-hook-form";

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
      query.refetch();
    },
  });

  const deleteCourMutation = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
  });

  const filteredData = query.data?.results?.filter((cour: ICourseGet) =>
    cour.courseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="w-[1100px] h-[650px]">
        {/* ADD COURSE */}
        <section className={`p-5 flex items-center justify-between gap-3`}>
          <h1 className="text-xl font-bold text-blue-800 w-[120px]">
            Add Course
          </h1>
          <form
            className="flex gap-3"
            onSubmit={handleSubmit((data: ICoursePost) =>
              addCourMutation.mutate(data)
            )}
          >
            <input
              type="text"
              {...register("courseCode")}
              placeholder="Course Code"
              className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
            />
            <input
              type="text"
              {...register("courseName")}
              placeholder="Course Name"
              className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
            />
            <input
              type="number"
              {...register("units")}
              placeholder="Units"
              className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
            />
            <button
              type="submit"
              className="bg-blue-600 w-[140px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addCourMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Add Course"
              )}
            </button>
          </form>
        </section>

        <section className="bg-slate-100 px-5 py-2 rounded-md flex items-center justify-between">
          <span className="flex gap-3">
            <h1 className="text-xl font-bold text-blue-800">Course's List</h1>
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
            <span className="flex mb-3 mt-2 text-lg">
              <h1 className="w-[150px] font-bold pl-3">Course Code</h1>
              <h1 className="w-[300px] font-bold text-center">Course</h1>
              <h1 className="w-[150px] font-bold text-center">Units</h1>
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
                    index % 2 == 0 ? "bg-slate-200" : "bg-slate-100"
                  } hover:bg-slate-300 group flex items-center py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[150px] pl-3">{cour.courseCode}</h1>
                  <h1 className="w-[300px] text-center">{cour.courseName}</h1>
                  <h1 className="w-[150px] text-center">{cour.units} units</h1>
                  <h1 className="w-[200px] flex justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => {
                        deleteCourMutation.mutate(cour._id);
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
