import { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { InputLabel } from "./InputLabel";
import { useController } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  onChange?: (event: any) => void;
}

const Input = (props: InputProps) => {
  return (
    <>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <StyledInput {...props} />
    </>
  )
};

const StyledInput = styled.input`
  width: 100%;
  border-radius: 42px;
  margin: 0 auto;
  display: flex;
  border: none;
  padding: 12px;
  font-family: Darker Grotesque;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  text-align: center;

  @media screen  and (min-width: 1024px) {
    max-width: 292px;
  }
`;

export default Input;