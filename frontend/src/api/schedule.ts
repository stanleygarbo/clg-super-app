import { ISchedule } from "../interface/ISchedule";
import apiClient from "./apiClient";

export const getSchedule = async (id: string) => {
  const response = await apiClient.get("/schedules/" + id)
  return response.data
}

export const getSchedules = async () => {
  const response = await apiClient.get(`/schedules`);
  return response.data;
};

export const addSchedule = async (schedule: ISchedule) => {
  const response = await apiClient.post(`/schedules`, schedule);
  return response.data;
}

export const updateSchedule = async (id: string) => {
  const response = await apiClient.patch(`/schedules/${id}`)
  return response.data
}

export const deleteSchedule = async (id: string) => {
  const response = await apiClient.delete(`/schedules/${id}`)
  return response.data
}