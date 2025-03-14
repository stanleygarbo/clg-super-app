import { IDepartmentPost } from "../interface/IDepartment";
import apiClient from "./apiClient";

export const addDepartment = async (data: IDepartmentPost) => {
  await apiClient.post("/departments", data);
};

export const getDepartments = async () => {
  const response = await apiClient.get("/departments");
  return response.data;
};

export const getDepartment = async (id: string) => {
  const response = await apiClient.get("/departments/" + id);
  return response.data;
};

export const updateDepartment = async (data: IDepartmentPost, id: string) => {
  const response = await apiClient.patch("/departments/" + id, data);
  return response.data;
};

export const deleteDepartment = async (id: string) => {
  const response = await apiClient.delete("/departments/" + id);
  return response.data;
};
