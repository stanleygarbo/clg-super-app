import { FormProvider, useForm } from "react-hook-form";
import NestedInputs from "./NestedInputs";

type FormDataType = {
  name: string;
  address: string;
};

function SampleForm() {
  const methods = useForm<FormDataType>();

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-2 max-w-[400px] mx-auto border border-black p-8 mb-20"
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1 className="text-2xl text-center font-bold mb-6">Sample Form</h1>
        <NestedInputs />
        <button type="submit" className="bg-red-500 py-2 ">
          Submit
        </button>
      </form>
    </FormProvider>
  );
}

export default SampleForm;
