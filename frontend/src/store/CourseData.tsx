export interface Course {
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
