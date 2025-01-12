import apiClient from "./apiClient";


type authResp = {};

export const getEmployee = async ({
  id,
}: {
    id?: string
}): Promise<getEmployee> => {
  const response = await apiClient.get<authResp>(`/employees/${id}`);
  return response.data;
};
