import React, { useState } from "react";

const PrevHomeTESDA = () => {
  const TESDAcourses = [
    {
      cName: "WAD",
    },
    {
      cName: "HRT",
    },
    {
      cName: "OMT",
    },
    {
      cName: "OAT",
    },
  ];

  return (
    <div className="relative w-full m-auto grid grid-cols-2">
      <div className=" pr-20">
        {/* <h1 className="font-bold pb-2 pt-[90px] text-xl text-start">
          College
          <img src="/line-thin.svg" className="w-36 -ml-5" alt="" />
        </h1> */}
        <h1 className="font-bold pb-2 pt-[90px] text-xl text-start">
          TESDA
          <img src="/line-thin.svg" className="w-28 -ml-5" alt="" />
        </h1>
        {TESDAcourses.map((TESDAcourses, index) => (
          <div
            className="flex group my-5 px-4 py-4 relative hover:bg-blue-50 transition-all duration-[.30s] rounded-tr-xl rounded-br-xl"
            key={index}
          >
            <div className="w-1 h-full rounded group-hover:bg-blue-500 transition-all duration-[.30s] absolute top-0 left-0"></div>
            <div className="ml-2">
              <p className="pr-5 font-bold">{TESDAcourses.cName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevHomeTESDA;
