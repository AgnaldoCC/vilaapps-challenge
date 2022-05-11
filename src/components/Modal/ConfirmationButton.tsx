import styled from "@emotion/styled";

type ConfirmationButtonProps = {
  onClick: () => void;
  label: string;
}

const ConfirmationButton = (props: ConfirmationButtonProps) => {
  const handleClick = (event: any) => {
    event.stopPropagation;
    props.onClick();
  }
  return (
    <CustomButton onClick={handleClick}>
      {props.label}
    </CustomButton>
  )
};

const CustomButton = styled.button`
  background: rgba(253, 148, 119, 0.69);
  border-radius: 42px;
  padding: 10px;
  border: none;
  outline: none;
`;

export default ConfirmationButton;