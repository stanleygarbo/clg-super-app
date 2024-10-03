import React from "react";

const EFormParents = () => {
    return (
        <div className="">
            <div className="p-10">
                <form
                    action=""
                    className="pb-10 border-4 flex flex-col items-center border-black"
                >
                    <div className="bg-slate-900 text-white text-center pb-5 pt-5 border-b-4 border-black w-[100%]">
                        <p>PARENT'S & GUARDIAN'S INFORMATION</p>
                    </div>
                    <div className="flex flex-col gap-3 pt-3 px-6 w-full">
                        <label htmlFor="" className="text-start">
                            FATHER'S INFORMATION
                        </label>

                        <div className="gap-5 grid grid-cols-3">
                            <input type="text" className="pl-5" placeholder="SURNAME" />
                            <input type="text" className="pl-5" placeholder="FIRST NAME" />
                            <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
                        </div>
                        <div className="grid grid-cols-3 gap-5 ">
                            <input type="text" className="pl-5" placeholder="OCCUPATION" />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="COMPANY/OFFICE NAME"
                            />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="COMPANY ADDRESS"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-5 ">
                            <input type="number" className="pl-5" placeholder="TEL NO." />
                            <input type="number" className="pl-5" placeholder="FAX NO." />
                            <input
                                type="number"
                                className="pl-5"
                                placeholder="CELLPHONE NO."
                            />
                            <input type="text" className="pl-5" placeholder="EMAIL" />
                        </div>
                    </div>

                    <div className="w-full px-6 flex flex-col gap-3">
                        <label htmlFor="" className="text-start pt-10">
                            MOTHER'S INFORMATION
                        </label>

                        <div className="grid grid-cols-3 gap-5">
                            <input type="text" className="pl-5" placeholder="SURNAME" />
                            <input type="text" className="pl-5" placeholder="FIRST NAME" />
                            <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
                        </div>
                        <div className="grid grid-cols-3 gap-5 ">
                            <input type="text" className="pl-5" placeholder="OCCUPATION" />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="COMPANY/OFFICE NAME"
                            />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="COMPANY ADDRESS"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-5 ">
                            <input type="number" className="pl-5" placeholder="TEL NO." />
                            <input type="number" className="pl-5" placeholder="FAX NO." />
                            <input
                                type="number"
                                className="pl-5"
                                placeholder="CELLPHONE NO."
                            />
                            <input type="text" className="pl-5" placeholder="EMAIL" />
                        </div>
                    </div>

                    <div className="flex w-full px-6 flex-col gap-3">
                        <label htmlFor="" className="text-start pt-10">
                            GUARDIAN'S INFORMATION
                        </label>

                        <div className="grid grid-cols-3 gap-5">
                            <input type="text" className="pl-5" placeholder="SURNAME" />
                            <input type="text" className="pl-5" placeholder="FIRST NAME" />
                            <input type="text" className="pl-5" placeholder="MIDDLE NAME" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 ">
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="SPOUSE'S NAME (IF GUARDIAN IS MARRIED)"
                            />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="RELATIONSHIP TO THE STUDENT"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-5 ">
                            <input type="text" className="pl-5" placeholder="OCCUPATION" />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="COMPANY/OFFICE NAME"
                            />
                            <input
                                type="text"
                                className="pl-5"
                                placeholder="COMPANY ADDRESS"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-5 ">
                            <input type="number" className="pl-5" placeholder="TEL NO." />
                            <input type="number" className="pl-5" placeholder="FAX NO." />
                            <input
                                type="number"
                                className="pl-5"
                                placeholder="CELLPHONE NO."
                            />
                            <input type="text" className="pl-5" placeholder="EMAIL" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EFormParents;
