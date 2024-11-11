import { useFormContext } from "react-hook-form";

const EformSiblings = () => {
  const methods = useFormContext();

  return (
    <div className="p-3">
      <p className="font-bold pb-2">SIBLING'S INFORMATION</p>
      <div className="flex gap-10 justify-center">
        <section className="flex flex-col gap-2 items-center">
          <h1 className="text-center">BROTHERS/SISTERS' NAME</h1>
          <input
            type="text"
            {...methods.register("siblingName")}
            className="w-[300px] rounded-lg py-1"
          />
          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingName2")}
          />
          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingName3")}
          />
          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingName4")}
          />
          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingName5")}
          />
        </section>
        <section className="flex flex-col gap-2 items-center">
          <h1 className="text-center">AGE</h1>
          <input
            type="text"
            className="w-[150px] rounded-lg py-1"
            {...methods.register("siblingAge")}
          />
          <input
            type="text"
            className="w-[150px] rounded-lg py-1"
            {...methods.register("siblingAge2")}
          />
          <input
            type="text"
            className="w-[150px] rounded-lg py-1"
            {...methods.register("siblingAge3")}
          />
          <input
            type="text"
            className="w-[150px] rounded-lg py-1"
            {...methods.register("siblingAge4")}
          />
          <input
            type="text"
            className="w-[150px] rounded-lg py-1"
            {...methods.register("siblingAge5")}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-center">SCHOOL/OCCUPATION</h1>

          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingSchool")}
          />

          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingSchool2")}
          />

          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingSchool3")}
          />

          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingSchool4")}
          />

          <input
            type="text"
            className="w-[300px] rounded-lg py-1"
            {...methods.register("siblingSchool5")}
          />
        </section>
      </div>
    </div>
  );
};

export default EformSiblings;
