import { Field } from "formik";
import { FC } from "react";
import styled from "styled-components";

interface ICustomCheckbox {
  id: number;
  name: string;
}
const CustomLabel = styled.label``;

const CustomCheckbox: FC<ICustomCheckbox> = ({ id, name }) => {
  return (
    <CustomLabel>
      <Field type="checkbox" name="categoryIds" value={id} />
      {name}
    </CustomLabel>
  );
};

export default CustomCheckbox;
