import { proxy } from "valtio";
import { IStudentsGet, IStudentsPost } from "../interface/IStudents";

<<<<<<< HEAD
interface Address {
  houseNum: string;
  street: string;
  city: string;
  province?: string;
  district?: string;
}

interface Contact {
  phoneNum: string;
  telNum?: string;
  email: string;
}

interface Person {
  lastName: string;
  firstName: string;
  middleName: string;
  occupation?: string;
  company?: string;
  companyAddress?: string;
  contact: Contact;
}

interface Sibling {
  name: string;
  age: string;
  occupation: string;
}

interface AppState {
  status: string;
  schoolYear: string;
  semester: string;
  date: string;
  orNum: string;
  amount: string;
  course: string;
  year: string;
  usn: string;
  password: string;
  grades: GradeData[];
  personalInfo: {
    lastName: string;
    firstName: string;
    middleName: string;
    telNum: string;
    phoneNum: string;
    email: string;
    birthDate: string;
    birthPlace: string;
    citizenship: string;
    sex: string;
    religion: string;
    spouse?: {
      lastName: string;
      firstName: string;
      middleName: string;
      numChild: string;
    };
  };
  address: {
    permanent: Address;
    boarding?: Address;
  };
  family: {
    father: Person;
    mother: Person;
    spouse?: Person & { numChildren?: string };
    guardian?: Person & { relationship: string; spouse?: Person };
  };
  siblings: Sibling[];
}

export const studentData = proxy<AppState>({
  status: "",
  schoolYear: "",
  semester: "",
  date: "",
  orNum: "",
  amount: "",
  course: "",
  year: "",
  usn: "",
  password: "",
  grades: [],
  personalInfo: {
    lastName: "",
    firstName: "",
    middleName: "",
    telNum: "",
    phoneNum: "",
    email: "",
    birthDate: "",
    birthPlace: "",
    citizenship: "",
    sex: "",
    religion: "",
    spouse: {
      lastName: "",
      firstName: "",
      middleName: "",
      numChild: "",
    },
  },
  address: {
    permanent: {
      houseNum: "",
      street: "",
      city: "",
      province: "",
      district: "",
    },
    boarding: { houseNum: "", street: "", city: "", district: "" },
  },
  family: {
    father: {
      lastName: "",
      firstName: "",
      middleName: "",
      contact: { phoneNum: "", email: "" },
    },
    mother: {
      lastName: "",
      firstName: "",
      middleName: "",
      contact: { phoneNum: "", email: "" },
    },
    spouse: {
      lastName: "",
      firstName: "",
      middleName: "",
      contact: { phoneNum: "", email: "" },
    },
    guardian: {
      lastName: "",
      firstName: "",
      middleName: "",
      relationship: "",
      contact: { phoneNum: "", email: "" },
    },
  },
  siblings: [],
=======
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
>>>>>>> 810c4096926684268a5e4adf8163a3b58ef04638
});
