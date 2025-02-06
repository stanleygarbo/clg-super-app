import { IDepartmentFetch } from "./IDepartment";

export interface IEmployee {
    _id: string;
    firstName: string;
    surname: string;
    middleName: string;
    username: string;
    password: string;
    department: IDepartmentFetch;
    position: object;
    hireDate: string;
    employmentType: string;
    roles: string[];
}

export interface IEmployeeFetch {
    _id: string;
    firstName: string;
    surname: string;
    middleName: string;
    username: string;
    password: string;
    departmentId: string;
    department: string;
    positionId: string;
    position: string;
    hireDate: string;
    employmentType: string;
    roles: string[];
  }