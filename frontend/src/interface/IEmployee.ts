import { IDepartmentGet } from "./IDepartment";
import { IEmployeeDocs } from "./IDocuments";
import { IPositionGet } from "./IPosition";

export interface IEmployeeGet {
  _id: string;
  firstName: string;
  surname: string;
  middleName: string;
  email: string;
  maritalStatus: string;
  governmentId: {
    tin: string;
    sss: string;
    pagibig: string;
    philhealth: string;
  };
  username: string;
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
  control: (base: any, state: { isFocused: any }) => ({
    ...base,
    // borderRadius: "0.5rem", // rounded-lg
    padding: "0.375rem 0.75rem", // py-3 px-3
    backgroundColor: "#f1f5f9", // bg-slate-100
    borderBottom: "2px solid #2563EB", // border-b-2 border-b-blue-600
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    boxShadow: "none", // remove default box shadow
    textAlign: "center",
    outline: state.isFocused ? "none" : undefined,
  }),
  placeholder: (base: any) => ({
    ...base,
    textAlign: "center",
  }),
  singleValue: (base: any) => ({
    ...base,
    textAlign: "center",
    width: "100%",
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 20,
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
  maritalStatus: string;
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
