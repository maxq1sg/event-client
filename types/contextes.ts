import { ICategory } from "./category";
import { IEvent } from "./event";

export interface IHomeContext {
  categoryList: ICategory[];
  events: IEvent[];
}
