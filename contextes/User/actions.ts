import { IError } from "./../../types/error";
import { EUserActionType, IUserPayload } from "./types";

export interface IAuthUserRequest {
  type: EUserActionType.AUTH_USER_REQUEST;
}

export interface IAuthUserSuccess {
  type: EUserActionType.AUTH_USER_SUCCESS;
  payload: IUserPayload;
}

export interface IAuthUserFailure {
  type: EUserActionType.AUTH_USER_ERROR;
  payload: IError;
}
export interface IAuthUserReset {
  type: EUserActionType.AUTH_USER_RESET;
}

export type IAuthActions =
  | IAuthUserFailure
  | IAuthUserRequest
  | IAuthUserSuccess
  | IAuthUserReset;
