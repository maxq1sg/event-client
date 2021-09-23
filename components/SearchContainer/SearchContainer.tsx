import { AxiosError } from "axios";
import { Formik, Form } from "formik";
import { useContext, useState } from "react";
import { SearchPageContext } from "../../pages/search";
import { IError } from "../../types/error";
import { IEvent } from "../../types/event";
import { ISearchInitValues } from "../../types/searchInitValues";
import $api from "../../utils/api";
import handleAxiosError from "../../utils/handleAxiosError";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import CustomSearchInput from "../CustomTextInput/CustomTextInput";
import SearchResults from "../SearchResults/SearchResults";

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState<IEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const { categoryList } = useContext(SearchPageContext);
  const initialValues: ISearchInitValues = {
    query: "",
    categories: categoryList?.map((category) => category.id) || [],
  };
  // useEffect(() => {
  //   console.log(searchResults, loading, error);
  // }, [searchResults, loading, error]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setSearchResults(null);
          setError(null);
          try {
            setLoading(true);
            const { data } = await $api.post("/api/events/search", values);
            setSearchResults(data);
            setLoading(false);
          } catch (error) {
            //todo
            setLoading(false);
            setError(handleAxiosError(error as AxiosError));
          }
        }}
      >
        {({ values }) => (
          <Form>
            <CustomSearchInput
              name="query"
              placeholder="your search query..."
              type="text"
            />
            <CheckBoxGroup values={values} />
          </Form>
        )}
      </Formik>
      <SearchResults
        searchResults={searchResults}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default SearchContainer;
