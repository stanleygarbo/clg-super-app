import { ICoursePost } from "../interface/ICourse";
import apiClient from "./apiClient";

export const getCourses = async () => {
  const response = await apiClient.get(`/courses`);
  return response.data;
};

export const getCourse = async (id: string) => {
  const response = await apiClient.get("/courses/" + id);
  return response.data;
};

export const addCourse = async (data: ICoursePost) => {
  await apiClient.post("/courses", data);
};

export const deleteCourse = async (id: string) => {
  const response = await apiClient.delete("/courses/" + id);
  return response.data;
};
