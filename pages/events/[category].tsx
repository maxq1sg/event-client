import { GetServerSideProps } from "next";
import { createContext, FC } from "react";
import { ICategory } from "../../types/category";
import { IEventsPerCategoryContext } from "../../types/contextes";
import $api from "../../utils/api";

export const EventCategoryContext = createContext<
  Partial<IEventsPerCategoryContext>
>({});

const SingleEventPage: FC<IEventsPerCategoryContext> = ({ events }) => {
  return (
    <EventCategoryContext.Provider value={{ events }}>
      <div>maxim</div>
    </EventCategoryContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category } = ctx.query;
  const { data } = await $api.get<ICategory>(
    `/api/category/single?name=${category}`
  );
  const { data:events } = await $api.get(
    `/api/events?category=${data.id}&limit=4&page=1`
  );

  return {
    props: {
      events
    },
  };
};

export default SingleEventPage;
