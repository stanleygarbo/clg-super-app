import { Course } from "./CourseData";

export interface Program {
    programName: string;
    programAcronym: string;
    courses: Course[];
}
