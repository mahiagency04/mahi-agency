import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.29.234:4000/api",
  baseURL: "https://backend-api-wi3p.onrender.com",
  withCredentials: true,
});

export default api;
