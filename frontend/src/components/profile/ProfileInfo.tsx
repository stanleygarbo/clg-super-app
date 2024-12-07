import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { studentData } from "../../store/StudentData";

const ProfileInfo = () => {
  const snap = useSnapshot(studentData);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/students" + id);
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <div className="gap-5 grid grid-cols-3">
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="LASTNAME"
            value={snap.lastName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="FIRST NAME"
            value={snap.firstName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="MIDDLE NAME"
            value={snap.middleName}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="TEL NO."
            value={snap.telNum}
          />
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CELLPHONE NO."
            maxLength={11}
            value={snap.phoneNum}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="EMAIL"
            value={snap.email}
          />
        </div>
        <h1>BIRTH'S INFORMATION</h1>
        <div className="grid grid-cols-5 gap-5 ">
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="dd/mm/yyyy"
            value={snap.birthDate}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="PLACE OF BIRTH"
            value={snap.birthPlace}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CITiZENSHIP"
            value={snap.citizenship}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="SEX"
            value={snap.sex}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="RELIGION"
            value={snap.religion}
          />
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        <h1 className="text-start pt-10">SPOUSE'S INFORMATION (IF MARRIED)</h1>

        <div className="grid grid-cols-4 gap-5">
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="LASTNAME"
            value={snap.spouseLasttName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="FIRST NAME"
            value={snap.spouseFirsttName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="MIDDLE NAME"
            value={snap.spouseMiddleName}
          />
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="NO. OF CHILDREN"
            value={snap.spouseNumChild}
          />
        </div>
        <h1>HOME ADDRESS</h1>
        <div className="grid grid-cols-5 gap-5 ">
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="HOUSE NO."
            value={snap.houseNum}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="STREET/BRGY."
            value={snap.street}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CITY"
            value={snap.city}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="PROVINCE"
            value={snap.province}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="DISTRICT"
            value={snap.district}
          />
        </div>
        <h1>CITY ADRESS (IF BOARDING)</h1>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="HOUSE NO."
            value={snap.boardingHouseNum}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="STREET/BRGY."
            value={snap.boardingStreet}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CITY"
            value={snap.boardingCity}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
