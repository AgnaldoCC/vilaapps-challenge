import { ReactNode } from "react";
import styled from "@emotion/styled";

type CardTitleProps = {
  children: ReactNode;
};

const CardTitle = (props: CardTitleProps) => {
  return <Title>{props.children}</Title>
};

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
`;

export default CardTitle;