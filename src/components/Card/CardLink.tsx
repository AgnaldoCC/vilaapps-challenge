import { ReactNode } from "react";
import styled from "@emotion/styled";

type CardLinkProps = {
  children: ReactNode;
};

const CardLink = (props: CardLinkProps) => {
  return <Link>{props.children}</Link>
};

const Link = styled.a`
  cursor: pointer;
  position: relative;
  width: fit-content;

  &:after {
    position: absolute;
    top: 20px;
    left: 0;
    content: "";
    width: 0%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default CardLink;