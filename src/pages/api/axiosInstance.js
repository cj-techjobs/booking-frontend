// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:1008/api/v1/", // Replace with your API base URL
  baseURL: "http://sixapp-env.eba-bjytpnjh.eu-north-1.elasticbeanstalk.com/api/v1/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
