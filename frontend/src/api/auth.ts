import apiClient from "./apiClient";

type authResp = { message: string; token: string };

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<authResp> => {
  const response = await apiClient.post<authResp>(`/auth/login`, {
    username,
    password,
  });

  return response.data;
};
