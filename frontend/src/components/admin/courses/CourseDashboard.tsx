import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { ICourseGet, ICoursePost } from "../../../interface/ICourse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addCourse, deleteCourse, getCourses } from "../../../api/course";
import { useForm } from "react-hook-form";
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getPrograms } from "../../../api/programs";
import { IProgramGet } from "../../../interface/IProgram";
import { twMerge } from "tailwind-merge";

const CourseDashboard = () => {
  const [search, setSearch] = useState<string>("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICoursePost>();
  const navigate = useNavigate();

  // get courses
  const query = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  // get programs
  const programs = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const addCourMutation = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      toast.success("Added Successfully");
      query.refetch();
      reset();
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const deleteCourMutation = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const filteredData = query.data?.results?.filter((cour: ICourseGet) =>
    cour.courseName.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Data :: ", query.data);

  return (
    <div>
      <div className="w-[1100px] h-[650px]">
        {/* ADD COURSE */}
        <section className={`p-5 flex items-center justify-between gap-3`}>
          <h1 className="text-xl font-bold text-blue-800 w-[150px]">
            Add Course
          </h1>
          <form
            className="grid grid-cols-5 gap-3"
            onSubmit={handleSubmit((data: ICoursePost) => {
              console.log(data);
              addCourMutation.mutate(data);
            })}
          >
            <section className="relative grid grid-cols-1">
              <input
                type="text"
                {...register("courseCode", {
                  required: "Course Code is required",
                })}
                placeholder="Course Code"
                className={twMerge(
                  "outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                  errors.courseCode?.message &&
                    "focus:border-b-red-500 border-b-red-500"
                )}
              />
              <p className="absolute text-[11px] font-semibold text-red-500 bottom-[-16px] left-8">
                {errors.courseCode?.message}
              </p>
            </section>
            <section className="relative grid grid-cols-1">
              <input
                type="text"
                {...register("courseName", {
                  required: "Course Name is required",
                })}
                placeholder="Course Name"
                className={twMerge(
                  "outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                  errors.courseName?.message &&
                    "focus:border-b-red-500 border-b-red-500"
                )}
              />
              <p className="absolute text-[11px] font-semibold text-red-500 bottom-[-16px] left-7">
                {errors.courseName?.message}
              </p>
            </section>
            <section className="relative grid grid-cols-1">
              <input
                type="number"
                {...register("units", {
                  required: "Units is required",
                })}
                placeholder="Units"
                className={twMerge(
                  "outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                  errors.units?.message &&
                    "focus:border-b-red-500 border-b-red-500"
                )}
              />
              <p className="absolute text-[11px] font-semibold text-red-500 bottom-[-16px] left-12">
                {errors.units?.message}
              </p>
            </section>
            <section className="relative grid gird-cols-1">
              <p className="absolute text-xs font-bold top-[-5px]">Program :</p>
              <select
                {...register("program")}
                className="outline-none border-0 h-[40px] border-b-2 focus:border-blue-900 border-b-black w-[100px text-center"
              >
                {programs.data?.results.map(
                  (prog: IProgramGet, index: number) => (
                    <option key={index} value={prog._id} selected={index === 0}>
                      {prog.programAcronym}
                    </option>
                  )
                )}
              </select>
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[140px flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addCourMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Add Course"
              )}
            </button>
          </form>
        </section>
        {/* Update Course */}

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
              <h1 className="w-[200px] font-bold text-center">Program</h1>
              <h1 className="w-[200px] font-bold text-center">Action</h1>
            </span>
            <span className="overflow-scroll no-scrollbar">
              {query.isLoading && (
                <div className="flex justify-center w-[1100px] h-[550px] border rounded-md p-52">
                  <img src="/loading.svg" className=" px-5" alt="" />
                </div>
              )}
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
                  <h1 className="w-[150px] pl-3">{cour.courseCode} </h1>
                  <h1 className="w-[300px] text-center">{cour.courseName}</h1>
                  <h1 className="w-[150px] text-center">{cour.units} units</h1>
                  {cour.program?.length > 0 ? (
                    cour.program?.map((prog: IProgramGet, index: number) => (
                      <h1 key={index} className="w-[200px] text-center">
                        {prog.programAcronym}
                      </h1>
                    ))
                  ) : (
                    <h1 className="w-[200px] text-center">n/a</h1>
                  )}

                  <h1 className="w-[200px] flex justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => {
                        deleteCourMutation.mutate(cour._id);
                      }}
                      className="bg-red-500 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-red-700 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      onClick={() => {
                        navigate("/admin/update-course/" + cour._id);
                        // deleteCourMutation.mutate(cour._id);
                        // id = cour._id;
                        // courseQuery.refetch();
                        // console.log(courseQuery.data);
                      }}
                      className="bg-blue-500 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-blue-700 active:scale-95 duration-200"
                    >
                      <MdEditSquare />
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
