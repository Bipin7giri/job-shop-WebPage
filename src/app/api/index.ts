import axios from "axios";
const api = axios.create({
  baseURL: "https://j-deploy.onrender.com/api",
  headers: {
    Accept: "*/*",
  },
});
export default api;
