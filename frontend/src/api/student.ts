import apiClient from "./apiClient";

export const getStudents = async () => {
  const response = await apiClient.get(`/students`);
  return response.data;
};

// export const getStudentById = async ({id}: {id: string}) => {
//     const response = await apiClient.get(`/students/${id}`);
//     return response.data;
// };

export const getStudentById = async ({ id }: { id?: string }) => {
  const response = await apiClient.get(`/students/${id}`);
  return response.data;
};
