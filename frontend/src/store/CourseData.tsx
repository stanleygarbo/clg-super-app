import { proxy } from "valtio";

export interface Course {
<<<<<<< HEAD
  UID: string;
  name: string;
  code: string;
  units: number;
  instructor: string; // note: change to instructor ID in the backend when complete
}

interface Grade {
  courseUID: string;
  grade: number;
  remark: string;
}

export interface GradeData extends Grade {
  courseUID: "";
  grade: 1.0;
  remark: "";
}
=======
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
>>>>>>> 810c4096926684268a5e4adf8163a3b58ef04638
