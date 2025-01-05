import { useDropzone } from "react-dropzone";
import { MdEdit } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

type inputs = {
  lastName: string;
  firstName: string;
  middleName: string;
  religion: string;
  nationality: string;
  maritalStatus: string;
  sex: string;
  phoneNum: number;
  email: string;
  telNum: number;
};
const TestProfile = () => {
  const methods = useForm<inputs>();
  const [pfp, setPfp] = useState("");
  const [infoOpacity, setInfoOpacity] = useState("opacity-0 w-0");
  const [addressOpacity, setAddressOpacity] = useState(
    "opacity-0 w-0 h-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
  );

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
    <div className="shadow-lg rounded-lg relative m-10">
      <span className="flex gap-5 items-start border-b p-10 rounded-t-lg bg-slate-100">
        <section {...getRootProps()} className="relative">
          <div className=" flex hover:opacity-100 justify-center items-center opacity-0 w-full h-full bg-black/50 absolute top-0 left-0 rounded-full duration-200 cursor-pointer">
            <p className="flex text-white text-xl">
              <MdEdit />
            </p>
            <input {...getInputProps()} />
          </div>
          <img
            src={pfp}
            alt=""
            className="w-[100px] h-[100px] bg-blue-400 rounded-full shadow-md object-cover border border-slate-700"
          />
        </section>
        <section className="flex flex-col justify-center ">
          <p className="text-lg text-start font-bold text-slate-800">
            Mheg Ryan T. Limpangog
          </p>
          <p className="flex gap-2 text-slate-500 font-semibold">
            <p>Computer Science</p>
            <p>
              3<sup>rd</sup> Year
            </p>
          </p>
          <p className="text-slate-500 font-semibold">Student</p>
        </section>
      </span>
      <section className="flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-sm bg-white">
        <h1 className="py-2 px-5 font-bold">Personal Information</h1>
      </section>
      <span className="flex flex-col p-10 gap-2">
        <section
          className={`flex flex-col bg-slate-50 p-5 rounded-md absolute duration-200 overflow-hidden ${addressOpacity}`}
        >
          <div className="flex justify-between pb-4">
            <p className="text-lg font-semibold">Add Address</p>
            <button
              onClick={() => {
                setAddressOpacity(
                  "opacity-0 w-0 h-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
                );
              }}
              className="text-lg font-semibold px-3 rounded-md hover:text-red-500 hover:bg-slate-200 duration-200"
            >
              x
            </button>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <input
              className="text-md text-slate-800 font-semibold text-center p-1 rounded-lg border-0 bg-slate-200 shadow-sm "
              type="text"
              placeholder="Brgy. or Street"
            />

            <input
              className="text-md text-slate-800 font-semibold text-center p-1 rounded-lg border-0 bg-slate-200 shadow-sm "
              type="text"
              placeholder="City"
            />

            <input
              className="text-md text-slate-800 font-semibold text-center p-1 rounded-lg border-0 bg-slate-200 shadow-sm "
              type="text"
              placeholder="Province"
            />
            <button
              className="text-slate-800 border mt-3 border-green-600 py-1 font-bold rounded-lg shadow-md hover:text-slate-50 hover:bg-green-600 duration-200"
              type="submit"
            >
              Add
            </button>
          </div>
        </section>
        <section className="flex justify-between">
          <h1 className="text-lg font-bold mb-3">Address</h1>
          <button
            onClick={() => {
              setAddressOpacity(
                "w-[400px] opacity-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              );
            }}
            className="bg-slate-50 rounded-lg shadow-sm font-bold px-4 hover:text-white hover:bg-slate-400 duration-200"
          >
            Add
          </button>
        </section>
        <section className="flex flex-wrap gap-10 justify-start">
          <span className="flex group gap-5 bg-slate-50 hover:bg-slate-300 shadow-sm py-3 px-5 rounded-lg duration-200">
            <h1 className="bg-yellow-400 flex justify-center items-center rounded-full w-[40px] h-[40px] text-slate-700">
              M
            </h1>
            <section className="flex flex-col">
              <span className="flex">
                <p>Macabug</p>
                <p>, Ormoc City</p>
                <p>, Leyte</p>
              </span>
              <p className="text-center text-xs font-bold text-slate-400 group-hover:text-slate-500">
                Permanent Address
              </p>
            </section>
            <button className="group-hover:text-red-600 text-lg drop-shadow-sm pl-4 font-bold opacity-0 group-hover:opacity-100 duration-200">
              x
            </button>
          </span>
        </section>
      </span>
      <section className="flex flex-col gap-5 p-10">
        <section className="flex justify-between">
          <h1 className="font-bold text-lg">Information</h1>
          <button
            onClick={() => {
              setInfoOpacity("opacity-100 left-1/2 w-[95%]");
            }}
            type="button"
            className="bg-slate-50 py-2 px-4 font-bold rounded-lg shadow-sm"
          >
            Edit
          </button>
        </section>
        <span className="flex flex-col gap-6 my-5">
          <section className="grid grid-cols-3 gap-10">
            <input
              type="text"
              readOnly
              value="Last Name"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="First Name"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="Middle Name"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
          </section>
          <section className="grid grid-cols-4 gap-10">
            <input
              type="text"
              readOnly
              value="Religion"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="Nationality"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="Marital Status"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="Sex"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
          </section>
          <section className="grid grid-cols-3 gap-10">
            <input
              type="text"
              readOnly
              value="Phone Number"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="Telphone Number"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
            <input
              type="text"
              readOnly
              value="Email"
              className="text-lg text-slate-600 font-semibold text-center p-1 rounded-lg border-0 bg-slate-100 shadow-sm "
            />
          </section>
          <FormProvider {...methods}>
            <form
              className={`bg-slate-50 p-5 rounded-lg shadow-sm absolute left-0 transform -translate-x-1/2 -translate-y-1/2 ${infoOpacity} duration-100 flex flex-col gap-5`}
              onSubmit={methods.handleSubmit((data) => {
                console.log(data);
              })}
            >
              <section className="flex justify-between pb-5">
                <p className="font-bold text-xl">Edit Information</p>
                <button
                  className="font-bold hover:text-red-500 p-1"
                  onClick={() => {
                    setInfoOpacity("opacity-0 w-0");
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
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="First Name"
                  {...methods.register("firstName")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  {...methods.register("middleName")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
              </section>
              <section className="grid grid-cols-4 gap-5">
                <input
                  type="text"
                  placeholder="Religion"
                  {...methods.register("religion")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="Nationality"
                  {...methods.register("nationality")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="Marital Status"
                  {...methods.register("maritalStatus")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="Sex"
                  {...methods.register("sex")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
              </section>
              <section className="grid grid-cols-3 gap-5">
                <input
                  type="number"
                  placeholder="Phone Number"
                  {...methods.register("phoneNum")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="Telephone Number"
                  {...methods.register("telNum")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
                <input
                  type="text"
                  placeholder="Email"
                  {...methods.register("email")}
                  className="text-lg h-[40px] text-slate-600 font-semibold text-center p-1 rounded-sm border-0 bg-slate-100 shadow-md "
                />
              </section>
              <section className="flex justify-end">
                <button
                  type="submit"
                  className="bg-slate-400 rounded-lg py-1 px-4"
                >
                  Save
                </button>
              </section>
            </form>
          </FormProvider>
        </span>
      </section>
    </div>
  );
};

export default TestProfile;
