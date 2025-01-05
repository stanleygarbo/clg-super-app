import { proxy } from "valtio";
import { GradeData } from "./CourseData";

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
});
