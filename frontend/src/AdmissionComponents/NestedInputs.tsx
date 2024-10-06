import { useFormContext } from "react-hook-form";

const NestedInputs = () => {
  const methods = useFormContext();

  return (
    <div>
      <input {...methods.register("name")} placeholder="name" type="text" />
      <input
        {...methods.register("address")}
        placeholder="address"
        type="text"
      />
    </div>
  );
};

export default NestedInputs;
