import { ISeatsSub } from "../interface/ISeats";
import apiClient from "./apiClient";

export const addSeat = async (data: ISeatsSub) => {
  const response = await apiClient.post("/seats", data);

  return response.data;
};

export const getSeats = async () => {
  const response = await apiClient.get("/seats");

  return response.data;
};

export const getSeat = async (id: string) => {
  const response = await apiClient.get(`/seats/${id}`);

  return response.data;
};

export const updateSeat = async ({
  id,
  data,
}: {
  id?: string;
  data: ISeatsSub;
}) => {
  const response = await apiClient.patch(`/seats/${id}`, data);

  return response.data;
};

export const deleteSeat = async (id: string) => {
  const response = await apiClient.delete(`/seats/${id}`);

  return response.data;
};
