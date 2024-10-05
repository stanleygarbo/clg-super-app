import { proxy, useSnapshot } from "valtio";
import EFormParents from "./EFormParents";
import EformSiblings from "./EformSiblings";
import EFormStudent from "./EFormStudent";

const state = proxy({ count: 0, text: "hello", sem: 0, course: " " });

// const [student, setUserName] = useState("");
// const [userName, setUserName] = useState("");
// const [userName, setUserName] = useState("");
// const [userName, setUserName] = useState("");

const EForm = () => {
  const snap = useSnapshot(state);

  return (
    //Top
    <div className="p-10">
      {/* SchoolYear */}
      <div className="grid grid-cols-2 px-10">
        <div className="grid grid-rows-2 p-10 h-[400px]">
          <div className="grid grid-cols-2 items-center">
            <img src="./aclc-logo.png" alt="" className="p-50" />
            <h1 className="text-center pt-[30%] text-[25px]">
              <b>ACLC COLLEGE OF ORMOC </b>
            </h1>
          </div>
          {/* <div className="pt-5 h-[100px]">
            <strong className="text-[25px] pl-20"> ENROLLMENT FORM</strong>
          </div> */}
        </div>
        <div className="border border-black rounded-xl py-10">
          <form className="flex flex-col items-center">
            <div className="">
              {/* SchoolYear */}
              <div className="grid grid-cols-2 items-center pt-3 pb-3">
                <label className="pr-2 pl-2">SCHOOL YEAR : </label>
                <input
                  className="pr-2 pl-2 w-[4rem] w-[6rem] text-center"
                  required
                  type="text"
                  placeholder="xxxx-xxxx"
                  maxLength={9}
                ></input>
              </div>
              {/* SchoolYearEnd */}
            </div>
            <div className="grid grid-cols items-center pb-5">
              <div className="grid grid-cols-2 justify-center">
                <div>
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
                </div>
                <div>
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
                  <label htmlFor="radio2" className="px-2">
                    2<sup>nd</sup> Semester
                  </label>
                </div>
              </div>
            </div>
          </form>
          {/* Payment */}
          <div className="flex flex-col items-center m-auto pt-10">
            <h1 className="pb-0 text-start">INITIAL PAYMENT</h1>
            <form className="flex flex-row gap-3">
              <div className="flex flex-col pb-0">
                <label className="pr-2">Date : </label>
                <input
                  required
                  type="text"
                  className=" w-[9rem] h-[32px] pl-3 text-center"
                  readOnly
                  value="2012-3-23"
                ></input>
              </div>
              <div className="flex flex-col pb-0">
                <label className="pl-2">O.R Number : </label>
                <input
                  required
                  className=" w-[9rem] h-[32px] pl-3"
                  type="number"
                  readOnly
                ></input>
              </div>
              <div className="flex flex-col pb-0">
                <label>Amount : </label>
                <input
                  className=" w-[9rem] h-[32px] pl-3"
                  required
                  type="number"
                  readOnly
                ></input>
              </div>
            </form>
          </div>
          {/* Courses */}
          <div className="flex flex-col items-center Courses py-5 ">
            <form className="flex flex-row gap-5 justify-center w-[500px]">
              <div>
                <input
                  required
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
                  required
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
                  required
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
                  required
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
            </form>
          </div>
        </div>{" "}
      </div>

      <EFormStudent />
      <EFormParents />
      <EformSiblings />
      <div className="flex flex-row-reverse px-20">
        <button
          className="font-bold bg-blue-400 text-white px-20 border border-red-600 
        hover:text-black hover:border-blue-600 hover:bg-white rounded-xl transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EForm;
