export interface ISubjectSchedule {
    courseID: string,
    timeStart: string,
    timeEnd: string,
    day: [string],
    room: string,
    instructorID: string,
}

export interface ISchedule {
    _id: string,
    program: string,
    schoolYear: string,
    semester: string,
    subjectSchedules: [ISubjectSchedule]
}