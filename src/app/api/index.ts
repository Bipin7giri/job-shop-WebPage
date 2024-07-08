import axios from "axios";
const api = axios.create({
  baseURL: "https://j-deploy.onrender.com/api/jobs",
  headers: {
    Accept: "*/*",
  },
});
export default api;
