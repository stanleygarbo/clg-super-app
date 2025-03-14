import { IRoom } from "../interface/IRoom"
import apiClient from "./apiClient";

export const getRooms = async () => {
  const response = await apiClient.get(`/rooms`);
  return response.data;
};

export const addRoom = async (room: IRoom) => {
  const response = await apiClient.post(`/rooms`, room);
  return response.data;
}

export const updateRoom = async (id: string) => {
  const response = await apiClient.patch(`/rooms/${id}`)
  return response.data
}

export const deleteRoom = async (id: string) => {
  const response = await apiClient.delete(`/rooms/${id}`)
  return response.data
}