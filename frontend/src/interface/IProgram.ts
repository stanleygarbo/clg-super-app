import { IDepartmentGet } from "./IDepartment";

export interface IProgramGet {
  _id: string;
  programName: string;
  programAcronym: string;
  department: IDepartmentGet;
}

export interface IProgramPost {
  programName: string;
  programAcronym: string;
  department: string;
}
