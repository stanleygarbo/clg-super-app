import { proxy } from "valtio";

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

interface AppState {
  schoolYear: string;
  year: String;
  semester: string;
  username: string;
  firstName: string;
  surname: string;
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
  boardAddress: {
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
  siblings: [
    {
      fullName: string;
      age: string;
      occupationSchool: string;
    }
  ];
}

export const studentData = proxy<AppState>({
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
