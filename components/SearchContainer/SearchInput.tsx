import { useField } from "formik";
import { FC } from "react";
import styled, { isStyledComponent } from "styled-components";

const CustomInputField = styled.input``;

const FormikInputField: FC<{ fieldName: string }> = ({ fieldName }) => {
  const [field, meta, helpers] = useField(fieldName);

  return <CustomInputField value={meta.value} onChange={field.onChange} />;
};

export default FormikInputField;
