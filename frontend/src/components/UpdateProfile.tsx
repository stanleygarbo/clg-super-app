import { FormProvider, useForm } from "react-hook-form";

const UpdateProfile = () => {
  const methods = useForm<any>();
  return (
    <FormProvider {...methods}>
      <form
        className="grid gap-10 justify-center mx-20 py-10"
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <section className="flex items-end gap-5 mb-3">
          <img
            src="/"
            alt="Image"
            className="w-[170px] h-[150px] rounded-xl border cover p-3 bg-[#caf0f8] shadow-lg"
          />
          <h1>
            <b>Mheg Ryan T. Limpangog</b>
          </h1>
        </section>
        <span>
          <h1 className="font-bold">Name : </h1>
          <section className="grid grid-cols-3 gap-3">
            <input
              required
              type="text"
              placeholder="Last Name"
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
              {...methods.register("lastName")}
            />
            <input
              required
              type="text"
              placeholder="First Name"
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
              {...methods.register("firstName")}
            />
            <input
              type="text"
              required
              placeholder="Middle Name"
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
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
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
              {...methods.register("email")}
            />
            <input
              type="number"
              placeholder="Contact No."
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
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
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
              {...methods.register("street")}
            />
            <input
              type="text"
              placeholder="City"
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
              {...methods.register("city")}
            />
            <input
              type="text"
              placeholder="Province"
              className="text-center rounded-md border-0 shadow-inner h-[30px] bg-[#caf0f8]"
              {...methods.register("province")}
            />
          </section>
        </span>
        <span className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-red-500/50 hover:bg-red-500 w-[25%] h-[30px] rounded-lg font-bold"
          >
            Save
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default UpdateProfile;
