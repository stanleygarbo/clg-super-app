import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FormProvider, useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";

const AdmissionUpdateProfile = () => {
  const methods = useForm<any>();
  const [pfp, setPfp] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles?.[0];
      const url = URL.createObjectURL(file);
      setPfp(url);
    },
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col justify-center w-[800px] border shadow-md rounded-lg bg-slate-50"
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <section className="flex flex-col gap-5 pt-10 pb-10 border-b">
          <h1 className="font-bold text-center text-xl">Update Profile</h1>
          <div className="flex items-end gap-10 pl-10 h-[150px]">
            <span className="flex gap-3 items-end">
              <section {...getRootProps()} className="relative">
                <div className=" flex hover:opacity-100 opacity-0 w-full h-full bg-black/50 absolute top-0 left-0 rounded-md duration-200 cursor-pointer justify-end">
                  <p className="pr-2 pt-2 text-white text-lg">
                    <MdEdit />
                  </p>
                  <input {...getInputProps()} />
                </div>
                <img
                  src={pfp}
                  alt=""
                  className="w-[125px] h-[125px] bg-blue-400 rounded-md shadow-md object-cover"
                />
              </section>
              <p className="font-bold text-center text-red-600 p-1">
                Admission
              </p>
            </span>
          </div>
        </section>
        <div className="flex flex-col gap-10 p-10">
          <span>
            <h1 className="font-bold">Name : </h1>
            <section className="grid grid-cols-3 gap-3">
              <input
                required
                type="text"
                placeholder="Last Name"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("lastName")}
              />
              <input
                required
                type="text"
                placeholder="First Name"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("firstName")}
              />
              <input
                type="text"
                required
                placeholder="Middle Name"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("middleName")}
              />
            </section>
          </span>
          <span>
            <h1 className="font-bold">Contacts : </h1>
            <section className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="email@gmail.com"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("email")}
              />
              <input
                type="number"
                placeholder="Contact No."
                className="text-center rounded-md border border-slate-400 h-[35px]"
                maxLength={11}
                {...methods.register("contactNum")}
              />
            </section>
          </span>
          <span>
            <h1 className="font-bold">Address : </h1>
            <section className="grid grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Street/Brgy."
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("street")}
              />
              <input
                type="text"
                placeholder="City"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("city")}
              />
              <input
                type="text"
                placeholder="Province"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("province")}
              />
            </section>
          </span>
          <span className="flex flex-col gap-5">
            <h1 className="font-bold">Other Information :</h1>
            <section className="grid grid-cols-3 gap-3">
              <input
                type="number"
                placeholder="SSS No."
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("sssNum")}
              />
              <input
                type="text"
                placeholder="City"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("city")}
              />
              <input
                type="text"
                placeholder="Province"
                className="text-center rounded-md border border-slate-400 h-[35px]"
                {...methods.register("province")}
              />
            </section>
          </span>
          <span className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-red-500/50 hover:bg-red-500 w-[25%] h-[30px] rounded-lg font-bold duration-200"
            >
              Save
            </button>
          </span>
        </div>
      </form>
    </FormProvider>
  );
};

export default AdmissionUpdateProfile;
