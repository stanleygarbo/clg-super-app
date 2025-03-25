import { IDepartmentGet } from "./IDepartment";
import { IPositionGet } from "./IPosition";

export interface IEmployeeGet {
  _id: string;
  firstName: string;
  surname: string;
  middleName: string;
  birthDate: string;
  username: string;
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

export interface IEmployeePost {
  firstName: string;
  surname: string;
  middleName: string;
  username: string;
  password: string;
  department: string;
  position: string;
  hireDate: String;
  employmentType: string;
  roles: [{ value: string }];
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
}
