import { useFormContext } from "react-hook-form";

const EFormSchoolYear = () => {
  const methods = useFormContext();

  return (
    <div className="p-10 flex justify-between">
      <div className="flex justify-center items-center w-[200px] h-[100px]">
        <img src="/aclc-logo-text.png" alt="" className="" />
      </div>
      <div className="border-2 py-10 px-5 flex flex-col items-center border-black rounded-md">
        <section className="flex">
          <h1 className="pr-2 pl-2">SCHOOL YEAR : </h1>
          <input
            className="pr-2 pl-2 w-[100px] rounded-lg"
            required
            type="number"
            placeholder="xxxx - xxxx"
            {...methods.register("schoolYear")}
          ></input>
        </section>
        <section className="flex gap-2">
          <input
            className="pl-2 pr-2 "
            type="radio"
            id="1st"
            name="sem"
          ></input>
          <label className="pl-2 pr-2" htmlFor="1st">
            1<sup>st</sup> Semester
          </label>
          <input
            className="radio2 pl-2 pr-2"
            type="radio"
            id="2nd"
            name="sem"
          ></input>
          <label htmlFor="2nd">
            2<sup>nd</sup> Semester
          </label>
        </section>
        <h1 className="pb-0">INITIAL PAYMENT</h1>
        <section className="flex gap-2">
          <div className="grid grid-rows-2">
            <label htmlFor="date" className="pr-2">
              Date :{" "}
            </label>
            <input
              id="date"
              required
              type="date"
              className=" w-[100px] h-[32px] px-3 rounded-lg"
              {...methods.register("date")}
            ></input>
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="orNum" className="pl-2">
              O.R Number :{" "}
            </label>
            <input
              id="orNum"
              required
              className=" w-[100px] h-[32px] pr-3 rounded-lg"
              type="number"
              {...methods.register("orNum")}
            ></input>
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="amount">Amount : </label>
            <input
              id="amount"
              className=" w-[100px] h-[32px] pr-3 rounded-lg"
              required
              type="number"
              {...methods.register("amount")}
            ></input>
          </div>
        </section>
        <section className="flex gap-3 items-center">
          <span className="flex gap-1">
            <input type="radio" className="g" id="BSIT" name="course"></input>
            <label htmlFor="BSIT" className="">
              BSIT
            </label>
          </span>
          <span className="flex gap-1">
            <input type="radio" id="BSCS" name="course"></input>
            <label htmlFor="BSCS">BSCS</label>
          </span>
          <span className="flex gap-1">
            <input type="radio" id="BSBA" name="course"></input>
            <label htmlFor="BSBA">BSBA</label>
          </span>
          <span className="flex gap-1">
            <input type="radio" id="BSHM" name="course"></input>
            <label htmlFor="BSHM">BSHM</label>
          </span>
        </section>
      </div>
    </div>
  );
};

export default EFormSchoolYear;
