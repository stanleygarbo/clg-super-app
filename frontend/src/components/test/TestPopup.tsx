import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
type inputs = {
  lastName: string;
  firstName: string;
  middleName: string;
  religion: string;
  nationaity: string;
  maritalStatus: string;
  sex: string;
  phoneNum: number;
  email: string;
  telNum: number;
};

const TestPopup = (props: { infoOpacity: any }) => {
  const methods = useForm<inputs>();
  const [infoOpacity, setInfoOpacity] = useState({ ...props.infoOpacity });
  useEffect(() => {
    setInfoOpacity(props.infoOpacity);
  }, [props.infoOpacity]);
  return (
    <FormProvider {...methods}>
      <form
        className={`bg-slate-50 p-5 rounded-lg shadow-sm absolute left-0 transform -translate-x-1/2 -translate-y-1/2 ${infoOpacity} duration-200 flex flex-col gap-5`}
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <section className="flex justify-between pb-5">
          <p>Edit Information</p>
          <button
            className="font-bold hover:text-red-500 p-1"
            onClick={() => {
              setInfoOpacity("opacity-0 w-[1px]");
            }}
          >
            x
          </button>
        </section>
        <section className="grid grid-cols-3 gap-5">
          <input
            type="text"
            placeholder="Last Name"
            {...methods.register("lastName")}
            className="text-sm text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
          />
          <input
            type="text"
            placeholder="First Name"
            {...methods.register("firstName")}
            className="text-sm text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
          />
          <input
            type="text"
            placeholder="Middle Name"
            {...methods.register("middleName")}
            className="text-sm text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
          />
        </section>
        <section className="grid grid-cols-3 gap-5">
          <input
            type="text"
            className="text-sm text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
          />
          <input
            type="text"
            className="text-sm text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
          />
          <input
            type="text"
            className="text-sm text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
          />
        </section>
        <section className="flex justify-end">
          <button type="submit" className="bg-slate-400 rounded-lg py-1 px-4">
            Save
          </button>
        </section>
      </form>
    </FormProvider>
  );
};

export default TestPopup;
