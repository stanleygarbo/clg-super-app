import apiClient from "./apiClient";

export const getPrograms = async () => {
  const response = await apiClient.get(`/programs`);
  return response.data;
};