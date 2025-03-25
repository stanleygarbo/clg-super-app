import { IProgramGet } from "./IProgram";

export interface ICourseGet {
  _id: string;
  courseCode: string;
  courseName: string;
  units: number;
  program: [IProgramGet];
}

export interface ICoursePost {
  courseCode: string;
  courseName: string;
  units: number;
  program: string;
}
