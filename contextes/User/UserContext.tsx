import { createContext, FC, useContext, useReducer } from "react";
import fromLocalStorage from "../../utils/fromLocalStorage";
import { IUserContext } from "./types";
import { userReducer } from "./UserReducer";

const initialState: IUserContext = {
  data: fromLocalStorage("user"),
  error: null,
  loading: false,
  dispatch: () => undefined,
};

export const UserContext = createContext<IUserContext>(initialState);

const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}

export default UserProvider;
