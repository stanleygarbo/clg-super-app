import { IStudentsPost } from "../interface/IStudents";
import apiClient from "./apiClient";

export const getStudents = async () => {
  const response = await apiClient.get(`/students`);
  return response.data;
};

export const getStudentById = async ({ id }: { id?: string }) => {
  const response = await apiClient.get(`/students/${id}`);
  return response.data;
};

export const addStudent = async (data: IStudentsPost) => {
  await apiClient.post("/students", data);
};

export const updateStudent = async ({
  data,
  id,
}: {
  data: IStudentsPost;
  id: string;
}) => {
  const response = await apiClient.patch("/students/" + id, data);
  return response.data;
};

export const deleteStudent = async (id: string) => {
  const response = await apiClient.delete("/students/" + id);
  return response.data;
};
