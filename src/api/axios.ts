import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5432",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;