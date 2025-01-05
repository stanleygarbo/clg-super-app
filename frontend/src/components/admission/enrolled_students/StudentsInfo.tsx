import { useParams } from "react-router-dom";
import { studentData } from "../../../store/StudentData";
import { useEffect, useState } from "react";

const StudentsInfo = () => {
    const { id } = useParams();
    const [students, setStudents] = useState<typeof datas>();
    const [loading, setLoading] = useState<boolean>(true);
    const datas = { id, studentData };

    const fetchStudents = async () => {
        console.log(id);
        try {
            const response = await fetch(
                "http://localhost:8000/students/" + id
            );
            if (!response.ok) {
                throw new Error("Failed to fetch students");
            }

            const data: typeof datas = await response.json();
            setStudents(data);
            loading;
            console.log(students);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
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
                            value={students?.studentData.usn}
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
                            value={students?.studentData.lastName}
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
                            value={students?.studentData.firstName}
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
                            value={students?.studentData.middleName}
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
                            value={students?.studentData.course}
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
                            value={students?.studentData.year}
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
                            value={students?.studentData.usn}
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
                            value={students?.studentData.telNum}
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
                            value={students?.studentData.phoneNum}
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
                            value={students?.studentData.email}
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
                            value={students?.studentData.birthDate}
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
                            value={students?.studentData.birthPlace}
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
                            value={students?.studentData.citizenship}
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
                            value={students?.studentData.sex}
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
                            value={students?.studentData.religion}
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
                            value={students?.studentData.spouseLasttName}
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
                            value={students?.studentData.spouseFirsttName}
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
                            value={students?.studentData.spouseMiddleName}
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
                            value={students?.studentData.spouseNumChild}
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
                            value={students?.studentData.houseNum}
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
                            value={students?.studentData.street}
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
                            value={students?.studentData.city}
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
                            value={students?.studentData.province}
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
                            value={students?.studentData.district}
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
                            value={students?.studentData.boardingHouseNum}
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
                            value={students?.studentData.boardingStreet}
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
                            value={students?.studentData.boardingCity}
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
                            value={students?.studentData.boardingCity}
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
                            value={students?.studentData.fatherLastName}
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
                            value={students?.studentData.fatherFirstName}
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
                            value={students?.studentData.fatherMiddleName}
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
                            value={students?.studentData.fatherOccupation}
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
                            value={students?.studentData.fatherCompany}
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
                            value={students?.studentData.fatherCompanyAddress}
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
                            value={students?.studentData.fatherTelNum}
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
                            value={students?.studentData.fatherPhoneNum}
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
                            value={students?.studentData.fatherEmail}
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
                            value={students?.studentData.motherLastName}
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
                            value={students?.studentData.motherFirstName}
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
                            value={students?.studentData.motherMiddleName}
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
                            value={students?.studentData.motherOccupation}
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
                            value={students?.studentData.motherCompany}
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
                            value={students?.studentData.motherCompanyAddress}
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
                            value={students?.studentData.motherTelNum}
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
                            value={students?.studentData.motherPhoneNum}
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
                            value={students?.studentData.motherEmail}
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
                            value={students?.studentData.guardianLastName}
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
                            value={students?.studentData.guardianFirstName}
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
                            value={students?.studentData.guardianMiddleName}
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
                            value={students?.studentData.guardianOccupation}
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
                            value={students?.studentData.guardianRelationship}
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
                            value={students?.studentData.guardianCompany}
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
                            value={students?.studentData.guardianCompanyAddress}
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
                            value={students?.studentData.guardianTelNum}
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
                            value={students?.studentData.guardianPhoneNum}
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
                            value={students?.studentData.guardianEmail}
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
                            value={students?.studentData.guardianSpouseLastName}
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
                            value={
                                students?.studentData.guardianSpouseFirstName
                            }
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
                            value={
                                students?.studentData.guardianSpouseMiddleName
                            }
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
                            value={students?.studentData.siblingName}
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
                            value={students?.studentData.siblingAge}
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
                            value={students?.studentData.siblingOccupation}
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
                            value={students?.studentData.siblingName2}
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
                            value={students?.studentData.siblingAge2}
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
                            value={students?.studentData.siblingOccupation2}
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
                            value={students?.studentData.siblingName3}
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
                            value={students?.studentData.siblingAge3}
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
                            value={students?.studentData.siblingOccupation3}
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
                            value={students?.studentData.siblingName4}
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
                            value={students?.studentData.siblingAge4}
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
                            value={students?.studentData.siblingOccupation4}
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
                            value={students?.studentData.siblingName5}
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
                            value={students?.studentData.siblingAge5}
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
                            value={students?.studentData.siblingOccupation5}
                            className="border border-slate-500 h-[35px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden px-1"
                        />
                    </section>
                </span>
            </div>
        </form>
    );
};

export default StudentsInfo;
