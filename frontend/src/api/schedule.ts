import { ISchedule } from "../interface/ISchedule";
import apiClient from "./apiClient";

export const getSchedules = async () => {
  const response = await apiClient.get(`/schedules`);
  return response.data;
};

export const addSchedule = async (schedule: ISchedule) => {
  const response = await apiClient.post(`/schedules`, schedule);
  return response.data;
}