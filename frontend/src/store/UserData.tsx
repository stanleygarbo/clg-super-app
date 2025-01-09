import { proxy } from "valtio";
import { Spouse } from "./SpouseData";
import { Birth } from "./BirthData";
import { Address } from "./AddressData";
import { Parent } from "./ParentData";
import { Program } from "./ProgramData";
import { Sibling } from "./SiblingData";
import { Department } from "./DepartmentData";
import { Position } from "./PositionData";
import { GovernmentId } from "./GovernmentIdData";

interface AppState {
    usn: string;
    password: string;
    confirmPass: string;
    name: string;
    role: string;
    createdAt: string;
}

export const userData = proxy<AppState>({
    usn: "",
    password: "",
    confirmPass: "",
    name: "",
    role: "",
    createdAt: "",
});

interface User {
    username: string;
    password?: string;
    firstName: string;
    surname: string;
    middleName: string;
    birthDate?: Date;
    email?: string;
    telephone?: string;
    phone?: string;
    roles: string[];
    isDeleted?: boolean;
}

interface Student {
    program: Program;
    standing: "freshman" | "sophomore" | "junior" | "senior" | "graduate";
    birth: Birth;
    spouse?: Spouse;
    homeAddress: Address;
    cityAddress?: Address;
    father?: Parent;
    mother?: Parent;
    guardian?: Parent;
    guardianSpuse?: Spouse;
    siblings?: Sibling[];
}

interface Employee {
    sickLeave: number;
    vacationLeave: number;
    hireDate: Date;
    employmentType:
        | "probationary"
        | "contractual"
        | "regular"
        | "part-time"
        | "OJT";
    department: Department;
    position: Position;
    governmentId: GovernmentId;
    birth: Birth;
    spouse: Spouse;
    homeAddress: Address;
    cityAddress: Address;
}
