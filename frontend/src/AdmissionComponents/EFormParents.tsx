import React from "react";
import { useFormContext } from "react-hook-form";

const EFormParents = () => {
  const { register } = useFormContext();

  return (
    <section className="pb-20 border-4 flex flex-col items-center border-black">
      <div className="bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black w-[100%]">
        <p>PARENT'S & GUARDIAN'S INFORMATION</p>
      </div>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <label htmlFor="" className="text-start">
          FATHER'S INFORMATION
        </label>

        <div className="gap-5 grid grid-cols-3">
          <input
            type="text"
            className="pl-5"
            placeholder="SURNAME"
            {...register("surname")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="FIRST NAME"
            {...register("firstName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="MIDDLE NAME"
            {...register("middleName")}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="text"
            className="pl-5"
            placeholder="OCCUPATION"
            {...register("occupation")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY/OFFICE NAME"
            {...register("companyName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY ADDRESS"
            {...register("companyAdress")}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <input
            type="number"
            className="pl-5"
            placeholder="TEL NO."
            {...register("telephoneNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="FAX NO."
            {...register("faxNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="CELLPHONE NO."
            {...register("cellphoneNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="EMAIL"
            {...register("email")}
          />
        </div>
      </div>

      <div className="w-full px-6 flex flex-col gap-3">
        <label htmlFor="" className="text-start pt-10">
          MOTHER'S INFORMATION
        </label>

        <div className="grid grid-cols-3 gap-5">
          <input type="text" className="pl-5" placeholder="SURNAME" />
          <input type="text" className="pl-5" placeholder="FIRST NAME" />
          <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input type="text" className="pl-5" placeholder="OCCUPATION" />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY/OFFICE NAME"
          />
          <input type="text" className="pl-5" placeholder="COMPANY ADDRESS" />
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <input type="number" className="pl-5" placeholder="TEL NO." />
          <input type="number" className="pl-5" placeholder="FAX NO." />
          <input type="number" className="pl-5" placeholder="CELLPHONE NO." />
          <input type="text" className="pl-5" placeholder="EMAIL" />
        </div>
      </div>

      <div className="flex w-full px-6 flex-col gap-3">
        <label htmlFor="" className="text-start pt-10">
          GUARDIAN'S INFORMATION
        </label>

        <div className="grid grid-cols-3 gap-5">
          <input type="text" className="pl-5" placeholder="SURNAME" />
          <input type="text" className="pl-5" placeholder="FIRST NAME" />
          <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
        </div>

        <div className="grid grid-cols-2 gap-3 ">
          <input
            type="text"
            className="pl-5"
            placeholder="SPOUSE'S NAME (IF GUARDIAN IS MARRIED)"
          />
          <input
            type="text"
            className="pl-5"
            placeholder="RELATIONSHIP TO THE STUDENT"
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input type="text" className="pl-5" placeholder="OCCUPATION" />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY/OFFICE NAME"
          />
          <input type="text" className="pl-5" placeholder="COMPANY ADDRESS" />
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <input type="number" className="pl-5" placeholder="TEL NO." />
          <input type="number" className="pl-5" placeholder="FAX NO." />
          <input type="number" className="pl-5" placeholder="CELLPHONE NO." />
          <input type="text" className="pl-5" placeholder="EMAIL" />
        </div>
      </div>
    </section>
  );
};

export default EFormParents;
