import { IDepartmentGet } from "./IDepartment";
import { IPositionGet } from "./IPosition";

export interface IEmployeeGet {
    includes: any;
    toLowerCase(): unknown;
    _id: string;
    firstName: string;
    surname: string;
    middleName: string;
    username: string;
    password: string;
    department: IDepartmentGet;
    position: IPositionGet;
    hireDate: string;
    employmentType: string;
    roles: string[];
    address: object;
    gender: string;
}

export interface IEmployeePost {
    firstName: string;
    surname: string;
    middleName: string;
    birthDate : string;
    username: string;
    password: string;
    department: string;
    position: string;
    hireDate: string;
    employmentType: string;
    roles: string[];
    address: object;
    gender: string;
  }