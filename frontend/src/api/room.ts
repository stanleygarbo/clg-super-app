import { IRoomPost } from "../interface/IRoom";
import apiClient from "./apiClient";

export const getRooms = async () => {
  const response = await apiClient.get(`/rooms`);
  return response.data;
};

export const addRoom = async (data: IRoomPost) => {
  const response = await apiClient.post(`/rooms`, data);
  return response.data;
};

export const deleteRoom = async (id: string) => {
  const response = await apiClient.delete("/rooms/" + id);
  return response.data;
};
