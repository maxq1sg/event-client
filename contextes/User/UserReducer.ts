import { EUserActionType, IUserContext } from "./types";

export const userReducer = (state: IUserContext, action: any): IUserContext => {
  switch (action.type) {
    case EUserActionType.AUTH_USER_REQUEST:
      return { ...state, loading: true };
    case EUserActionType.AUTH_USER_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case EUserActionType.AUTH_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    case EUserActionType.AUTH_USER_RESET:
      return { ...state, data: null, error: null, loading: false };
    default:
      return state;
  }
};
