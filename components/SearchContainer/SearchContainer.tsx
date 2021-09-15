import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import CustomCheckbox from "./CustomCheckbox";
import FormikInputField from "./SearchInput";

const CheckboxGroup = styled.div`
  display: flex;
`;
const mockData = [
  { id: 1, name: "SPORT" },
  { id: 2, name: "SPORTd2" },
  { id: 3, name: "SPOR3" },
  { id: 4, name: "SPORT4" },
  { id: 5, name: "SPORT5" },
];
const SearchContainer = () => {
  return (
    <Formik
      initialValues={{
        query: "",
        categoryIds: [],
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FormikInputField fieldName="query" />
          <CheckboxGroup>
            {mockData.map((item) => (
              <CustomCheckbox key={item.id} id={item.id} name={item.name} />
            ))}
          </CheckboxGroup>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchContainer;
