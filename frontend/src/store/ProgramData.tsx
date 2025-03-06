import { proxy } from "valtio";
import { Course } from "./CourseData";

export interface IProgram {
  _id: string;
  programName: string;
  programAcronym: string;
  departmentId: string;
}

export const programData = proxy<IProgram>({
  _id: "",
  programName: "",
  programAcronym: "",
  departmentId: "",
});
