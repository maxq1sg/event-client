import { ERole } from "./role";

export interface IUser {
  id: number;
  first_name: string;
  email: string;
  password: string;
  last_name: string;
  add_data?: {
    is_married: boolean;
    address: string;
  };
  role?: ERole;
}
