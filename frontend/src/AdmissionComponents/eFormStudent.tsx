import React from "react";

const EFormStudent = () => {
  return (
    <div className="">
      <div className="p-10">
        <form
          action=""
          className="pb-10 border-4 flex flex-col items-center border-black"
        >
          <div className="bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black w-[100%]">
            <p>STUDENT'S INFORMATION</p>
          </div>
          <div className="flex flex-col gap-3 pt-3 px-6 w-full">
            <div className="gap-5 grid grid-cols-3">
              <input type="text" className="pl-5" placeholder="SURNAME" />
              <input type="text" className="pl-5" placeholder="FIRST NAME" />
              <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
            </div>
            <div className="grid grid-cols-3 gap-5 ">
              <input type="number" className="pl-5" placeholder="TEL NO." />
              <input
                type="number"
                className="pl-5"
                placeholder="CELLPHONE NO."
              />
              <input type="text" className="pl-5" placeholder="EMAIL" />
            </div>
            <label>BIRTH'S INFORMATION</label>
            <div className="grid grid-cols-5 gap-5 ">
              <input type="date" className="pl-5" />
              <input
                type="text"
                className="pl-5"
                placeholder="PLACE OF BIRTH"
              />
              <input type="text" className="pl-5" placeholder="CITiZENSHIP" />
              <input type="text" className="pl-5" placeholder="GENDER" />
              <input type="text" className="pl-5" placeholder="RELIGION" />
            </div>
          </div>

          <div className="w-full px-6 flex flex-col gap-3">
            <label htmlFor="" className="text-start pt-10">
              SPOUSE'S INFORMATION (IF MARRIED)
            </label>

            <div className="grid grid-cols-4 gap-5">
              <input type="text" className="pl-5" placeholder="SURNAME" />
              <input type="text" className="pl-5" placeholder="FIRST NAME" />
              <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
              <input
                type="text"
                className="pl-5"
                placeholder="NO. OF CHILDREN"
              />
            </div>
            <label htmlFor="">HOME ADDRESS</label>
            <div className="grid grid-cols-5 gap-5 ">
              <input type="text" className="pl-5" placeholder="HOUSE NO." />
              <input type="text" className="pl-5" placeholder="STREET/BRGY." />
              <input
                type="text"
                className="pl-5"
                placeholder="CITY/MUNICIPALITY"
              />
              <input type="text" className="pl-5" placeholder="PROVINCE" />
              <input
                type="text"
                className="pl-5"
                placeholder="DISTRICT (IF APPLICABLE)"
              />
            </div>

            <div className="grid grid-cols-4 gap-5 ">
              <label htmlFor="">CITY ADRESS (IF BOARDING)</label>
              <input type="text" className="pl-5" placeholder="HOUSE NO." />
              <input type="text" className="pl-5" placeholder="STREET/BRGY." />
              <input
                type="text"
                className="pl-5"
                placeholder="CITY/MUNICIPALITY"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EFormStudent;
