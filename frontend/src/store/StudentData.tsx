import { proxy } from "valtio";

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
  spouseLasttName: string;
  spouseFirsttName: string;
  spouseMiddleName: string;
  spouseNumChild: string;
  houseNum: string;
  street: string;
  city: string;
  province: string;
  district: string;
  boardingHouseNum: string;
  boardingStreet: string;
  boardingCity: string;
  boardingDistrict: string;

  // Father Information

  fatherLastName: string;
  fatherFirstName: string;
  fatherMiddleName: string;
  fatherOccupation: string;
  fatherCompany: string;
  fatherCompanyAddress: string;
  fatherEmail: string;
  fatherPhoneNum: string;
  fatherTelNum: string;

  // Mother Information

  motherLastName: string;
  motherFirstName: string;
  motherMiddleName: string;
  motherOccupation: string;
  motherCompany: string;
  motherCompanyAddress: string;
  motherEmail: string;
  motherPhoneNum: string;
  motherTelNum: string;

  // Guardian Information

  guardianLastName: string;
  guardianFirstName: string;
  guardianMiddleName: string;
  guardianSpouseLastName: string;
  guardianSpouseFirstName: string;
  guardianSpouseMiddleName: string;
  guardianRelationship: string;
  guardianOccupation: string;
  guardianCompany: string;
  guardianCompanyAddress: string;
  guardianPhoneNum: string;
  guardianTelNum: string;
  guardianEmail: string;

  // Sibling Information

  siblingName: string;
  siblingName2: string;
  siblingName3: string;
  siblingName4: string;
  siblingName5: string;
  siblingAge: string;
  siblingAge2: string;
  siblingAge3: string;
  siblingAge4: string;
  siblingAge5: string;
  siblingOccupation: string;
  siblingOccupation2: string;
  siblingOccupation3: string;
  siblingOccupation4: string;
  siblingOccupation5: string;
}

export const studentData = proxy<AppState>({
  // Student Information
  status: "",
  usn: "",
  password: "",
  schoolYear: "",
  semester: "",
  date: "",
  orNum: "",
  amount: "",
  course: "",
  year: "",
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
  spouseLasttName: "",
  spouseFirsttName: "",
  spouseMiddleName: "",
  spouseNumChild: "",
  houseNum: "",
  street: "",
  city: "",
  province: "",
  district: "",
  boardingHouseNum: "",
  boardingStreet: "",
  boardingCity: "",
  boardingDistrict: "",

  // Father Information

  fatherLastName: "",
  fatherFirstName: "",
  fatherMiddleName: "",
  fatherOccupation: "",
  fatherCompany: "",
  fatherCompanyAddress: "",
  fatherEmail: "",
  fatherPhoneNum: "",
  fatherTelNum: "",

  // Mother Information

  motherLastName: "",
  motherFirstName: "",
  motherMiddleName: "",
  motherOccupation: "",
  motherCompany: "",
  motherCompanyAddress: "",
  motherEmail: "",
  motherPhoneNum: "",
  motherTelNum: "",

  // Guardian Informaion

  guardianLastName: "",
  guardianFirstName: "",
  guardianMiddleName: "",
  guardianSpouseLastName: "",
  guardianSpouseFirstName: "",
  guardianSpouseMiddleName: "",
  guardianRelationship: "",
  guardianOccupation: "",
  guardianCompany: "",
  guardianCompanyAddress: "",
  guardianPhoneNum: "",
  guardianTelNum: "",
  guardianEmail: "",

  // Sibling Information

  siblingName: "",
  siblingName2: "",
  siblingName3: "",
  siblingName4: "",
  siblingName5: "",
  siblingAge: "",
  siblingAge2: "",
  siblingAge3: "",
  siblingAge4: "",
  siblingAge5: "",
  siblingOccupation: "",
  siblingOccupation2: "",
  siblingOccupation3: "",
  siblingOccupation4: "",
  siblingOccupation5: "",
});
