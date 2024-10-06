import React from "react";

import { proxy, useSnapshot } from "valtio";
import EFormParents from "./EFormParents";
import EformSiblings from "./EformSiblings";
import SampleForm from "./SampleForm";
import { FormProvider, useForm } from "react-hook-form";

const state = proxy({ count: 0, text: "hello", sem: 0, course: " " });

const EForm = () => {
  const snap = useSnapshot(state);
  const methods = useForm<any>();

  return (
    //Top
    <div className="m-auto p-10">
      {/* SchoolYear */}
      <SampleForm />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <section>
            <div className="flex flex-col items-center">
              {/* SchoolYear */}
              <div className="flex flex-row pt-3 pb-3">
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
                  placeholder="xxxx"
                ></input>
              </div>
              {/* SchoolYearEnd */}
            </div>
            <div className="flex flex-col items-center pb-5">
              <div className="flex flex-row">
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
              </div>
            </div>
          </section>
          {/* Payment */}
          <div className="flex flex-col items-center m-auto pt-10">
            <h1 className="pb-0">INITIAL PAYMENT</h1>
            <section className="flex flex-row gap-3">
              <div className="flex flex-col pb-0">
                <label className="pr-2">Date : </label>
                <input
                  required
                  type="date"
                  className=" w-[9rem] h-[32px] pr-3"
                  {...methods.register("date")}
                ></input>
              </div>
              <div className="flex flex-col pb-0">
                <label className="pl-2">O.R Number : </label>

                <input
                  required
                  className=" w-[9rem] h-[32px] pr-3"
                  type="number"
                  {...methods.register("OrderNumber")}
                ></input>
              </div>
              <div className="flex flex-col pb-0">
                <label>Amount : </label>
                <input
                  className=" w-[9rem] h-[32px] pr-3"
                  required
                  type="number"
                  {...methods.register("amount")}
                ></input>
              </div>
            </section>
          </div>
          {/* Courses */}
          <div className="flex flex-col items-center Courses py-5 ">
            <section className="flex flex-row gap-5 justify-center w-[500px]">
              <div>
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
                ></input>
                <label>BSIT</label>
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
            </section>
          </div>
          <EFormParents />
          <EformSiblings />
          <button type="submit" className="w-[300px] py-2 bg-blue-500">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default EForm;
