// src/api/apiClient.ts
import axios, { AxiosInstance } from "axios";
import { authState } from "../store/auth";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.1.11:3000/api", // Replace with your API base URL
  // https://clg-super-app.onrender.com/api
  // http://localhost:3000/api
  // http://192.168.1.27:3000/api
  timeout: Infinity, // Request timeout in milliseconds
  headers: { "Content-Type": "application/json" },
});

// Interceptors for request/response
apiClient.interceptors.request.use((config) => {
  const token = authState.token;
  console.log(token);
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  console.log("returning");

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiClient;
