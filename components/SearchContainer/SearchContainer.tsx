import { Formik, Form } from "formik";
import { useContext, useState } from "react";
import { HomeContext } from "../../pages";
import { IEvent } from "../../types/event";
import { ISearchInitValues } from "../../types/searchInitValues";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import CustomTextInput from "../CustomTextInput/CustomTextInput";

const SearchContainer = () => {
  const { categories } = useContext(HomeContext);
  const [searchResults, setSearchResults] = useState<IEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const initialValues: ISearchInitValues = {
    query: "",
    categoryIds: [],
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <CustomTextInput
            name="query"
            placeholder="your search query..."
            type="text"
          />
          <CheckBoxGroup values={values} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchContainer;
