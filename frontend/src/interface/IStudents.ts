import { Sibling } from "../components/admission/enrollment_form/EForm";
import { IStudentDocs } from "./IDocuments";
import { IProgramGet } from "./IProgram";

export interface IStudentsPost {
  schoolYear: string;
  year: string;
  semester: number;
  username: string;
  firstName: string;
  surname: string;
  maritalStatus: string;
  section: string;
  middleName: string;
  email: string;
  telephone: string;
  phone: string;
  roles: [string];
  department: string;
  spouse: {
    lastName: string;
    middleName: string;
    firstName: string;
    children: number;
  };
  program: string;
  standing: string;
  birth: {
    birthDate: string;
    birthPlace: string;
    citizenship: string;
    sex: string;
    religion: string;
  };
  homeAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  cityAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  father: {
    firstName: string;
    middleName: string;
    lastName: string;
    occupation: string;
    companyName: string;
    companyAddress: string;
    telephone: string;
    phone: string;
    email: string;
  };
  mother: {
    firstName: string;
    middleName: string;
    lastName: string;
    occupation: string;
    companyName: string;
    companyAddress: string;
    telephone: string;
    phone: string;
    email: string;
  };
  guardian: {
    firstName: string;
    middleName: string;
    lastName: string;
    occupation: string;
    companyName: string;
    companyAddress: string;
    telephone: string;
    phone: string;
    email: string;
    relationship: string;
  };
  guardianSpouse: {
    lastName: string;
    middleName: string;
    firstName: string;
    children: number;
  };
  documents: IStudentDocs;
  siblings: Sibling[];
}

export interface IStudentsGet {
  _id: string;
  schoolYear: string;
  year: string;
  semester: number;
  username: string;
  section: string;
  firstName: string;
  maritalStatus: string;
  surname: string;
  middleName: string;
  email: string;
  telephone: string;
  phone: string;
  roles: [string];
  department: object;
  spouse: {
    lastName: string;
    middleName: string;
    firstName: string;
    children: number;
  };
  program: IProgramGet;
  standing: string;
  birth: {
    birthDate: string;
    birthPlace: string;
    citizenship: string;
    sex: string;
    religion: string;
  };
  homeAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  cityAddress: {
    houseNum: number;
    streetBrgy: string;
    city: string;
    district: string;
    province: string;
  };
  father: {
    firstName: string;
    middleName: string;
    lastName: string;
    occupation: string;
    companyName: string;
    companyAddress: string;
    telephone: string;
    phone: string;
    email: string;
  };
  mother: {
    firstName: string;
    middleName: string;
    lastName: string;
    occupation: string;
    companyName: string;
    companyAddress: string;
    telephone: string;
    phone: string;
    email: string;
  };
  guardian: {
    firstName: string;
    middleName: string;
    lastName: string;
    occupation: string;
    companyName: string;
    companyAddress: string;
    telephone: string;
    phone: string;
    email: string;
    relationship: string;
  };
  guardianSpouse: {
    lastName: string;
    middleName: string;
    firstName: string;
    children: number;
  };
  documents: IStudentDocs;
  siblings: Sibling[];
}
