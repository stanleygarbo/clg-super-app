import { proxy } from "valtio";
import { Course } from "./CourseData";

export interface Program {
  _id: string;
  programName: string;
  programAcronym: string;
  departmentId: string;
}

export const programData = proxy<Program>({
  _id: "",
  programName: "",
  programAcronym: "",
  departmentId: "",
});
