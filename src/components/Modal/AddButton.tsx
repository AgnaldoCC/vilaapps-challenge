import styled from "@emotion/styled";
import Image from "next/image";
import { useIsFormValid } from "../../hooks/useFormData";

type AddButtonProps = {
  isValid: boolean;
}

const AddButton = () => {
  const isValid = useIsFormValid();
  return (
    <AddCountdown form="modalForm" isValid={isValid}>
      <Image src={isValid ? "/countdown/ready_enabled.png" : "/countdown/ready_disabled.png"} width={86} height={86} alt="Ready"/>
    </AddCountdown>
  )
};

const AddCountdown = styled.button<AddButtonProps>`
  background: transparent;
  border: none;
  outline: none;
  width: fit-content;
  cursor: pointer;
  margin: 20px auto 0;
  pointer-events: ${props => props.isValid ? 'all' : 'none'};
`;

export default AddButton;