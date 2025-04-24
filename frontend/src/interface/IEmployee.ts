import { IDepartmentGet } from "./IDepartment";
import { IEmployeeDocs } from "./IDocuments";
import { IPositionGet } from "./IPosition";

export interface IEmployeeGet {
  _id: string;
  firstName: string;
  surname: string;
  middleName: string;
  email: string;
  governmentId: {
    tin: string;
    sss: string;
    pagibig: string;
    philhealth: string;
  };
  username: string;
  maritalStatus: string;
  phone: string;
  password: string;
  department: IDepartmentGet;
  position: IPositionGet;
  hireDate: String;
  employmentType: string;
  roles: string[];
  birth: {
    birthDate: string;
    birthPlace: string;
    citizenship: string;
    sex: string;
    religion: string;
  };
  homeAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  boardAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  documents: IEmployeeDocs;
}

// export interface IEmployeeGet {
//   includes: any;
//   toLowerCase(): unknown;
//   _id: string;
//   firstName: string;
//   surname: string;
//   middleName: string;
//   username: string;
//   password: string;
//   department: IDepartmentGet;
//   position: IPositionGet;
//   hireDate: String;
//   employmentType: string;
//   roles: [{ value: string }];
//   address: object;
//   gender: string;
// }

export const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    height: "40px",
    width: "100%",
    borderRadius: "0.375rem", // rounded-md
    // borderColor: "#64748b", // border-slate-500
    fontWeight: "700", // font-bold
    fontSize: "0.875rem", // text-sm
    textAlign: "center",
    borderColor: state.isFocused ? "#2563eb" : "#64748b", // border-blue-600 when focused, border-slate-500 when not focused

    overflow: "hidden",
    transition: "border-color 0.3s",
    "&:hover": {
      borderColor: state.isFocused ? "#2563eb" : "#64748b", // no change on hover
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    textAlign: "center", // center the selected value text
  }),
  option: (base: any) => ({
    ...base,
    textAlign: "center", // center the option text
  }),
  menu: (base: any) => ({
    ...base,
    textAlign: "center", // center the dropdown menu
  }),
  placeholder: (base: any) => ({
    ...base,
    textAlign: "center", // center the placeholder
  }),
};

export interface IEmployeePost {
  firstName: string;
  surname: string;
  middleName: string;
  username: string;
  phone: string;
  email: string;
  maritalStatus: string;
  password: string;
  governmentId: {
    tin: string;
    sss: string;
    pagibig: string;
    philhealth: string;
  };
  department: string;
  position: string;
  hireDate: String;
  employmentType: string;
  roles: { value: string; label: string }[];
  birth: {
    birthDate: string;
    birthPlace: string;
    citizenship: string;
    sex: string;
    religion: string;
  };
  homeAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  boardAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  documents: IEmployeeDocs;
}

export interface IEmployeeSub {
  firstName: string;
  surname: string;
  middleName: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  department: string;
  position: string;
  hireDate: String;
  employmentType: string;
  roles: string[];
  birth: {
    birthDate: string;
    birthPlace: string;
    citizenship: string;
    sex: string;
    religion: string;
  };
  homeAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  boardAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  documents: IEmployeeDocs;
}
