import { IError } from "../../types/error";
import { Dispatch } from "react";
import { IEvent } from "../../types/event";
import { IEventListActions } from "./actions";

export enum EEventListActionType {
  EVET_LIST_REQUEST,
  EVET_LIST_SUCCESS,
  EVET_LIST_ERROR,
  EVET_LIST_RESET,
  EVENT_LIST_ADD_ITEMS,
}

export type IEventListPayload = IEvent[];

export interface IEventListContext {
  data: IEventListPayload | null;
  error: IError | null;
  loading: boolean;
  dispatch: Dispatch<IEventListActions>;
}
