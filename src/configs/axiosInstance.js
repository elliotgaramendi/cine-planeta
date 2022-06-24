import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_CINEVERSE_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_CINEVERSE_API_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
});

export default axiosInstance;