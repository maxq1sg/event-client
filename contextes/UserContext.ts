import { createContext } from "react";
import { IUser } from "../types/user";

interface IUserContext {
  data: IUser | null;
  error: string;
  loading: boolean;
}

export const UserContext = createContext<Partial<IUserContext>>({});
