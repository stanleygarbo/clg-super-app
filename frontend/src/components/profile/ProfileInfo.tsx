import { useSnapshot } from "valtio";
import { useParams } from "react-router-dom";
import { studentData } from "../../store/StudentData";
import { useQuery } from "@tanstack/react-query";
import { getEmployee } from "../../api/employee";
import { authState } from "../../store/auth";

const ProfileInfo = () => {
  const snap = useSnapshot(studentData);
  const authSnap = useSnapshot(authState);
  const { id } = useParams();

  // authSnap.user.id

  const query = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployee({ id }),
  });
  // console.log("Query Data: ", query.data);

  return (
    <div>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <div className="gap-5 grid grid-cols-3">
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="LASTNAME"
            value={query.data}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="FIRST NAME"
            value={snap.personalInfo.firstName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="MIDDLE NAME"
            value={snap.personalInfo.middleName}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="TEL NO."
            value={snap.personalInfo.telNum}
          />
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CELLPHONE NO."
            maxLength={11}
            value={snap.personalInfo.phoneNum}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="EMAIL"
            value={snap.personalInfo.email}
          />
        </div>
        <h1>BIRTH'S INFORMATION</h1>
        <div className="grid grid-cols-5 gap-5 ">
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="dd/mm/yyyy"
            value={snap.personalInfo.birthDate}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="PLACE OF BIRTH"
            value={snap.personalInfo.birthPlace}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CITiZENSHIP"
            value={snap.personalInfo.citizenship}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="SEX"
            value={snap.personalInfo.sex}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="RELIGION"
            value={snap.personalInfo.religion}
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
            value={snap.family.spouse?.lastName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="FIRST NAME"
            value={snap.family.spouse?.firstName}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="MIDDLE NAME"
            value={snap.family.spouse?.middleName}
          />
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="NO. OF CHILDREN"
            value={snap.family.spouse?.numChildren}
          />
        </div>
        <h1>HOME ADDRESS</h1>
        <div className="grid grid-cols-5 gap-5 ">
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="HOUSE NO."
            value={snap.address.permanent.houseNum}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="STREET/BRGY."
            value={snap.address.permanent.street}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CITY"
            value={snap.address.permanent.city}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="PROVINCE"
            value={snap.address.permanent.province}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="DISTRICT"
            value={snap.address.permanent.district}
          />
        </div>
        <h1>CITY ADRESS (IF BOARDING)</h1>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="number"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="HOUSE NO."
            value={snap.address.boarding?.houseNum}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="STREET/BRGY."
            value={snap.address.boarding?.street}
          />
          <input
            type="text"
            className="rounded-lg py-1 text-center"
            readOnly
            placeholder="CITY"
            value={snap.address.boarding?.city}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
