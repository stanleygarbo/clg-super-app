import { FormProvider, useForm } from "react-hook-form";
import EFormSchoolYear from "./EFormSchoolYear";
import EFormStudent from "./EFormStudent";
import EFormParents from "./EFormParents";
import EformSiblings from "./EformSiblings";

type FormDataType = any;

function EForm() {
  const methods = useForm<FormDataType>();

  return (
    <FormProvider {...methods}>
      <form
        className="p-10"
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="bg-black p-2 text-white rounded-t-md">
          <h1 className="text-2xl text-center font-bold justify-items-stretch">
            EForm
          </h1>
        </div>
        <div className="flex flex-col gap-2 mx-auto border-4 border-black mb-20 p-10 rounded-b-md">
          <EFormSchoolYear />
          <EFormStudent />
          <EFormParents />
          <EformSiblings />
          <button
            type="submit"
            className=" bg-red-500 py-2 w-[15%] font-bold text-white rounded-md 
          transition-all hover:bg-blue-400 "
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default EForm;
