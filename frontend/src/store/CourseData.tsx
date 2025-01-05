interface Course {
    course: string;
    courseCode: string;
    courseUnits: number;
    courseInstructor: string; // note: change to instructor ID in the backend when complete
}

interface Grade {
    course: Course;
    grade: number;
    remark: string;
}

export interface GradeData extends Grade {
    course: {
        course: "";
        courseCode: "";
        courseUnits: 1;
        courseInstructor: "";
    };
    grade: 1.0;
    remark: "";
}
