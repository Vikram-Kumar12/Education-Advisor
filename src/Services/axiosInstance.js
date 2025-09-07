
import axios from "axios";
const baseURL = "http://localhost:3000/api"
  

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Always attach the token if it exists
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

   
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
  
      config.headers["Content-Type"] = "application/json";
    }

    config.headers["Accept"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
