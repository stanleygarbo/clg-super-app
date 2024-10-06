import React, { useState } from "react";

const EFormStudent = () => {
  const [studentLastName, setStudentLastName] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentMiddleName, setStudentMiddleName] = useState("");
  const [studentTelNum, setstudentTelNum] = useState("");
  const [studentphoneNum, setStudentphoneNum] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentBirthDate, setStudentBirthDate] = useState("");
  const [studentBirthPlace, setStudentBirthPlace] = useState("");
  const [studentCitizenship, setStudentCitizenship] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [studentReligion, setStudentReligion] = useState("");
  const [spouseLastName, setSpouseLastName] = useState("");
  const [spouseFirstName, setSpouseFirstName] = useState("");
  const [spouseMiddleName, setSpouseMiddleName] = useState("");
  const [spouseNumChild, setSpouseNumChild] = useState("");
  const [studentHouseNum, setStudentHouseNum] = useState("");
  const [studentStreet, setStudentStreet] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [studentProvince, setStudentProvince] = useState("");
  const [studentDistrict, setStudentDistrict] = useState("");
  const [studentBoardingHouseNum, setStudentBoardingHouseNum] = useState("");
  const [studentBoardingStreet, setStudentBoardingStreet] = useState("");
  const [studentBoardingCity, setStudentBoardingCity] = useState("");

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
              <input
                type="text"
                className="pl-5"
                placeholder="LASTNAME"
                value={studentLastName}
                onChange={(e) => {
                  setStudentLastName(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="FIRST NAME"
                value={studentFirstName}
                onChange={(e) => {
                  setStudentFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="MIDDLE NAME"
                value={studentMiddleName}
                onChange={(e) => {
                  setStudentMiddleName(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-5 ">
              <input
                type="number"
                className="pl-5"
                placeholder="TEL NO."
                value={studentTelNum}
                onChange={(e) => {
                  setstudentTelNum(e.target.value);
                }}
              />
              <input
                type="number"
                className="pl-5"
                placeholder="CELLPHONE NO."
                max={11}
                value={studentphoneNum}
                onChange={(e) => {
                  setStudentphoneNum(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="EMAIL"
                value={studentEmail}
                onChange={(e) => {
                  setStudentEmail(e.target.value);
                }}
              />
            </div>
            <label>BIRTH'S INFORMATION</label>
            <div className="grid grid-cols-5 gap-5 ">
              <input
                type="date"
                className="pl-5"
                value={studentBirthDate}
                onChange={(e) => {
                  setStudentBirthDate(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="PLACE OF BIRTH"
                value={studentBirthPlace}
                onChange={(e) => {
                  setStudentBirthPlace(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="CITiZENSHIP"
                value={studentCitizenship}
                onChange={(e) => {
                  setStudentCitizenship(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="GENDER"
                value={studentGender}
                onChange={(e) => {
                  setStudentGender(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="RELIGION"
                value={studentReligion}
                onChange={(e) => {
                  setStudentReligion(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="w-full px-6 flex flex-col gap-3">
            <label htmlFor="" className="text-start pt-10">
              SPOUSE'S INFORMATION (IF MARRIED)
            </label>

            <div className="grid grid-cols-4 gap-5">
              <input
                type="text"
                className="pl-5"
                placeholder="LASTNAME"
                value={spouseLastName}
                onChange={(e) => {
                  setSpouseLastName(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="FIRST NAME"
                value={spouseFirstName}
                onChange={(e) => {
                  setSpouseFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="MIDDLE NAME"
                value={spouseMiddleName}
                onChange={(e) => {
                  setSpouseMiddleName(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="NO. OF CHILDREN"
                value={spouseNumChild}
                onChange={(e) => {
                  setSpouseNumChild(e.target.value);
                }}
              />
            </div>
            <label htmlFor="">HOME ADDRESS</label>
            <div className="grid grid-cols-5 gap-5 ">
              <input
                type="text"
                className="pl-5"
                placeholder="HOUSE NO."
                value={studentHouseNum}
                onChange={(e) => {
                  setStudentHouseNum(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="STREET/BRGY."
                value={studentStreet}
                onChange={(e) => {
                  setStudentStreet(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="CITY/MUNICIPALITY"
                value={studentCity}
                onChange={(e) => {
                  setStudentCity(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="PROVINCE"
                value={studentProvince}
                onChange={(e) => {
                  setStudentProvince(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="DISTRICT (IF APPLICABLE)"
                value={studentDistrict}
                onChange={(e) => {
                  setStudentDistrict(e.target.value);
                }}
              />
            </div>
            <label htmlFor="">CITY ADRESS (IF BOARDING)</label>
            <div className="grid grid-cols-3 gap-5 ">
              <input
                type="text"
                className="pl-5"
                placeholder="HOUSE NO."
                value={studentBoardingHouseNum}
                onChange={(e) => {
                  setStudentBoardingHouseNum(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="STREET/BRGY."
                value={studentBoardingStreet}
                onChange={(e) => {
                  setStudentBoardingStreet(e.target.value);
                }}
              />
              <input
                type="text"
                className="pl-5"
                placeholder="CITY/MUNICIPALITY"
                value={studentBoardingCity}
                onChange={(e) => {
                  setStudentBoardingCity(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EFormStudent;
