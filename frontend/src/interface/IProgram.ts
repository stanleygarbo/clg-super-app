import { IDepartment } from "./IDepartment"

export interface IProgram {
    programName: string
    programAcronym: string
    department: IDepartment
    _id: string
}