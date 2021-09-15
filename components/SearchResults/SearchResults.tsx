import { CircularProgress } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
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
        <Alert severity="error">
          <AlertTitle>{error.message}</AlertTitle>
          {error?.body?.map((err) => (
            <div key={err.param}>{err.msg}</div>
          ))}
        </Alert>
      ) : searchResults?.length ? (
        <GridContainer>
          {searchResults?.map((event) => (
            <SingleEvent key={event.id} event={event} />
          ))}
        </GridContainer>
      ) : searchResults?.length === 0 ? (
        <Alert severity="info">Nothing found on your search query</Alert>
      ) : null}
    </>
  );
};

export default SearchResults;
