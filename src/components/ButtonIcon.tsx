import styled from "@emotion/styled";
import { ReactNode } from "react";

type ButtonIconProps = {
  onClick?: (event: any) => void;
  children: ReactNode;
};

const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <ButtonIconStyled onClick={props.onClick}>
      {props.children}
    </ButtonIconStyled>
  )
};

const ButtonIconStyled = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: fit-content;
  cursor: pointer;
`;

export default ButtonIcon;