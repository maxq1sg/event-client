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
const SearchResults: FC<ISearchResultsProps> = ({
  searchResults,
  loading,
  error,
}) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>{error.message}</AlertTitle>
        {error?.body?.map((err) => (
          <div key={err.param}>{err.msg}</div>
        ))}
      </Alert>
    );
  }
  if (!searchResults) {
    return <Alert severity="info">Type something to search!</Alert>;
  }
  if (!searchResults?.length) {
    return <Alert severity="info">Nothing found on your search query</Alert>;
  }
  return (
    <GridContainer>
      {searchResults?.map((event) => (
        <SingleEvent key={event.id} event={event} />
      ))}
    </GridContainer>
  );
};

export default SearchResults;
