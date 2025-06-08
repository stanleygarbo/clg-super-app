import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { ICourseGet, ICoursePost } from "../../../interface/ICourse";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} from "../../../api/course";
import { Controller, useForm } from "react-hook-form";
import { MdEditSquare } from "react-icons/md";
import { getPrograms } from "../../../api/programs";
import { IProgramGet } from "../../../interface/IProgram";
import { twMerge } from "tailwind-merge";
import Select from "react-select";
import { customStyles } from "../../../interface/IEmployee";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

interface IOption {
  value: string;
  label: string;
}

const CourseDashboard = () => {
  const [search, setSearch] = useState<string>("");
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [updateOpen, setUpdateOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>();

  // add course useForm
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<ICoursePost>();

  // get course by id
  const courseById = useQuery<ICourseGet>({
    queryKey: ["course", id],
    queryFn: () => getCourse({ id }),
    enabled: !!id,
  });

  // update course useForm()
  const update = useForm<ICoursePost>({
    defaultValues: {
      courseCode: courseById.data?.courseCode,
      courseName: courseById.data?.courseName,
      units: courseById.data?.units,
      semester: courseById.data?.semester,
      year: courseById.data?.year,
    },
  });

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

  // add course mutation
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

  // delete course mutation
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

  // update course mutation
  const updateCourMutation = useMutation({
    mutationFn: updateCourse,
    onSuccess: () => {
      toast.success("Updated Successfully");
      setUpdateOpen(false);
      query.refetch();
    },
    onError: (err: any) => {
      if (err.message) {
        toast.error(err.message);
      } else toast.error(err.response.data.message);
    },
  });

  // search data
  const filteredData = query.data?.results?.filter((cour: ICourseGet) =>
    cour.courseName.toLowerCase().includes(search.toLowerCase())
  );

  // program options
  const programOption: IOption[] = programs.data?.results?.map(
    (prog: IProgramGet) => ({ value: prog._id, label: prog.programAcronym })
  );

  // add submit
  const onSubmit = (data: ICoursePost) => {
    const formattedData = {
      ...data,
      program: Array.isArray(data?.program)
        ? data?.program?.map((prog) => prog?.value)
        : [],
    };
    // console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    addCourMutation.mutate(formattedData);
  };

  // update submit
  const upSubmit = (data: ICoursePost) => {
    const formattedData = {
      ...data,
      program: Array.isArray(data?.program)
        ? data.program.map((prog) => prog.value)
        : [],
    };

    // console.log("Formatted Data:", formattedData.program); // Check if the data is correct before sending

    if (id) {
      updateCourMutation.mutate({ id, data: formattedData });
    }
  };

  // default update react-select value
  const deaf = programOption?.filter((prog) =>
    (
      courseById.data?.program?.map((prog: IProgramGet) => prog._id) ?? []
    ).includes(prog.value)
  );

  // set default value for update
  useEffect(() => {
    if (courseById.data) {
      update.reset({
        courseCode: courseById.data?.courseCode,
        courseName: courseById.data?.courseName,
        units: courseById.data?.units,
      });
    }
  }, [courseById.data, update.reset]);

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className="mt-10">
      <div className={`${isOpen ? "-z-50 xl:z-50" : ""} w-full relative`}>
        <section className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              setAddOpen(true);
            }}
            className="py-2 px-4 bg-blue-700 rounded-md text-white mt-10 mb-5 font-semibold active:scale-90 duration-200"
          >
            Add Course
          </button>
        </section>

        {/* Update Course Form*/}

        <section
          className={`${
            updateOpen
              ? "w-full xl:w-[600px] z-50"
              : "w-0 left-[-200px] opacity-0"
          } absolute rounded-md p-5 gap-5 transform translate-y-1/2 xl:translate-x-1/2 xl:translate-y-10 flex flex-col items-center justify-between border backdrop-blur-md overflow-hidden duration-200`}
        >
          <section className="flex justify-between px-3 w-full xl:w-[500px]">
            <h1 className="text-xl font-bold text-blue-700 xl:w-[150px]">
              Update Course
            </h1>
            <button
              type="button"
              onClick={() => {
                setUpdateOpen(false);
              }}
              className="bg-slate-300 px-3 py-1 rounded-md text-black hover:text-red-500 font-bold active:scale-90 duration-200"
            >
              X
            </button>
          </section>

          <form
            className={`flex flex-col gap-5`}
            onSubmit={update.handleSubmit(upSubmit)}
          >
            <span className="grid xl:grid-cols-[1fr,2fr] gap-2">
              <section className="relative grid grid-cols-1">
                <input
                  type="text"
                  {...update.register("courseCode")}
                  placeholder="Course Code"
                  className="outline-none border-0 rounded-md py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800"
                />
              </section>
              <section className="relative grid grid-cols-1">
                <input
                  type="text"
                  {...update.register("courseName")}
                  placeholder="Course Name"
                  className="outline-none border-0 rounded-md py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800"
                />
              </section>
            </span>
            <section className="grid xl:grid-cols-3 gap-2 items-center">
              <select
                className="outline-none border-0 h-[40px] rounded-md border-b-2 focus:border-blue-900 border-b-black text-center"
                {...update.register("semester")}
              >
                <option value={1} selected={courseById.data?.semester === 1}>
                  1<sup>st</sup> sem
                </option>
                <option value={2} selected={courseById.data?.semester === 2}>
                  2<sup>nd</sup> sem
                </option>
              </select>
              <select
                className="outline-none border-0 h-[40px] rounded-md border-b-2 focus:border-blue-900 border-b-black text-center"
                {...update.register("year")}
              >
                <option value={1} selected={courseById.data?.year === 1}>
                  1<sup>st</sup> year
                </option>
                <option value={2} selected={courseById.data?.year === 2}>
                  2<sup>nd</sup> year
                </option>
                <option value={3} selected={courseById.data?.year === 3}>
                  3<sup>rd</sup> year
                </option>
                <option value={4} selected={courseById.data?.year === 4}>
                  4<sup>th</sup> year
                </option>
              </select>
              <section className="">
                <input
                  type="number"
                  {...update.register("units")}
                  placeholder="Units"
                  className="outline-none border-0 w-full h-[40px] rounded-md border-b-2 focus:border-blue-900 border-b-black text-center"
                />
              </section>
            </section>
            <section className="relative grid gird-cols-1 mt-1">
              <p className="absolute text-xs font-bold top-[-20px]">
                Programs :
              </p>
              <Controller
                name="program"
                control={update.control}
                defaultValue={deaf}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      isMulti
                      options={programOption} // Options to choose from
                      styles={customStyles}
                      onChange={(selected) => field.onChange(selected)} // Update field when selection changes
                      value={field?.value || deaf} // Ensures value is never undefined, ensures multi-select works
                    />
                  );
                }}
              />
            </section>
            <button
              type="submit"
              className="bg-blue-600 w-[140px flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addCourMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Update Course"
              )}
            </button>
          </form>
        </section>

        {/* Add Course Form*/}

        <section
          className={`${
            addOpen ? "w-full xl:w-[600px] z-50" : "w-0 left-[-200px] opacity-0"
          } absolute rounded-md p-5 gap-5 transform translate-y-1/2 xl:translate-x-1/2 xl:translate-y-10 flex flex-col items-center justify-between border backdrop-blur-md overflow-hidden duration-200`}
        >
          <section className="flex justify-between w-full xl:w-[500px]">
            <h1 className="text-xl font-bold text-blue-700 xl:w-[150px]">
              Add Course
            </h1>
            <button
              type="button"
              onClick={() => {
                setAddOpen(false);
              }}
              className="bg-slate-300 px-3 py-1 rounded-md text-black hover:text-red-500 font-bold active:scale-90 duration-200"
            >
              X
            </button>
          </section>

          <form
            className={`flex flex-col gap-5`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="grid xl:grid-cols-2 gap-2">
              <section className="relative grid grid-cols-1">
                <input
                  type="text"
                  {...register("courseCode", {
                    required: "Course Code is required",
                  })}
                  placeholder="Course Code"
                  className={twMerge(
                    "outline-none border-0 rounded-md py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                    errors.courseCode?.message &&
                      "focus:border-b-red-500 border-b-red-500"
                  )}
                />
                <p className="absolute text-[11px] font-semibold text-red-500 bottom-[-16px] left-8">
                  {errors.courseCode?.message}
                </p>
              </section>
              <section className="relative grid">
                <input
                  type="text"
                  {...register("courseName", {
                    required: "Course Name is required",
                  })}
                  placeholder="Course Name"
                  className={twMerge(
                    "outline-none border-0 rounded-md py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                    errors.courseName?.message &&
                      "focus:border-b-red-500 border-b-red-500"
                  )}
                />
                <p className="absolute text-[11px] font-semibold text-red-500 bottom-[-16px] left-7">
                  {errors.courseName?.message}
                </p>
              </section>
            </span>
            <section className="grid xl:grid-cols-3 gap-2">
              <select
                className="outline-none border-0 h-[40px] rounded-md border-b-2 focus:border-blue-900 border-b-black text-center"
                {...register("semester")}
              >
                <option value={1} selected>
                  1<sup>st</sup> sem
                </option>
                <option value={2}>
                  2<sup>nd</sup> sem
                </option>
              </select>
              <select
                className="outline-none border-0 h-[40px] rounded-md border-b-2 focus:border-blue-900 border-b-black text-center"
                {...register("year")}
              >
                <option value={1} selected>
                  1<sup>st</sup> year
                </option>
                <option value={2}>
                  2<sup>nd</sup> year
                </option>
                <option value={3}>
                  3<sup>rd</sup> year
                </option>
                <option value={4}>
                  4<sup>th</sup> year
                </option>
              </select>
              <section className="relative grid grid-cols-1">
                <input
                  type="number"
                  {...register("units", {
                    required: "Units is required",
                  })}
                  placeholder="Units"
                  className={twMerge(
                    "outline-none border-0 rounded-md py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                    errors.units?.message &&
                      "focus:border-b-red-500 border-b-red-500"
                  )}
                />
                <p className="absolute text-[11px] font-semibold text-red-500 bottom-[-16px] left-12">
                  {errors.units?.message}
                </p>
              </section>
            </section>
            <section className="relative grid gird-cols-1 mt-1">
              <p className="absolute text-xs font-bold top-[-20px]">
                Programs :
              </p>
              <Controller
                name="program"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={programOption}
                    styles={customStyles}
                    className="w-full"
                    onChange={(selected) => field.onChange(selected)}
                    value={field?.value || []} // Ensures value is never undefined
                  />
                )}
              />
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

        {/* Display Courses */}
        <div className={`${addOpen ? "-z-50" : "z-50"} `}>
          <section className="bg-slate-100 px-5 py-3 rounded-md flex flex-col xl:flex-row gap-3 items-center justify-between">
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
          <div className="hidden xl:flex">
            <section className="w-[100%] h-[100%] ">
              <span className="flex flex-col">
                <span className="flex mb-3 mt-2 text-lg text-center font-bold">
                  <h1 className="w-[10%] pl-2 text-start">Course Code</h1>
                  <h1 className="w-[25%]">Course</h1>
                  <h1 className="w-[10%]">Units</h1>
                  <h1 className="w-[5%]">Year</h1>
                  <h1 className="w-[5%]">Sem</h1>
                  <h1 className="w-[25%]">Program</h1>
                  <h1 className="w-[20%]">Action</h1>
                </span>
                <span className="overflow-scroll no-scrollbar w-[1200px] h-[90%]">
                  {query.isLoading && (
                    <div className="flex justify-center w-[1200px] bg-slate-100 h-[90%] rounded-md p-52">
                      <img src="/loading.svg" className="px-5" alt="" />
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
                      } hover:bg-slate-300 group flex w-[100%] text-center items-center py-2 font-semibold duration-200`}
                    >
                      <h1 className="w-[10%] text-start pl-2">
                        {cour?.courseCode}{" "}
                      </h1>
                      <h1 className="w-[25%] ">{cour?.courseName}</h1>
                      <h1 className="w-[10%] ">{cour?.units} units</h1>
                      <h1 className="w-[5%] ">
                        {cour?.year ? (
                          cour.year === 1 ? (
                            <p>
                              {cour.year}
                              <sup>st</sup>
                            </p>
                          ) : cour.year === 2 ? (
                            <p>
                              {cour.year}
                              <sup>nd</sup>
                            </p>
                          ) : cour.year === 3 ? (
                            <p>
                              {cour.year}
                              <sup>rd</sup>
                            </p>
                          ) : cour.year === 4 ? (
                            <p>
                              {cour.year}
                              <sup>4th</sup>
                            </p>
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </h1>
                      <h1 className="w-[5%] ">
                        {cour?.semester ? (
                          cour.semester === 1 ? (
                            <p>
                              {cour.semester}
                              <sup>st</sup>
                            </p>
                          ) : cour.semester === 2 ? (
                            <p>
                              {cour.semester}
                              <sup>nd</sup>
                            </p>
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </h1>
                      <h1 className="flex flex-wrap w-[25%] justify-center gap-2">
                        {cour.program?.length > 0
                          ? cour.program
                              ?.map((prog: IProgramGet) => prog.programAcronym)
                              .join(", ")
                          : "none"}
                      </h1>

                      <h1 className="w-[20%] flex justify-center gap-2 opacity-50 group-hover:opacity-100">
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
                            setId(cour._id);
                            setUpdateOpen(true);
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
        {/* Mobile View */}
        <div
          className={`${
            isOpen ? "-z-50 xl:z-50" : "z-50"
          } sm:hidden flex flex-col mt-3 gap-3`}
        >
          {filteredData?.map((cour: ICourseGet, index: number) => (
            <div
              key={cour._id}
              className={`${
                index % 2 === 0 ? "bg-blue-50" : "bg-slate-50"
              } p-5 flex flex-col gap-1 rounded-lg`}
            >
              <p className="text-sm">
                <strong>Code:</strong> {cour.courseCode}
              </p>
              <p className="text-sm">
                <strong>Name:</strong> {cour.courseName}
              </p>
              <p className="text-sm">
                <strong>Units:</strong> {cour.units}
              </p>
              <p className="text-sm">
                <strong>Year:</strong> {cour.year}
              </p>
              <p className="text-sm">
                <strong>Semester:</strong> {cour.semester}
              </p>
              <p className="text-sm">
                <strong>Programs:</strong>{" "}
                {cour.program?.length
                  ? cour.program.map((prog) => prog.programAcronym).join(", ")
                  : "none"}
              </p>
              <div className="flex gap-4 mt-2 justify-end items-center">
                <button
                  className="bg-blue-600 hover:bg-blue-800 px-3 py-2 text-white rounded-lg"
                  onClick={() => {
                    setId(cour._id);
                    setUpdateOpen(true);
                  }}
                >
                  <MdEditSquare size={20} />
                </button>
                <button
                  className="bg-red-600 hover:bg-red-800 px-3 py-2 text-white rounded-lg"
                  onClick={() => deleteCourMutation.mutate(cour._id)}
                >
                  <AiFillDelete size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
