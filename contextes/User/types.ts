import { IUser } from "../../types/user";
import { IError } from "../../types/error";
import { IAuthActions } from "./actions";
import { Dispatch } from "react";

export enum EUserActionType {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  AUTH_USER_RESET
}

export interface IUserPayload {
    user: IUser;
    token: string;
  }

  export interface IUserContext {
  data: IUserPayload | null;
  error: IError | null;
  loading: boolean;
  dispatch:Dispatch<IAuthActions>
}


