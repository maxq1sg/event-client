import { useContext } from "react";
import { HomeContext } from "../../pages";
import GridContainer from "../GridContainer/GridContainer";
import SingleEvent from "./SingleEvent";

const EventList = () => {
  const { events } = useContext(HomeContext);
  return (
    <GridContainer>
      {events?.map((event) => (
        <SingleEvent key={event.id} event={event} />
      ))}
    </GridContainer>
  );
};

export default EventList;
