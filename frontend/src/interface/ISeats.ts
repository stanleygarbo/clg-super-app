import { IGradesGet } from "./IGrades";
import { IOption } from "./IOption";
import { ISchedule } from "./ISchedule";
import { ISectionGet } from "./ISection";
import { IStudentsGet } from "./IStudents";

export interface ISeatsPost {
  section: string;
  schedule: string;
  student: string;
  grades: IOption[];
}

export interface ISeatsGet {
  _id: string;
  section: ISectionGet;
  schedule: ISchedule;
  student: IStudentsGet;
  grades: IGradesGet[];
}

export interface ISeatsUpdate {
  _id: string;
  section: ISectionGet;
  schedule: ISchedule;
  student: string;
  grades: IGradesGet[];
}

export interface ISeatsSub {
  section: string;
  schedule: string;
  student: string;
  grades: string[];
}
