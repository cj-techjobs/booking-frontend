import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://api.restful-api.dev`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config);

    const token = localStorage.getItem(`accessToken`);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
