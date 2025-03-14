import { IDepartmentGet } from "./IDepartment";

export interface IProgram {
  programName: string;
  programAcronym: string;
  department: IDepartmentGet;
  _id: string;
}
