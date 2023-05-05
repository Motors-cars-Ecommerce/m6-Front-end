import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3001",
  baseURL: "https://motors-cars-g17.onrender.com",
});

export default api;
