import styled from '@emotion/styled';
import InputMask from 'react-input-mask';
import { useFormData } from '../../../hooks/useFormData';
import { DateProps } from './DateSelectionContent';

const DateContent = (props: DateProps) => {
  const formData = useFormData((state) => state.formData);
  return (
    <CustomInput mask='99/99/9999' placeholder='mm/dd/yyyy' name='dateContent' onChange={props.onChange} value={formData.date} />
  )
};

const CustomInput = styled(InputMask)`
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
`;

export default DateContent;