import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3001",
  baseURL: "https://m6-api-motors.onrender.com",
});

export default api;
