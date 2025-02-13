import apiClient from "./apiClient";

export const getSchedules = async () => {
  const response = await apiClient.get(`/schedules`);
  return response.data;
};