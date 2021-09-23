import type { NextPage } from "next";
import { createContext, useEffect, useState } from "react";
import DatePick from "../components/DatePicker/DatePicker";

import { useEventList } from "../contextes/Event/EventListContext";
import { EEventListActionType } from "../contextes/Event/types";
import MainLayout from "../layout/Layout";
import { IHomeContext } from "../types/contextes";
import { IEvent } from "../types/event";
import $api from "../utils/api";

export const HomeContext = createContext<Partial<IHomeContext>>({});

const Home: NextPage<IHomeContext> = ({ categoryList, events }) => {
  const { dispatch } = useEventList();
  const [notFirstRender, setNotFirstRender] = useState(false);
  useEffect(() => {
    dispatch({ type: EEventListActionType.EVET_LIST_SUCCESS, payload: events });
    setNotFirstRender(true);
  }, [dispatch, events]);

  return (
    <MainLayout title="events">
      {/* {notFirstRender ? (
        <HomeContext.Provider value={{ categoryList }}>
          <EventList />
        </HomeContext.Provider>
      ) : null} */}
      <DatePick />
    </MainLayout>
  );
};
export async function getServerSideProps() {
  const { data: categoryList } = await $api.get("/api/category");

  const { data: events } = await $api.get<IEvent[]>(
    "/api/events?limit=5&page=1",
  );
  return {
    props: {
      categoryList,
      events,
    },
  };
}
export default Home;
