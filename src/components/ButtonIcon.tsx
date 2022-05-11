import styled from "@emotion/styled";
import { ReactNode } from "react";

type ButtonIconProps = {
  children: ReactNode;
};

const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <ButtonIconStyled>
      {props.children}
    </ButtonIconStyled>
  )
};

const ButtonIconStyled = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ButtonIcon;