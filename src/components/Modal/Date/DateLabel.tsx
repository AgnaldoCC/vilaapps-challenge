import styled from "@emotion/styled";
import { useFormData } from "../../../hooks/useFormData";

type DateLabelProps = {
  label?: string;
  id: string;
}

type ContainerProps = {
  isSelected: boolean;
}

const DateLabel = (props: DateLabelProps) => {
  const formData = useFormData(state => state.formData);
  const setFormData = useFormData(state => state.setFormData);

  const isSelected = formData.dateModel === props.id;

  const handleClick = (event: any) => {
    setFormData({ ...formData, dateModel: props.id })
  };

  return (
    <DateLabelContainer isSelected={isSelected} id={props.id} onClick={handleClick}>
      {props.label}
    </DateLabelContainer>
  )
};

const DateLabelContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.isSelected ? "#FD9477" : "rgba(253, 148, 119, 0.69)"};
  border-radius: 42px;
  padding: 0px 12px 2px 12px;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  opacity: ${props => props.isSelected ? "1" : "0.5"};
`;

export default DateLabel;