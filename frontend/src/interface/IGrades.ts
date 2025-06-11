import { ICourseGet } from "./ICourse";
import { ISeatsGet } from "./ISeats";

export interface IGradesPost {
  seat: string;
  student: string;
  course: string;
  finalGrade: string;
}

export interface IGradesGet {
  _id: string;
  seat: string;
  student: string;
  course: ICourseGet;
  finalGrade: string;
}
