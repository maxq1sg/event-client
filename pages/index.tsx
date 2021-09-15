import type { NextPage } from "next";
import { createContext } from "react";
import EventList from "../components/EventList/EventList";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import { IHomeContext } from "../types/contextes";
import $api from "../utils/api";


export const HomeContext = createContext<Partial<IHomeContext>>({});

const Home: NextPage<IHomeContext> = ({ categories,events }) => {
  console.log(categories);
  return (
    <HomeContext.Provider value={{ categories,events }}>
      <SearchContainer />
      <EventList/>
    </HomeContext.Provider>
  );
};
export async function getServerSideProps() {
  const { data: categories } = await $api.get("/api/category");
  const { data: events } = await $api.get("/api/events?page=1&limit=5");
  return {
    props: {
      categories,
      events
    },
  };
}
export default Home;
