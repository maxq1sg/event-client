import { createContext, FC, useContext, useReducer } from "react";
import { IEventListContext } from "./types";
import { eventListReducer } from "./EventReducer";

const initialState: IEventListContext = {
  data: null,
  error: null,
  loading: false,
  dispatch: () => undefined,
};

export const EventContext = createContext<IEventListContext>(initialState);

const EventProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(eventListReducer, initialState);

  return (
    <EventContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};

export function useEventList() {
  return useContext(EventContext);
}

export default EventProvider;
