import { IDepartmentPost } from "../interface/IDepartment";
import apiClient from "./apiClient";

export const addDepartment = async (data: IDepartmentPost) => {
  await apiClient.post("/departments", data);
};
