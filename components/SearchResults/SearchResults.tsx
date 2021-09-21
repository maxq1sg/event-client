import { Alert, AlertTitle } from "@material-ui/lab";
import React, { FC } from "react";
import { IError } from "../../types/error";
import { IEvent } from "../../types/event";
import SingleEvent from "../EventList/SingleEvent";
import GridContainer from "../GridContainer/GridContainer";
import Loader from "../Loader/Loader";

interface ISearchResultsProps {
  searchResults: IEvent[] | null;
  loading: boolean;
  error: IError | null;
}
//todo ternar
const SearchResults: FC<ISearchResultsProps> = ({
  searchResults,
  loading,
  error,
}) => {
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
      ) : searchResults?.length ? (
        <Alert severity="info">Nothing found on your search query</Alert>
      ) : null}
    </>
  );
};

export default SearchResults;
