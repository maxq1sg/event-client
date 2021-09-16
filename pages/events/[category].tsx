import { GetServerSideProps } from "next";
import { createContext, FC } from "react";
import EventInfoSectiob from "../../components/EventInfoSection/EventInfoSection";
import { IEventsPerCategoryContext } from "../../types/contextes";
import $api from "../../utils/api";

export const EventCategoryContext = createContext<
  Partial<IEventsPerCategoryContext>
>({});

const SingleEventPage: FC<IEventsPerCategoryContext> = ({ events }) => {
  console.log(events);
  return (
    <EventCategoryContext.Provider value={{ events }}>
      <div>maxim</div>
    </EventCategoryContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category } = ctx.query;
  const { data: categoryId } = await $api.get(
    `/api/category/single?name=${category}`
  );
  const events={categoryId}

  return {
    props: {
      events,
    },
  };
};

export default SingleEventPage;
