import { IGradesPost } from "../interface/IGrades";
import apiClient from "./apiClient";

export const addGrade = async (data: IGradesPost) => {
  const response = await apiClient.post("/grades", data);

  return response.data;
};

export const getGradesByStud = async (id: string) => {
  const response = await apiClient.get(`/seats?studentId=${id}`);

  return response.data;
};

export const getGrade = async ({ id }: { id: string }) => {
  const response = await apiClient.get(`/grades/${id}`);

  return response.data;
};

export const getGrades = async () => {
  const response = await apiClient.get("/grades");

  return response.data;
};
export const updateGrade = async ({
  id,
  data,
}: {
  id: string;
  data: IGradesPost;
}) => {
  const response = await apiClient.patch(`/grades/${id}`, data);

  return response.data;
};
export const deleteGrade = async (id: string) => {
  const response = await apiClient.delete(`/grades/${id}`);

  return response.data;
};
