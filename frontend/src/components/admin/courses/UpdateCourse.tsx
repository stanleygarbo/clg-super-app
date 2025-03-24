import { useForm } from "react-hook-form";
import { ICourseGet, ICoursePost } from "../../../interface/ICourse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCourse, updateCourse } from "../../../api/course";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const courseQuery = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourse({ id }),
  });

  const { handleSubmit, register, reset } = useForm<ICoursePost>({
    defaultValues: {
      courseCode: courseQuery.data?.courseCode,
      courseName: courseQuery.data?.courseName,
      units: courseQuery.data?.units,
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateCourse,
    onSuccess: () => {
      toast.success("Updated Successfully");
      navigate("/admin/coursedashboard");
    },
    onError: (err: any) => {
      if (err.message) {
        toast.error(err.message);
      } else toast.error(err.response.data.message);
    },
  });

  useEffect(() => {
    if (courseQuery.data) {
      reset({
        courseCode: courseQuery.data.courseCode,
        courseName: courseQuery.data.courseName,
        units: courseQuery.data.units,
      });
    }
  }, [courseQuery.data, reset]);
  return (
    <div>
      <section className="p-5 flex items-center justify-between gap-3">
        <h1 className="text-xl font-bold text-blue-800 w-[120px]">
          Edit Course
        </h1>
        <form
          className="flex gap-3"
          onSubmit={handleSubmit((data: ICoursePost) => {
            console.log("Data :: ", data);
            if (id) updateMutation.mutate({ id, data });
          })}
        >
          <input
            type="text"
            // defaultValue={courseQuery.data?.courseCode}
            {...register("courseCode")}
            placeholder="Course Code"
            className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
          />
          <input
            type="text"
            // defaultValue={courseQuery.data?.courseName}
            {...register("courseName")}
            placeholder="Course Name"
            className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
          />
          <input
            type="number"
            // defaultValue={courseQuery.data?.units}
            {...register("units")}
            placeholder="Units"
            className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
          />
          <button
            type="submit"
            className="bg-blue-600 w-[140px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
          >
            {updateMutation.isPending ? (
              <img src="/loading.svg" className="invert" alt="" />
            ) : (
              "Update Course"
            )}
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateCourse;
