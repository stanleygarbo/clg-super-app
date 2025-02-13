import apiClient from "./apiClient";

export const getCourses = async () => {
  const response = await apiClient.get(`/courses`);
  return response.data;
};