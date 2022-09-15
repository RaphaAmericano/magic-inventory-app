import axios, { AxiosRequestConfig } from "axios";
import type { AxiosResponse } from "axios";

const service = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.API_URL
});

const scryfallService = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.SCRYFALL_API_URL
});

function parseResponse(response: AxiosResponse) {
  return response.data;
}

async function handleResponseError(error: any) {
  if (error?.response) {
    const data = {
      status: error.response.status,
      message: error.response.data?.message,
    };
    return Promise.reject(data);
  }
  return Promise.reject(error);
}

function injectToken(config: AxiosRequestConfig<unknown>){
  const token = localStorage.getItem("token");
  if(token){
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }
  return config;
}

scryfallService.interceptors.response.use(parseResponse, handleResponseError);
scryfallService.interceptors.request.use(injectToken);

service.interceptors.response.use(parseResponse, handleResponseError);
service.interceptors.request.use(injectToken);
export { scryfallService };
export default service;