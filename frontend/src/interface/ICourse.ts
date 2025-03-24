export interface ICourse {
  _id: string;
  courseCode: string;
  courseName: string;
  units: number;
}

export interface ICourseGet {
  _id: string;
  courseCode: string;
  courseName: string;
  units: number;
}

export interface ICoursePost {
  courseCode: string;
  courseName: string;
  units: number;
}
