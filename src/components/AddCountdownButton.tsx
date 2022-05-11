import styled from "@emotion/styled";

type AddCountdownButtonProps = {
  onClick: () => void;
};

const AddCountdownButton = (props: AddCountdownButtonProps) => {
  return (
    <Button onClick={props.onClick}>
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.575 34.608V19.76H0.983V15.024H15.575V0.559998H20.311V15.024H35.159V19.76H20.311V34.608H15.575Z" fill="#BDD7CE" />
      </svg>
    </Button>
  )
};

const Button = styled.button`
  border: 3px solid #BDD7CE;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
`;

export default AddCountdownButton;