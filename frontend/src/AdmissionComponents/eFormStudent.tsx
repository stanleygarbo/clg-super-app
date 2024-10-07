import { useFormContext } from "react-hook-form";

const EFormStudent = () => {
  const methods = useFormContext();

  return (
    <div className="p-3">
      <p className="font-bold">STUDENT'S INFORMATION</p>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <div className="gap-5 grid grid-cols-3">
          <input
            type="text"
            className="pl-5"
            placeholder="LASTNAME"
            {...methods.register("lastName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="FIRST NAME"
            {...methods.register("firstName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="MIDDLE NAME"
            {...methods.register("middleName")}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="number"
            className="pl-5"
            placeholder="TEL NO."
            {...methods.register("telNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="CELLPHONE NO."
            max={11}
            {...methods.register("phoneNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="EMAIL"
            {...methods.register("email")}
          />
        </div>
        <label>BIRTH'S INFORMATION</label>
        <div className="grid grid-cols-5 gap-5 ">
          <input
            type="date"
            className="pl-5"
            {...methods.register("birthDate")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="PLACE OF BIRTH"
            {...methods.register("birthPlace")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="CITiZENSHIP"
            {...methods.register("citizenship")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="GENDER"
            {...methods.register("gender")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="RELIGION"
            {...methods.register("religion")}
          />
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        <label htmlFor="" className="text-start pt-10">
          SPOUSE'S INFORMATION (IF MARRIED)
        </label>

        <div className="grid grid-cols-4 gap-5">
          <input
            type="text"
            className="pl-5"
            placeholder="LASTNAME"
            {...methods.register("spouseLasttName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="FIRST NAME"
            {...methods.register("spouseFirstName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="MIDDLE NAME"
            {...methods.register("spouseMiddleName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="NO. OF CHILDREN"
            {...methods.register("spouseNumChild")}
          />
        </div>
        <label htmlFor="">HOME ADDRESS</label>
        <div className="grid grid-cols-5 gap-5 ">
          <input
            type="text"
            className="pl-5"
            placeholder="HOUSE NO."
            {...methods.register("houseNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="STREET/BRGY."
            {...methods.register("street")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="CITY/MUNICIPALITY"
            {...methods.register("city")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="PROVINCE"
            {...methods.register("province")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="DISTRICT (IF APPLICABLE)"
            {...methods.register("district")}
          />
        </div>
        <label htmlFor="">CITY ADRESS (IF BOARDING)</label>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="text"
            className="pl-5"
            placeholder="HOUSE NO."
            {...methods.register("boardingHouseNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="STREET/BRGY."
            {...methods.register("boardingStreet")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="CITY/MUNICIPALITY"
            {...methods.register("boardingCity")}
          />
        </div>
      </div>
    </div>
  );
};

export default EFormStudent;
