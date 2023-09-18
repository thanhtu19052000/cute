import axios from "./axios";

axios.defaults.withCredentials = true;

export const post = (endpoint, data, config) => axios.post(endpoint, data, config);
export const get = (endpoint, config) => axios.get(endpoint, config);
export const put = (endpoint, data, config) => axios.put(endpoint, data, config);
export const remove = (endpoint, config) => axios.delete(endpoint, config);

// export const postV2 = (endpoint: string, data: any,config?:AxiosRequestConfig<any>) => axiosSpring.post(endpoint, data,config);
// export const getV2 = (endpoint: string,config?:AxiosRequestConfig<any>) => axiosSpring.get(endpoint,config);
// export const putV2 = (endpoint: string, data: any,config?:AxiosRequestConfig<any>) => axiosSpring.put(endpoint, data,config);
// export const removeV2 = (endpoint: string,config?:AxiosRequestConfig<any>) => axiosSpring.delete(endpoint,config);
