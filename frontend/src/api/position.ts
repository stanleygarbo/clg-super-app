import { IPositionPost } from "../interface/IPosition";
import apiClient from "./apiClient";

export const addPosition = async (data: IPositionPost) => {
  apiClient.post("/positions", data);
};

export const getPositions = async () => {
  const response = await apiClient.get("/positions");
  return response.data;
};

export const deletePosition = async (id: string) => {
  const response = await apiClient.delete("/positions/" + id);
  return response.data;
};
