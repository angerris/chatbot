import axiosInstance from "./axios";

export interface AuthResponse {
  authToken: string;
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
export interface User {
  id: string | null;
  name: string;
  email?: string;
}

export const getUser = async (): Promise<{
  user: User | null;
  id: string | null;
}> => {
  try {
    const response = await axiosInstance.get<User>("/auth/me");
    return { user: response.data, id: response.data.id };
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return { user: null, id: null };
    }
    throw error;
  }
};

export const addConversation = async (
  userId: string,
  userData: User
): Promise<void> => {
  const conversationRecord = {
    id: userId,
    user_id: userData.id,
    label: "string",
    created_at: new Date().toISOString()
  };

  await axiosInstance.post("/conversation", conversationRecord);
};

export interface Conversation {
  id: number;
  title: string;
}

export const queryAllConversations = async (): Promise<Conversation[]> => {
  const response = await axiosInstance.get<Conversation[]>("/conversation");
  console.log(response.data);
  return response.data;
};

export const deleteConversation = async (
  conversationId: string
): Promise<void> => {
  await axiosInstance.delete(`/conversation/${conversationId}`);
};
