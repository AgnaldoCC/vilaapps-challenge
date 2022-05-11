import styled from "@emotion/styled";
import { TextareaHTMLAttributes } from "react";
import { InputLabel } from "./InputLabel";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <>
      <InputLabel>{props.label}</InputLabel>
      <StyledTextArea {...props} />
  </>
  )
};

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 21px;
  margin: 0 auto;
  display: flex;
  border: none;
  padding: 12px;
  font-family: Darker Grotesque;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  resize: none;

  @media screen  and (min-width: 1024px) {
    max-width: 292px;
  }
`;

export default TextArea;