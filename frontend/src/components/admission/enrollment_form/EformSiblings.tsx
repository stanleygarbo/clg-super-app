import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { Data } from "../../../store/Data";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

interface Sibling {
  name: string;
  age: string;
  occupation: string;
}

const EformSiblings = () => {
  const snap = useSnapshot(studentData);
  const isOpen = useSnapshot(Data);

  const [siblings, setSiblings] = useState<Sibling[]>([
    { name: "", age: "", occupation: "" },
  ]);

  const handleChange = (index: number, field: keyof Sibling, value: string) => {
    const updatedSiblings = [...siblings];
    updatedSiblings[index][field] = value;
    setSiblings(updatedSiblings);
  };

  const addSibling = () => {
    setSiblings([...siblings, { name: "", age: "", occupation: "" }]);
  };

  const removeSibling = (index: number) => {
    const updatedSiblings = siblings.filter((_, i) => i !== index);
    setSiblings(updatedSiblings);
  };

  studentData.siblings = siblings;
  console.log(snap.siblings);

  return (
    <div className="p-3 duration-200">
      <p className="font-bold pb-2 xs:text-center xs:pb-5 sm:text-center sm:pb-5 md:pb-5 md:text-center">
        SIBLING'S INFORMATION
      </p>
      <div className="flex flex-col gap-3 px-6">
        <section className="">
          {siblings.map((sibling, index) => (
            <div key={index} className="flex flex-col relative">
              <div className="grid grid-cols-3 gap-3 py-5">
                <span
                  className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}
                >
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Name
                  </p>
                  <input
                    className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    value={sibling.name}
                    onChange={(e) => {
                      handleChange(index, "name", e.target.value);
                    }}
                  />
                </span>
                <span
                  className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}
                >
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Age
                  </p>
                  <input
                    className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="number"
                    value={sibling.age}
                    onChange={(e) => {
                      handleChange(index, "age", e.target.value);
                    }}
                  />
                </span>
                <span
                  className={`${isOpen ? "xs:-z-50 sm:-z-50" : ""} relative`}
                >
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Occupation/School
                  </p>
                  <input
                    className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    value={sibling.occupation}
                    onChange={(e) => {
                      handleChange(index, "occupation", e.target.value);
                    }}
                  />
                </span>
                {siblings.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSibling(index)}
                    className="text-white text-xl shadow-sm shadow-red-600/50 mt-2 rounded-md bg-red-600 p-1 absolute transform -translate-x-1 -translate-y-5 top-0 right-0 hover:scale-105 active:scale-95 duration-200"
                  >
                    <MdDeleteForever />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addSibling}
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md shadow-sm hover:shadow-blue-600/50 hover:shadow-md hover:bg-blue-600 duration-200"
          >
            Add Another Sibling
          </button>
          {/* <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit
          </button> */}
        </section>
      </div>
    </div>
  );
};

export default EformSiblings;
