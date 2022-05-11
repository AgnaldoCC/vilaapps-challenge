import styled from "@emotion/styled";
import { useFormData } from "../../../hooks/useFormData";
import Column from "../../General/Column";
import Row from "../../General/Row";
import { InputLabel } from "../../Input/InputLabel";
import DateLabel from "./DateLabel"
import DateSelectionContent from "./DateSelectionContent";

const DateSelection = () => {
  const formData = useFormData(state => state.formData);
  return (
    <Column gap={25} margin={"15px 0 0"}>
      <DateSelectionContainer>
        <DateLabel label={'Choose Date'} id='date' />
        <InputLabel>or</InputLabel>
        <DateLabel label={'Days Left'} id='days' />
      </DateSelectionContainer>
      <DateSelectionContent id={formData.dateModel} />
    </Column>
  )
};

const DateSelectionContainer = styled(Row)`
  margin: 0 auto;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export default DateSelection;