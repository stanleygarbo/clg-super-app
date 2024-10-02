import React from "react";

import { proxy, useSnapshot } from "valtio";

const state = proxy({ count: 0, text: "hello", sem: 0, course: 0 });

const EForm = () => {
  const snap = useSnapshot(state);

  return (
    //Top
    <div className="m-auto p-10">
      {/* SchoolYear */}

      <form>
        <div className="flex flex-row">
          <label className="pr-2 pl-2">SCHOOL YEAR</label>
          <input className="pr-2 pl-2 w-[15%]" required type="number"></input>
          <p>-</p>
          <input className="pr-2 pl-2 w-[15%]" required type="number"></input>
        </div>
        <input
          className="radio1 pl-2 pr-2"
          type="checkbox"
          required
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
          required
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
      </form>
      {/* Payment */}
      <div className="m-auto pt-10">
        <h1>INITIAL PAYMENT</h1>
        <form className="flex flex-col">
          <label>Date : </label>
          <input required type="date" className=" w-[20%]"></input>
          <label htmlFor="radio-2">O.R Number : </label>
          <input required type="number"></input>
          <label>Amount : </label>
          <input required type="number"></input>
        </form>
      </div>
      {/* Courses */}
      <div className="Courses">
        <form>
          <input required type="checkbox" checked></input>
        </form>
      </div>
    </div>
  );
};

export default EForm;
