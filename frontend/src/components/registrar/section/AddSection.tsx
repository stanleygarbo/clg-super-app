import { useForm } from "react-hook-form";
import Input from "../../props/Input";
import { ISectionPost } from "../../../interface/ISection";

const AddSection = () => {
  const { register, watch, handleSubmit } = useForm<ISectionPost>();

  const sectionName = watch("sectionName") || "";
  return (
    <div className="w-full max-w-[1200px] my-5 mt-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Add Section</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="flex flex-col mt-10 gap-3"
        >
          <Input
            label="Section Name"
            value={sectionName}
            register={register("sectionName")}
          />
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
