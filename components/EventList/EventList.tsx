import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEventList } from "../../contextes/Event/EventListContext";
import { EEventListActionType } from "../../contextes/Event/types";
import $api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import GridContainer from "../GridContainer/GridContainer";
import SingleEvent from "./SingleEvent";
import { Alert } from "@material-ui/lab";
import Loader from "../Loader/Loader";

const EventList = () => {
  const { data: prevEvents, dispatch, error, loading } = useEventList();
  const [page, setPage] = useState<number>(1);
  const [isLimit, setIsLimit] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isLimit) {
      setPage((prev) => ++prev);
    }
  }, [inView, isLimit]);

  useEffect(() => {
    (async () => {
      if (page !== 1) {
        try {
          dispatch({ type: EEventListActionType.EVET_LIST_REQUEST });
          const { data } = await $api.get(`api/events?limit=5&page=${page}`);
          if (!data?.length) {
            setIsLimit(true);
          }
          dispatch({
            type: EEventListActionType.EVENT_LIST_ADD_ITEMS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: EEventListActionType.EVET_LIST_ERROR,
            payload: handleAxiosError(error as AxiosError),
          });
        }
      }
    })();
  }, [page, dispatch]);
  return (
    <>
      <GridContainer>
        {prevEvents?.map((event) => (
          <SingleEvent key={event.id} event={event} />
        ))}
      </GridContainer>
      {/* {loading && <Loader />} */}
      <div className="observer-item" ref={ref}></div>
      {isLimit && <Alert severity="info">You have shown all events!</Alert>}

      <style>{`
      .observer-item{
        visibility:hidden
      }
      `}</style>
    </>
  );
};

export default EventList;
