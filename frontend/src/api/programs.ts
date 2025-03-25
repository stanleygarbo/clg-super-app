import { IProgramPost } from "../interface/IProgram";
import apiClient from "./apiClient";

export const getPrograms = async () => {
  const response = await apiClient.get(`/programs`);
  return response.data;
};

export const getProgram = async (id: string) => {
  const response = await apiClient.get("/programs/" + id);
  return response.data;
};

export const addProgram = async (data: IProgramPost) => {
  const response = await apiClient.post("/programs", data);
  return response.data;
};

export const deleteProgram = async (id: string) => {
  const response = await apiClient.delete("/programs/" + id);
  return response.data;
};
