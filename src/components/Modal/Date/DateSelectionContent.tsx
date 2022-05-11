import { useFormData } from "../../../hooks/useFormData";
import DateContent from "./DateContent";
import DaysContent from "./DaysContent";

type DateSelectionContentProps = {
  id?: string;
};

export type DateProps = {
  onChange: (event: any) => void;
}

const DateSelectionContent = (props: DateSelectionContentProps) => {
  const formData = useFormData((state) => state.formData);
  const setFormData = useFormData((state) => state.setFormData);
  const handleChange = (event: any) => {
    const now = new Date();
    if (props.id === 'days') {
      now.setDate(now.getDate() + +event.target.value);
      const date = now.toISOString().split('T')[0];
      setFormData({...formData, date: date });  
    } else {
      setFormData({ ...formData, date: event.target.value });
    }
  }
  if (props.id === 'date') return <DateContent onChange={handleChange} />;
  return <DaysContent onChange={handleChange} />;
};

export default DateSelectionContent;