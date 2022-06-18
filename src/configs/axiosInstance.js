import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_CINEVERSE_API_URL
});

export default axiosInstance;