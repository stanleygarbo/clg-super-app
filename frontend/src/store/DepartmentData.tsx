import { Program } from "./ProgramData";

export interface Department {
    deprtmentName: string;
    programs: Program;
    isDeleted?: boolean;
}
