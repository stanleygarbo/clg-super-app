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