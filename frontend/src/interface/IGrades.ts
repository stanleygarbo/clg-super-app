import { ICourseGet } from "./ICourse";
import { ISeatsGet } from "./ISeats";
import { IStudentsGet } from "./IStudents";

export interface IGradesPost {
  seat: string;
  student: string;
  course: string;
  finalGrade: string;
}

export interface IGradesGet {
  _id: string;
  seat: ISeatsGet;
  student: IStudentsGet;
  course: ICourseGet;
  finalGrade: string;
}
