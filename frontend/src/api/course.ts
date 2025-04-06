import { ICourseSub } from "../interface/ICourse";
import apiClient from "./apiClient";

export const getCourses = async () => {
  const response = await apiClient.get(`/courses`);
  return response.data;
};

export const getCourse = async ({ id }: { id?: string }) => {
  const response = await apiClient.get("/courses/" + id);
  return response.data;
};

export const addCourse = async (data: ICourseSub) => {
  await apiClient.post("/courses", data);
};

export const updateCourse = async ({
  id,
  data,
}: {
  id: string;
  data: ICourseSub;
}) => {
  const response = await apiClient.patch("/courses/" + id, data);
  return response.data;
};

export const deleteCourse = async (id: string) => {
  const response = await apiClient.delete("/courses/" + id);
  return response.data;
};
