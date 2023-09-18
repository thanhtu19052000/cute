import axios from "axios";

// import { getV2 } from ".";


export const ENTRY_POINT = process.env.NODE_ENV === "production" ? process.env.SERVER_URL : "http://localhost:4000";
const axiosInstance = axios.create({
  baseURL: `${ENTRY_POINT}`,
});

export default axiosInstance;