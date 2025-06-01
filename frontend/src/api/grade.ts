import { IGrades } from "../interface/IGrades";
import apiClient from "./apiClient";

export const addGrade = async (data: IGrades) => {
  const response = await apiClient.post("/grades", data);
  return response.data;
};

export const getGrades = async () => {
  const response = await apiClient.get("/grades");
  return response.data;
};

export const getGradeByStudentId = async (studentId: string) => {
  const allGrades = await getGrades();
  return allGrades.find((grade: any) => grade.studentId === studentId);
};

export const updateGrade = async ({
  id,
  data,
}: {
  id: string;
  data: IGrades;
}) => {
  const response = await apiClient.patch(`/grades/${id}`, data);
  return response.data;
};
