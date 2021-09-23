import axios from "axios";
import getTokenFromLocaleStorage from "./getToken";

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

const $api = axios.create({
  baseURL: API_URL,
  
});

$api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getTokenFromLocaleStorage("user")}`;
  return config;
});

export default $api;
