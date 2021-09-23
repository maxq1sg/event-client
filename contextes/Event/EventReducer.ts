import { IEventListActions } from "./actions";
import {
  EEventListActionType,
  IEventListContext,
  IEventListPayload,
} from "./types";

export const eventListReducer = (
  state: IEventListContext,
  action: IEventListActions
): IEventListContext => {
  switch (action.type) {
    case EEventListActionType.EVET_LIST_REQUEST:
      return { ...state, loading: true };
    case EEventListActionType.EVET_LIST_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case EEventListActionType.EVENT_LIST_ADD_ITEMS:
      return {
        ...state,
        data: state?.data?.concat(action.payload) as IEventListPayload,
        loading: false,
      };
    case EEventListActionType.EVET_LIST_ERROR:
      return { ...state, error: action.payload, loading: false };
    case EEventListActionType.EVET_LIST_RESET:
      return { ...state, data: null, error: null, loading: false };
    default:
      return state;
  }
};
