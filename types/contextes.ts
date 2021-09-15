import { ICategory } from "./category";
import { IEvent } from "./event";

export interface IHomeContext {
  categories: ICategory[];
  events: IEvent[];
}
