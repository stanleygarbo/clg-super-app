import { ISectionPost } from "../interface/ISection";
import apiClient from "./apiClient";

export const addSection = async (data: ISectionPost) => {
  const response = await apiClient.post("/sections", data);

  return response.data;
};

export const getSection = async (id: string) => {
  const response = await apiClient.get(`/sections/${id}`);

  return response.data;
};

export const getSections = async () => {
  const response = await apiClient.get("/");

  return response.data;
};

export const updateSection = async ({
  id,
  data,
}: {
  id?: string;
  data: ISectionPost;
}) => {
  const response = await apiClient.patch(`/sections/${id}`, data);

  return response.data;
};

export const deleteSection = async (id: string) => {
  const response = await apiClient.delete(`/sections/${id}`);

  return response.data;
};
