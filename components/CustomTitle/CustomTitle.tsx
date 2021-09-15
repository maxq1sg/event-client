import { FC } from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2rem;
  color: orange;
`;

const CustomTitle: FC = ({ children }) => {
  return <Title>{children}</Title>;
};

export default CustomTitle;
