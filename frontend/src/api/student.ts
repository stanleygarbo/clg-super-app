import apiClient from "./apiClient";

export const getStudents = async () => {
  const response = await apiClient.get(`/students`);
  return response.data;
};