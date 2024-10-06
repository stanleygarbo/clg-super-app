import React from "react";

const EformSiblings = () => {
    return (
        <form
            action=""
            className="my-10 pb-4 border-4 flex flex-col border-black "
        >
            <div className="bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black w-[100%]">
                <p>SIBLING'S INFORMATION</p>
            </div>
            <div
                className="grid gap-[10px] py-3 px-5"
                style={{ gridTemplateColumns: "1fr 100px 1fr" }}
            >
                <label htmlFor="" className="text-center">
                    BROTHERS/SISTERS' NAME
                </label>
                <label htmlFor="" className="text-center">
                    AGE
                </label>
                <label htmlFor="" className="text-center">
                    SCHOOL/OCCUPATION
                </label>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </form>
    );
};

export default EformSiblings;
