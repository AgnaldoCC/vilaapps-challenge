import styled from "@emotion/styled";
import { useFormData } from "../../../hooks/useFormData";
import Input from "../../Input/Input"
import { DateProps } from "./DateSelectionContent";
import { getDateDifference } from '../../../utils/date';


const DaysContent = (props: DateProps) => {
  const formData = useFormData((state) => state.formData);
  return <DaysInput name='dateContent' type={"number"} min={1} max={9999} maxLength={4} placeholder={'dddd'} onChange={props.onChange} defaultValue={getDateDifference(formData.date)} />;
};

const DaysInput = styled(Input)`
  max-width: 70px !important;
  height: 42px;
  font-size: 24px;
  font-weight: 600;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  -moz-appearance: textfield;
`;

export default DaysContent;

