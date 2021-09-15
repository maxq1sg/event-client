import React, { FC } from "react";
import { IError } from "../../types/error";
import { IEvent } from "../../types/event";
import { EMessage } from "../../types/message";
import SingleEvent from "../EventList/SingleEvent";
import GridContainer from "../GridContainer/GridContainer";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

interface ISearchResultsProps {
  searchResults: IEvent[] | null;
  loading: boolean;
  error: IError | null;
}

const SearchResults: FC<ISearchResultsProps> = ({
  searchResults,
  loading,
  error,
}) => {
  console.log(searchResults, loading, error);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={EMessage.ERROR}>{`${error.message}: ${error?.body?.map(
          (err) => err.msg
        )}`}</Message>
      ) : searchResults?.length ? (
        <GridContainer>
          {searchResults?.map((event) => (
            <SingleEvent key={event.id} event={event} />
          ))}
        </GridContainer>
      ) : (
        <Message type={EMessage.INFO}>
          По вашему запросу ничего не найдено
        </Message>
      )}
    </>
  );
};

export default SearchResults;
