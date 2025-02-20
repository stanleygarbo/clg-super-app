import { proxy } from "valtio";
import { IStudentsGet, IStudentsPost } from "../interface/IStudents";

// interface Address {
//   houseNum: string;
//   street: string;
//   city: string;
//   province?: string;
//   district?: string;
// }

// interface Contact {
//   phoneNum: string;
//   telNum?: string;
//   email: string;
// }

// interface Person {
//   lastName: string;
//   firstName: string;
//   middleName: string;
//   occupation?: string;
//   company?: string;
//   companyAddress?: string;
//   contact: Contact;
// }

// interface Sibling {
//   fullName: string;
//   age: string;
//   occupationSchool: string;
// }

export const studentPostData = proxy<IStudentsPost>({
  schoolYear: "",
  year: "",
  semester: "",
  username: "",
  firstName: "",
  surname: "",
  middleName: "",
  email: "",
  telephone: "",
  phone: "",
  roles: [""],
  department: "",
  spouse: {
    lastName: "",
    middleName: "",
    firstName: "",
    children: 0,
  },
  program: "",
  standing: "",
  birth: {
    birthDate: " ",
    birthPlace: " ",
    citizenship: " ",
    sex: " ",
    religion: " ",
  },
  homeAddress: {
    houseNum: 0,
    streetBrgy: "",
    city: "",
    district: "",
    province: "",
  },
  boardAddress: {
    houseNum: 0,
    streetBrgy: "",
    city: "",
    district: "",
    province: "",
  },
  father: {
    firstName: "",
    middleName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    telephone: "",
    phone: "",
    email: "",
  },
  mother: {
    firstName: "",
    middleName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    telephone: "",
    phone: "",
    email: "",
  },
  guardian: {
    firstName: "",
    middleName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    telephone: "",
    phone: "",
    email: "",
    relationship: "",
  },
  guardianSpouse: {
    lastName: "",
    middleName: "",
    firstName: "",
    children: 0,
  },
  siblings: [
    {
      fullName: "",
      age: "",
      occupationSchool: "",
    },
  ],
});

export const studentGetData = proxy<IStudentsGet>({
  _id: "",
  schoolYear: "",
  year: "",
  semester: "",
  username: "",
  firstName: "",
  surname: "",
  middleName: "",
  email: "",
  telephone: "",
  phone: "",
  roles: [""],
  department: {
    departmentName: "",
    _id: "",
  },
  spouse: {
    lastName: "",
    middleName: "",
    firstName: "",
    children: 0,
  },
  program: "",
  standing: "",
  birth: {
    birthDate: " ",
    birthPlace: " ",
    citizenship: " ",
    sex: " ",
    religion: " ",
  },
  homeAddress: {
    houseNum: 0,
    streetBrgy: "",
    city: "",
    district: "",
    province: "",
  },
  boardAddress: {
    houseNum: 0,
    streetBrgy: "",
    city: "",
    district: "",
    province: "",
  },
  father: {
    firstName: "",
    middleName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    telephone: "",
    phone: "",
    email: "",
  },
  mother: {
    firstName: "",
    middleName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    telephone: "",
    phone: "",
    email: "",
  },
  guardian: {
    firstName: "",
    middleName: "",
    lastName: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    telephone: "",
    phone: "",
    email: "",
    relationship: "",
  },
  guardianSpouse: {
    lastName: "",
    middleName: "",
    firstName: "",
    children: 0,
  },
  siblings: [
    {
      fullName: "",
      age: "",
      occupationSchool: "",
    },
  ],
});
