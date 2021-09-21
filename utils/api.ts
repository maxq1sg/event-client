import axios from "axios";
//todo
const API_URL = "http://localhost:4000";

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
