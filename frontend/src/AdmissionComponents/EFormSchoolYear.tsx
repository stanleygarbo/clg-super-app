import { proxy } from "valtio";
import { useFormContext } from "react-hook-form";

const state = proxy({ count: 0, text: "hello", sem: 0, course: " " });

const EFormSchoolYear = () => {
  const methods = useFormContext();

  return (
    <div className="m-auto p-10 grid grid-cols-2 items-end">
      <div>
        <img src="./aclc-logo.png" alt="" />
      </div>
      <div className="m-auto border-2 py-10 px-5 flex flex-col items-center border-black">
        <section className="flex">
          <label className="pr-2 pl-2">SCHOOL YEAR : </label>
          <input
            className="pr-2 pl-2 w-[3rem]"
            required
            type="number"
            placeholder="xxxx"
            {...methods.register("schoolYear")}
          ></input>
          <p className="pl-2 pr-2">-</p>
          <input
            className="pr-2 pl-2 w-[3rem]"
            required
            type="number"
            {...methods.register("schoolYear2")}
            placeholder="xxxx"
          ></input>
        </section>
        <section className="flex gap-2">
          <input
            className="radio1 pl-2 pr-2"
            type="checkbox"
            checked={state.sem === 1}
            onChange={() => {
              if (state.sem === 1) {
                state.sem = 0;
              } else {
                state.sem = 1;
              }
            }}
          ></input>
          <label className="pl-2 pr-2" htmlFor="radio1">
            1<sup>st</sup> Semester
          </label>
          <input
            className="radio2 pl-2 pr-2"
            type="checkbox"
            checked={state.sem === 2}
            onChange={() => {
              if (state.sem === 2) {
                state.sem = 0;
              } else {
                state.sem = 2;
              }
            }}
          ></input>
          <label htmlFor="radio2">
            2<sup>nd</sup> Semester
          </label>
        </section>
        <h1 className="pb-0">INITIAL PAYMENT</h1>
        <section className="flex gap-2">
          <div className="grid grid-rows-2">
            <label className="pr-2">Date : </label>
            <input
              required
              type="date"
              className=" w-[9rem] h-[32px] pr-3"
              {...methods.register("date")}
            ></input>
          </div>
          <div className="grid grid-rows-2">
            <label className="pl-2">O.R Number : </label>
            <input
              required
              className=" w-[9rem] h-[32px] pr-3"
              type="number"
              {...methods.register("orNum")}
            ></input>
          </div>
          <div className="grid grid-rows-2">
            <label>Amount : </label>
            <input
              className=" w-[9rem] h-[32px] pr-3"
              required
              type="number"
              {...methods.register("amount")}
            ></input>
          </div>
        </section>
        <section className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={state.course === "BSIT"}
            onChange={() => {
              if (state.course === "BSIT") {
                state.course = " ";
              } else {
                state.course = "BSIT";
              }
            }}
            className="g"
            id="BSIT"
          ></input>
          <label htmlFor="BSIT" className="">
            BSIT
          </label>
          <input
            type="checkbox"
            checked={state.course === "BSCS"}
            onChange={() => {
              if (state.course === "BSCS") {
                state.course = " ";
              } else {
                state.course = "BSCS";
              }
            }}
          ></input>
          <label>BSCS</label>
          <input
            type="checkbox"
            checked={state.course === "BSBA"}
            onChange={() => {
              if (state.course === "BSBA") {
                state.course = " ";
              } else {
                state.course = "BSBA";
              }
            }}
          ></input>
          <label>BSBA</label>
          <input
            type="checkbox"
            checked={state.course === "BSHM"}
            onChange={() => {
              if (state.course === "BSHM") {
                state.course = " ";
              } else {
                state.course = "BSHM";
              }
            }}
          ></input>
          <label>BSHM</label>
        </section>
      </div>
    </div>
  );
};

export default EFormSchoolYear;
