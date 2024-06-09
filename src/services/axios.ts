import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
