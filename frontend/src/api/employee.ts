import apiClient from "./apiClient";
import { Employee } from "../interface/IEmployee";

type authResp = {};

export const getEmployee = async ({
  id,
}: {
    id?: string
}): Promise<Employee> => {
  const response = await apiClient.get<Employee>(`/employees/${id}`);
  return response.data;
};

type Empoyees = (Omit<Employee, "department"> & Omit<Employee, "position"> & {position: {jobTitle:string; hourlyWage:number}, department:{departmentName:string}})[]

export const getEmployees = async (): Promise<{results:Empoyees}> => {
  const response = await apiClient.get<{results:Empoyees}>(`/employees`);
  console.log(response)
  return response.data;
};