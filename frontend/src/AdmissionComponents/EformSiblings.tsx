import React from "react";

const EformSiblings = () => {
  return (
    <div>
      <div className="p-10 pt-3">
        <form
          action=""
          className="flex-row pb-4 border-4 flex flex-col border-black "
        >
          <div className="bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black w-[100%]">
            <p>SIBLING'S INFORMATION</p>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="grid grid-rows-5 p-5 gap-3 ">
              <label htmlFor="" className="text-center">
                BROTHERS/SISTERS' NAME
              </label>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div className="grid grid-rows-6 gap-3 p-5 w-[]">
              <label htmlFor="" className="text-center">
                AGE
              </label>
              <input type="text" className="" />
              <input type="text" className="" />
              <input type="text" className="" />
              <input type="text" className="" />
              <input type="text" className="" />
            </div>
            <div className="grid grid-rows-6 p-5 gap-3">
              <label htmlFor="" className="text-center">
                SCHOOL/OCCUPATION
              </label>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EformSiblings;
