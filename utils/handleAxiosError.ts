import { AxiosError } from "axios";
import { IError } from "../types/error";

function handleAxiosError(error: AxiosError): IError {
  return error?.response?.data ? error.response.data : error.message;
}

export default handleAxiosError;
