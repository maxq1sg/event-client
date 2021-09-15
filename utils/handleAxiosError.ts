import { AxiosError } from "axios";
import { IError } from "../types/error";

function handleAxiosError(error: AxiosError): IError {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
}

export default handleAxiosError;
