import { IDepartmentGet } from "./IDepartment";

export interface IProgram {
  _id: string;
  programName: string;
  programAcronym: string;
  department: IDepartmentGet;
}

export interface IProgramGet {
  _id: string;
  programName: string;
  programAcronym: string;
  department: IDepartmentGet;
}

export interface IProgramPost {
  programName: string;
  programAcronym: string;
  departmentId: string;
}
