import { IUser } from "./user";

export interface IEvent {
    id:number
    name: string;
    description?: string;
    date?: Date;
    users:IUser[]
  }
  export interface ICreateEvent {
    ownerId: number;
    body: IEvent;
    categoryId: number;
    // image: Express.Multer.File;
  }
  export interface IModifyEvent {
    body: IEvent;
    id: number;
  }
  export interface ISearchEvent {
    categories: number[];
    query: string;
  }
  