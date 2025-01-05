import { proxy } from "valtio";

interface Course {
    courseCode: string;
    courseUnits: number;
    courseInstructor: string;
}

const courseData = proxy<Course>({
    courseCode: "",
    courseUnits: 1,
    courseInstructor: "",
});
