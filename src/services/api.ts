import axiosInstance from "./axios";

export interface AuthResponse {
  authToken: string;
}

export interface User {
  name: string;
  email: string;
}

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/auth/login", {
    email,
    password
  });
  const { authToken } = response.data;
  localStorage.setItem("token", authToken);
  console.log(response.data);
  return response.data;
};

export const signup = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/auth/signup", {
    name,
    email,
    password
  });
  const { authToken } = response.data;
  localStorage.setItem("token", authToken);
  return response.data;
};

export const getUser = async (): Promise<User> => {
  const response = await axiosInstance.get<User>("/auth/me");
  return response.data;
};
