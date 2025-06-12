import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../../props/Input";
import { ISectionPost } from "../../../interface/ISection";
import SelectComponent from "../../props/SelectComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getPrograms } from "../../../api/programs";
import { IOption } from "../../../interface/IOption";
import { IProgramGet } from "../../../interface/IProgram";
import { customStyles } from "../../../interface/IEmployee";
import { addSection } from "../../../api/section";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddSection = () => {
  const { register, watch, handleSubmit, control } = useForm<ISectionPost>();
  const navigate = useNavigate();

  const year = new Date().getFullYear();

  const sectionName = watch("sectionName") || "";
  const schoolYear = watch("academicYear") || `${year - 1}-${year}`;

  const programs = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  const programOptions: IOption[] = programs.data?.results.map(
    (prog: IProgramGet) => {
      return { value: prog._id, label: prog.programAcronym };
    }
  );

  const addMutation = useMutation({
    mutationFn: addSection,
    onSuccess: () => {
      toast.success("Added successfully");
    },
    onError: (errors) => {
      toast.error(errors.message);
    },
  });
  return (
    <div className="w-full max-w-[1200px] my-5 mt-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Add Section</h1>
        <form
          onSubmit={handleSubmit((data) => {
            // console.log(data);
            addMutation.mutate(data);
            navigate("/registrar/section");
          })}
          className="flex flex-col mt-10 gap-3"
        >
          <Input
            label="Section Name"
            value={sectionName}
            register={register("sectionName")}
          />
          <Input
            label="School Year"
            value={schoolYear}
            register={register("academicYear")}
          />
          <SelectComponent
            label="Semester"
            options={[
              { value: "1st", label: "1st" },
              { value: "2nd", label: "2nd" },
              { value: "summer", label: "Summer" },
            ]}
            register={register("semester")}
            selected="1st"
          />
          <section className="relative w-full pt-5 rounded-lg bg-slate-100">
            <p className="absolute px-1 duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
              Programs
            </p>
            <Controller
              control={control}
              name="program"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={programOptions}
                  value={programOptions?.find(
                    (stud) => stud.value === field.value
                  )}
                  onChange={(stud) => {
                    field.onChange(stud?.value);
                    //   setSelectedProgram(stud?.value);
                  }}
                  placeholder="Select Program"
                />
              )}
            />
          </section>
          <button
            type="submit"
            className="bg-blue-700 px-2 py-1 font-semibold text-white rounded-lg hover:bg-blue-800 active:scale-90 duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSection;
