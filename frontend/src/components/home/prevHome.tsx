import React from "react";

const PrevHome = () => {
  return (
    <div className="px-[10rem]">
      <div className="text-center text-3xl pt-5 pb-5">
        <h1 className="font-bold">ACLC Courses</h1>
      </div>
      <div className="">
        <h2 className="font-bold pb-4">College</h2>
        <div className="flex flex-row group">
          <div className="w-1 rounded group-hover:bg-blue-500 transition-all"></div>
          <p className="pr-5 pl-2">BSCS</p>
          <article>
            Bachelor of Science in Computer Science (BSCS) is a four-year
            program that includes the study of computing concepts and theories,
            algorithmic foundations, and new developments in computing.
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrevHome;
