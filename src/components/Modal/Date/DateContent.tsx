import styled from '@emotion/styled';
import { useFormData } from '../../../hooks/useFormData';
import { DateProps } from './DateSelectionContent';

const DateContent = (props: DateProps) => {
  const formData = useFormData((state) => state.formData);
  return (
    <CustomInput type={"date"} value={formData.date} onChange={props.onChange} />
  )
};

const CustomInput = styled.input`
  width: auto;
  padding: 5px 0;
  border-radius: 42px;
  margin: 0 auto;
  display: flex;
  border: none;
  font-family: Darker Grotesque;
  font-size: 24px;
  font-weight: 600;
  outline: none;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
`;

export default DateContent;