interface IGradeEntry {
  prelim: number;
  midterm: number;
  prefi: number;
  final: number;
}

export interface ISubjectGrade {
  name: string;
  grades: IGradeEntry;
}

interface ISemesterGrades {
  subjects: ISubjectGrade[]; // Now an array instead of a map
}

interface IYearLevelGrades {
  sem1: ISemesterGrades;
  sem2: ISemesterGrades;
}

export interface IGrades {
  studentId: string;
  freshman: IYearLevelGrades;
  sophomore: IYearLevelGrades;
  junior: IYearLevelGrades;
  senior: IYearLevelGrades;
}
