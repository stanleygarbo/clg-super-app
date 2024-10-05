import React, { useState } from "react";

const EformSiblings = () => {
  const [studentSiblingFullName1, setStudentSiblingFullName1] = useState("");
  const [studentSiblingFullName2, setStudentSiblingFullName2] = useState("");
  const [studentSiblingFullName3, setStudentSiblingFullName3] = useState("");
  const [studentSiblingFullName4, setStudentSiblingFullName4] = useState("");
  const [studentSiblingFullName5, setStudentSiblingFullName5] = useState("");
  const [studentSiblingAge1, setStudentSiblingAge1] = useState("");
  const [studentSiblingAge2, setStudentSiblingAge2] = useState("");
  const [studentSiblingAge3, setStudentSiblingAge3] = useState("");
  const [studentSiblingAge4, setStudentSiblingAge4] = useState("");
  const [studentSiblingAge5, setStudentSiblingAge5] = useState("");
  const [studentSiblingSchool1, setStudentSiblingSchool1] = useState("");
  const [studentSiblingSchool2, setStudentSiblingSchool2] = useState("");
  const [studentSiblingSchool3, setStudentSiblingSchool3] = useState("");
  const [studentSiblingSchool4, setStudentSiblingSchool4] = useState("");
  const [studentSiblingSchool5, setStudentSiblingSchool5] = useState("");

  return (
    <div>
      <div className="p-10 pt-3">
        <form
          action=""
          className="flex-row pb-4 border-4 flex flex-col border-black "
        >
          <div className="bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black">
            <p>SIBLING'S INFORMATION</p>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="grid grid-rows-5 p-5 gap-3 ">
              <label htmlFor="" className="text-center">
                BROTHERS/SISTERS' NAME
              </label>
              <input
                type="text"
                value={studentSiblingFullName1}
                onChange={(e) => {
                  setStudentSiblingFullName1(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingFullName2}
                onChange={(e) => {
                  setStudentSiblingFullName2(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingFullName3}
                onChange={(e) => {
                  setStudentSiblingFullName3(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingFullName4}
                onChange={(e) => {
                  setStudentSiblingFullName4(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingFullName5}
                onChange={(e) => {
                  setStudentSiblingFullName5(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-rows-6 gap-3 p-5 w-[]">
              <label htmlFor="" className="text-center">
                AGE
              </label>
              <input
                type="text"
                value={studentSiblingAge1}
                onChange={(e) => {
                  setStudentSiblingAge1(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingAge2}
                onChange={(e) => {
                  setStudentSiblingAge2(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingAge3}
                onChange={(e) => {
                  setStudentSiblingAge3(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingAge4}
                onChange={(e) => {
                  setStudentSiblingAge4(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingAge5}
                onChange={(e) => {
                  setStudentSiblingAge5(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-rows-6 p-5 gap-3">
              <label htmlFor="" className="text-center">
                SCHOOL/OCCUPATION
              </label>
              <input
                type="text"
                value={studentSiblingSchool1}
                onChange={(e) => {
                  setStudentSiblingSchool1(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingSchool2}
                onChange={(e) => {
                  setStudentSiblingSchool2(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingSchool3}
                onChange={(e) => {
                  setStudentSiblingSchool3(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingSchool4}
                onChange={(e) => {
                  setStudentSiblingSchool4(e.target.value);
                }}
              />
              <input
                type="text"
                value={studentSiblingSchool5}
                onChange={(e) => {
                  setStudentSiblingSchool5(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EformSiblings;
