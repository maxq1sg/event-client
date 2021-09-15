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
  console.log(searchResults, loading, error);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error.message}</div>
      ) : searchResults?.length ? (
        <GridContainer>
          {searchResults?.map((event) => (
            <SingleEvent key={event.id} event={event} />
          ))}
        </GridContainer>
      ) : (
        <div>не найдено</div>
      )}
    </>
  );
};

export default SearchResults;
