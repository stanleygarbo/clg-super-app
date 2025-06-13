import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getGrade, updateGrade } from "../../../api/grade";
import { useForm } from "react-hook-form";
import { IGradesGet, IGradesPost } from "../../../interface/IGrades";
import { useEffect } from "react";
import Input from "../../props/Input";
import ButtonComponent from "../../props/ButtonComponent";
import { toast } from "react-toastify";

const UpdateGrade = () => {
  const { id } = useParams();
  const form = useForm<IGradesPost>();
  const naviagate = useNavigate();

  if (!id) return;

  const grade = useQuery<IGradesGet>({
    queryKey: ["grade", id],
    queryFn: () => getGrade({ id: id }),
  });

  const updateGradeMutation = useMutation({
    mutationFn: updateGrade,
    onSuccess: () => {
      toast.success("Updated Successfully");
      naviagate(`/registrar/seat-info/${grade.data?.seat?._id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //   console.log(grade.data?.student);

  useEffect(() => {
    if (grade.data) {
      form.reset({
        finalGrade: grade.data?.finalGrade,
        seat: grade?.data?.seat?._id,
        // student: grade?.data?.student?._id,
        course: grade?.data?.course?._id,
      });
    }
  }, [grade.data, form.reset]);
  return (
    <div className="w-full max-w-[1100px]">
      <div>
        <h1>Update Grade</h1>
        <form
          onSubmit={form.handleSubmit((data) => {
            updateGradeMutation.mutate({ id: id, data: data });
          })}
        >
          <Input label="Final Grade" register={form.register("finalGrade")} />
          <ButtonComponent
            label="Submit"
            type="submit"
            style="text-white w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateGrade;
