import { ReactNode } from "react";
import styled from "@emotion/styled";

type CardDateProps = {
  children: ReactNode;
};

const CardDate = (props: CardDateProps) => {
  return <Date>{props.children}</Date>
};

const Date = styled.label`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
`;

export default CardDate;