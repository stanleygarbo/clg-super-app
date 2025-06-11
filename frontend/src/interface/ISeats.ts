import { IGradesGet } from "./IGrades";
import { IOption } from "./IOption";
import { IStudentsGet } from "./IStudents";

export interface ISeatsPost {
  // section: string;
  student: string;
  grades: IOption[];
}

export interface ISeatsGet {
  _id: string;
  // section: ISectionGet;
  student: IStudentsGet;
  grades: IGradesGet[];
}

export interface ISeatsSub {
  // section: string;
  student: string;
  grades: string[];
}
