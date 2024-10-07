import { useFormContext } from "react-hook-form";

const EFormParents = () => {
  const methods = useFormContext();

  return (
    <div className="p-3">
      <p className="font-bold">PARENT'S & GUARDIAN'S INFORMATION</p>
      <div className="flex flex-col gap-3 pt-3 px-6 w-full">
        <h1 className="text-start">FATHER'S INFORMATION</h1>

        <div className="gap-5 grid grid-cols-3">
          <input
            type="text"
            className="pl-5"
            placeholder="LAST NAME"
            {...methods.register("fatherLastName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="FIRST NAME"
            {...methods.register("fatherFirstName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="MIDDLE NAME"
            {...methods.register("fatherMiddleName")}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="text"
            className="pl-5"
            placeholder="OCCUPATION"
            {...methods.register("fatherOccupation")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY/OFFICE NAME"
            {...methods.register("fatherCompany")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY ADDRESS"
            {...methods.register("fatherCompanyAddress")}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <input
            type="number"
            className="pl-5"
            placeholder="TEL NO."
            {...methods.register("fatherTelNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="FAX NO."
            {...methods.register("fatherFaxNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="CELLPHONE NO."
            {...methods.register("fatherPhoneNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="EMAIL"
            {...methods.register("fatherEmail")}
          />
        </div>
      </div>

      <div className="w-full px-6 flex flex-col gap-3">
        <h1 className="text-start pt-10">MOTHER'S INFORMATION</h1>

        <div className="grid grid-cols-3 gap-5">
          <input
            type="text"
            className="pl-5"
            placeholder="LAST NAME"
            {...methods.register("motherLastName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="FIRST NAME"
            {...methods.register("motherFirstName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="MIDDLE NAME"
            {...methods.register("motherMiddleName")}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="text"
            className="pl-5"
            placeholder="OCCUPATION"
            {...methods.register("motherOccupation")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY/OFFICE NAME"
            {...methods.register("motherCompany")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY ADDRESS"
            {...methods.register("motherCompanyAddress")}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <input
            type="number"
            className="pl-5"
            placeholder="TEL NO."
            {...methods.register("motherTelNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="FAX NO."
            {...methods.register("motherFaxNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="CELLPHONE NO."
            {...methods.register("motherPhoneNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="EMAIL"
            {...methods.register("motherEmail")}
          />
        </div>
      </div>

      <div className="flex w-full px-6 flex-col gap-3">
        <h1 className="text-start pt-10">GUARDIAN'S INFORMATION</h1>

        <div className="grid grid-cols-3 gap-5">
          <input
            type="text"
            className="pl-5"
            placeholder="LAST NAME"
            {...methods.register("guardianLastName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="FIRST NAME"
            {...methods.register("guardianFirstName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="MIDDLE NAME"
            {...methods.register("guardianMiddleName")}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 ">
          <input
            type="text"
            className="pl-5"
            placeholder="SPOUSE'S NAME (IF GUARDIAN IS MARRIED)"
            {...methods.register("guardianSpouseName")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="RELATIONSHIP TO THE STUDENT"
            {...methods.register("guardianRelationshipStudent")}
          />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <input
            type="text"
            className="pl-5"
            placeholder="OCCUPATION"
            {...methods.register("guardianOccupation")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY/OFFICE NAME"
            {...methods.register("guardianCompany")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="COMPANY ADDRESS"
            {...methods.register("guardianCompanyAddress")}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          <input
            type="number"
            className="pl-5"
            placeholder="TEL NO."
            {...methods.register("guardianTelNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="FAX NO."
            {...methods.register("guardianFaxNum")}
          />
          <input
            type="number"
            className="pl-5"
            placeholder="CELLPHONE NO."
            {...methods.register("guardianPhoneNum")}
          />
          <input
            type="text"
            className="pl-5"
            placeholder="EMAIL"
            {...methods.register("guardianEmail")}
          />
        </div>
      </div>
    </div>
  );
};

export default EFormParents;
