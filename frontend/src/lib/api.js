import axios from 'axios';
import {useNavigate} from "react-router-dom";


const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});



api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/auth/refresh",
          {},
          {
            withCredentials: true,
          }
        );

        const newAccessToken = response.data.accessToken;

        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");

        //window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;