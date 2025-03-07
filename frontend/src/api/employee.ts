import apiClient from "./apiClient";
import { IEmployee } from "../interface/IEmployee";

type authResp = {};

export const getEmployee = async ({
  id,
}: {
    id?: string
}): Promise<IEmployee> => {
  const response = await apiClient.get<IEmployee>(`/employees/${id}`);
  return response.data;
};

type Empoyees = (Omit<IEmployee, "department"> & Omit<IEmployee, "position"> & {position: {jobTitle:string; hourlyWage:number}, department:{departmentName:string}})[]

export const getEmployees = async (): Promise<IEmployee[]> => {
  const response = await apiClient.get(`/employees`);
  return response.data.results;
};