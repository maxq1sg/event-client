import { AxiosError } from "axios";
import { IError } from "../types/error";

function handleAxiosError(error: AxiosError): IError {
  return error?.response?.data
}

export default handleAxiosError;
