import { ReactNode } from "react";
import styled from "@emotion/styled";

type CardDescriptionProps = {
  children: ReactNode;
};

const CardDescription = (props: CardDescriptionProps) => {
  return <Description>{props.children}</Description>
};

const Description = styled.label`
  font-weight: 300;
  font-size: 20px;
  margin: 20px 0 10px 0;
`;

export default CardDescription;