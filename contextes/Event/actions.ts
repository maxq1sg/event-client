import { IEvent } from "./../../types/event";
import { IError } from "../../types/error";
import { EEventListActionType } from "./types";

export interface IEventListActionRequest {
  type: EEventListActionType.EVET_LIST_REQUEST;
}

export interface IEventListActionSuccess {
  type: EEventListActionType.EVET_LIST_SUCCESS;
  payload: IEvent[];
}

export interface IEventListActionAddItems {
  type: EEventListActionType.EVENT_LIST_ADD_ITEMS;
  payload: IEvent[];
}

export interface IEventListActionFailure {
  type: EEventListActionType.EVET_LIST_ERROR;
  payload: IError;
}
export interface IEventListActionReset {
  type: EEventListActionType.EVET_LIST_RESET;
}

export type IEventListActions =
  | IEventListActionFailure
  | IEventListActionRequest
  | IEventListActionReset
  | IEventListActionSuccess
  | IEventListActionAddItems;
