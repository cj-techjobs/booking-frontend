// axiosInstance.js
import axios from "axios";
import http from "http";

const httpAgent = new http.Agent({
  rejectUnauthorized: false,
});

const axiosInstance = axios.create({
  // baseURL: "http://localhost:1008/api/v1/", // Replace with your API base URL
  baseURL:
    "http://13.234.115.173:8000/api/v1/", // Replace with your API base URL
    // "http://sixapp-env.eba-bjytpnjh.eu-north-1.elasticbeanstalk.com/api/v1/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: httpAgent,
});

export default axiosInstance;
