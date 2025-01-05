interface Course {
    courseUID: string;
    courseName: string;
    courseCode: string;
    courseUnits: number;
    courseInstructor: string; // note: change to instructor ID in the backend when complete
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
