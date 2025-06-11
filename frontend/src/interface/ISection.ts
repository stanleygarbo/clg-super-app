import { IProgramGet } from "./IProgram";
import { ISeatsGet } from "./ISeats";

export interface ISectionPost {
  sectionName: string;
  academicYear: string;
  semester: string;
  seats: string[];
  program: string;
}

export interface ISectionGet {
  _id: string;
  sectionName: string;
  academicYear: string;
  semester: string;
  seats: ISeatsGet[];
  program: IProgramGet[];
}
