export interface ICourse {
  _id: string;
  courseCode: string;
  courseName: string;
  program: string;
  units: number;
}

import { IProgramGet } from "./IProgram";

export interface ICourseGet {
  _id: string;
  courseCode: string;
  courseName: string;
  year: number;
  semester: number;
  units: number;
  program: [IProgramGet];
}

// export interface ICoursePost {
//   courseCode: string;
//   courseName: string;
//   year: number;
//   semester: number;
//   units: number;
//   program: string[];
// }

export interface ICoursePost {
  courseCode: string;
  courseName: string;
  year: number;
  semester: number;
  units: number;
  program: { value: string; label: string }[];
}

export interface ICourseSub {
  courseCode: string;
  courseName: string;
  year: number;
  semester: number;
  units: number;
  program: string[];
}
