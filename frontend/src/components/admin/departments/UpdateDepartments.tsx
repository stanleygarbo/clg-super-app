import { useFormContext } from "react-hook-form";

const UpdateDepartments = () => {
  const { register } = useFormContext();
  return (
    <div>
      <section className="flex items-center gap-3">
        <h1 className="font-semibold text-sm">Department Name :</h1>
        <input
          type="text"
          {...register("departmentName")}
          placeholder="Department"
          className="outline-none border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-blue-800"
        />
      </section>
    </div>
  );
};

export default UpdateDepartments;
