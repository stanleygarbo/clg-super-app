import { useFormContext } from "react-hook-form";

const EformSiblings = () => {
  const methods = useFormContext();

  return (
    <div className="p-3">
      <p className="font-bold">SIBLING'S INFORMATION</p>
      <div
        className="grid gap-[10px] px-6 py-3"
        style={{
          gridTemplateColumns: "minmax(10px, 1fr) 100px minmax(10px, 1fr)",
        }}
      >
        <h1 className="text-center">BROTHERS/SISTERS' NAME</h1>
        <h1 className="text-center">AGE</h1>
        <h1 className="text-center">SCHOOL/OCCUPATION</h1>
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingName")}
          className="min-w-1"
        />
        <input type="text" placeholder="" {...methods.register("siblingAge")} />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingSchool")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingName2")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingAge2")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingSchool2")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingName3")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingAge3")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingSchool3")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingName4")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingAge4")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingSchool4")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingName5")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingAge5")}
        />
        <input
          type="text"
          placeholder=""
          {...methods.register("siblingSchool5")}
        />
      </div>
    </div>
  );
};

export default EformSiblings;
