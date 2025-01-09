import { useSnapshot } from "valtio";
import { studentData } from "../../../store/StudentData";
import { Data } from "../../../store/Data";

const EFormParents = () => {
    const snap = useSnapshot(studentData);
    const isOpen = useSnapshot(Data);

    return (
        <div className="p-3">
            <p className="font-bold sm:text-center md:text-center">
                PARENT'S & GUARDIAN'S INFORMATION
            </p>
            <div className="flex flex-col gap-3 pt-3 px-6 w-full xs:px-0 sm:px-2">
                <h1 className="text-start xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5 font-semibold">
                    FATHER'S INFORMATION
                </h1>

                <div className="gap-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Last Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.lastName}
                            onChange={(e) => {
                                studentData.family.father.lastName =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            First Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.firstName}
                            onChange={(e) => {
                                studentData.family.father.firstName =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Middle Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.middleName}
                            onChange={(e) => {
                                studentData.family.father.middleName =
                                    e.target.value;
                            }}
                        />
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Occupation
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.occupation}
                            onChange={(e) => {
                                studentData.family.father.occupation =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Company Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.company}
                            onChange={(e) => {
                                studentData.family.father.company =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Company Address
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.companyAddress}
                            onChange={(e) => {
                                studentData.family.father.companyAddress =
                                    e.target.value;
                            }}
                        />
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Telephone No.
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.contact.telNum}
                            onChange={(e) => {
                                studentData.family.father.contact.telNum =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Phone No.
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.contact.phoneNum}
                            onChange={(e) => {
                                studentData.family.father.contact.phoneNum =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Email
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.father.contact.email}
                            onChange={(e) => {
                                studentData.family.father.contact.email =
                                    e.target.value;
                            }}
                        />
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-3 pt-3 px-6 w-full xs:px-0 sm:px-2">
                <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
                    MOTHER'S INFORMATION
                </h1>

                <div className="gap-5 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Last Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.lastName}
                            onChange={(e) => {
                                studentData.family.mother.lastName =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            First Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.firstName}
                            onChange={(e) => {
                                studentData.family.mother.firstName =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Middle Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.middleName}
                            onChange={(e) => {
                                studentData.family.mother.middleName =
                                    e.target.value;
                            }}
                        />
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Occupation
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.occupation}
                            onChange={(e) => {
                                studentData.family.mother.occupation =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Company Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.company}
                            onChange={(e) => {
                                studentData.family.mother.company =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Company Address
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.companyAddress}
                            onChange={(e) => {
                                studentData.family.mother.companyAddress =
                                    e.target.value;
                            }}
                        />
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Telephone No.
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.contact.telNum}
                            onChange={(e) => {
                                studentData.family.mother.contact.telNum =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Phone No.
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.contact.phoneNum}
                            onChange={(e) => {
                                studentData.family.mother.contact.phoneNum =
                                    e.target.value;
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Email
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.mother.contact.email}
                            onChange={(e) => {
                                studentData.family.mother.contact.email =
                                    e.target.value;
                            }}
                        />
                    </span>
                </div>
            </div>

            <div className="flex w-full px-6 pt-3 flex-col gap-5 xs:px-0 sm:px-2">
                <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
                    GUARDIAN'S INFORMATION
                </h1>

                <div className="grid grid-cols-4 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Last Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.lastName}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.lastName =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            First Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.firstName}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.firstName =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Middle Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.middleName}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.middleName =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Relationship
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.relationship}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.relationship =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Occupation
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.occupation}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.occupation =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Company Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.company}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.company =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Company Address
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.companyAddress}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.companyAddress =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Telephon No.
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.contact.telNum}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.contact.telNum =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Phone No.
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="number"
                            value={snap.family.guardian?.contact.phoneNum}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.contact.phoneNum =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Email
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.contact.email}
                            onChange={(e) => {
                                if (studentData.family.guardian) {
                                    studentData.family.guardian.contact.email =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                </div>
                <h1 className="text-start font-semibold xs:text-center sm:text-center xs:py-5 sm:py-5 md:text-center md:py-5">
                    SPOUSE'S INFORMATION ( IF MARRIED )
                </h1>
                <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Last Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.spouse?.lastName}
                            onChange={(e) => {
                                if (studentData.family.guardian?.spouse) {
                                    studentData.family.guardian.spouse.lastName =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            First Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.spouse?.firstName}
                            onChange={(e) => {
                                if (studentData.family.guardian?.spouse) {
                                    studentData.family.guardian.spouse.firstName =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                    <span
                        className={`${
                            isOpen ? "xs:-z-50 sm:-z-50" : ""
                        } relative`}
                    >
                        <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                            Middle Name
                        </p>
                        <input
                            className="border border-slate-500 h-[30px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                            type="text"
                            value={snap.family.guardian?.spouse?.middleName}
                            onChange={(e) => {
                                if (studentData.family.guardian?.spouse) {
                                    studentData.family.guardian.spouse.middleName =
                                        e.target.value;
                                }
                            }}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EFormParents;
