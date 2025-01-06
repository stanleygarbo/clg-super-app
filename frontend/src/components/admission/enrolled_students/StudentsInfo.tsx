import { useParams } from "react-router-dom";
import { studentData } from "../../../store/StudentData";
import { useEffect, useState } from "react";

const StudentsInfo = () => {
    const { id } = useParams();
    const [student, setStudent] = useState<typeof studentData>();

    const fetchStudents = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/students/${id}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch students");
            }

            const data = await response.json();
            setStudent(data.studentData);
            console.log(student);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <form className="mb-10 mt-5 flex flex-col border rounded-lg w-[1100px] shadow-md gap-5">
            <h1 className="text-xl font-bold mb-10 rounded-t-lg border-b text-center bg-slate-50 py-5">
                Information
            </h1>
            <div className="flex flex-col gap-5 px-10 pb-10">
                <section className="flex justify-between">
                    <h1 className="text-md font-bold text-red-500">
                        Student Information :{" "}
                    </h1>
                    <span className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            USN/LRN
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.usn}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </span>
                </section>

                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Last Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.lastName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            First Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.firstName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Middle Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.middleName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Course
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.course}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Year
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.year}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-4 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            USN
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.usn}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Telelphone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.telNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Phone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.phoneNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Email
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.email}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Birth Date
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.birthDate}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Birth Place
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.birthPlace}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Citizenship
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.citizenship}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Sex
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.sex}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Religion
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.personalInfo.religion}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-sm font-bold text-red-500">
                    Student Spouse Information :{" "}
                </h1>
                <span className="grid grid-cols-4 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Last Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.spouse?.lastName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            First Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.spouse?.firstName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Middle Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.spouse?.middleName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            No. of Children
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.spouse?.numChildren || "0"}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-md font-bold text-red-500">
                    Home Address :{" "}
                </h1>
                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            House No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.permanent.houseNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Brgy./Street
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.permanent.street}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            City
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.permanent.city}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Province
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.permanent.province}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            District
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.permanent.district}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-md font-bold text-red-500">
                    Address ( if Boarding ) :{" "}
                </h1>
                <span className="grid grid-cols-4 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            House No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.boarding?.houseNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Brgy./Street
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.boarding?.street}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            City
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.boarding?.city}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            District
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.address.boarding?.city}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-md font-bold text-red-500">
                    Father Information :{" "}
                </h1>
                <span className="grid grid-cols-4 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Last Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.lastName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            First Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.firstName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Middle Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.middleName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Company Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.company}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Company Address
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.companyAddress}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Telephone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.contact.telNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Phone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.contact.phoneNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Email
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.father.contact.email}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-md font-bold text-red-500">
                    Mother Information :{" "}
                </h1>
                <span className="grid grid-cols-4 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Last Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.lastName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            First Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.firstName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Middle Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.middleName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Company Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.company}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Company Address
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.companyAddress}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Telephone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.contact.telNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Phone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.contact.phoneNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Email
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.mother.contact.email}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-md font-bold text-red-500">
                    Guardian Information :{" "}
                </h1>
                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Last Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.lastName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            First Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.firstName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Middle Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.middleName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Relationship
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.relationship}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-5 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Company Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.company}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Company Address
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.companyAddress}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Telephone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.contact.telNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Phone No.
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.contact.phoneNum}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Email
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.contact.email}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-sm font-bold text-red-500">
                    Guardian Spouse Information :{" "}
                </h1>

                <span className="grid grid-cols-3 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Last Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.spouse?.lastName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            First Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.spouse?.firstName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Middle Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.family.guardian?.spouse?.middleName}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <h1 className="text-md font-bold text-red-500">
                    Sibling Information :{" "}
                </h1>

                <span className="grid grid-cols-3 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Full Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[0]?.name}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Age
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[0]?.age}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            School/Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[0]?.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-3 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Full Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[1]?.name}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Age
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[1]?.age}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            School/Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[1]?.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-3 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Full Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[2]?.name}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Age
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[2]?.age}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            School/Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[2]?.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-3 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Full Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[3]?.name}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Age
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[3]?.age}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            School/Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[3]?.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
                <span className="grid grid-cols-3 gap-2">
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Full Name
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[4]?.name}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            Age
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[4]?.age}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                    <section className="relative rounded-lg">
                        <p className="text-xs font-bold absolute text-slate-600 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                            School/Occupation
                        </p>
                        <input
                            type="text"
                            readOnly
                            value={student?.siblings[4]?.occupation}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
            </div>
        </form>
    );
};

export default StudentsInfo;
