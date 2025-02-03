import { proxy } from "valtio";

export interface Course {
  _id: string;
  courseName: string;
  courseCode: string;
  units: number;
}

export const courseData = proxy<Course>({
  _id: "",
  courseName: "",
  courseCode: "",
  units: 0,
});
