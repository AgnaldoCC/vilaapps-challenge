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
    if(props.id === 'days') {
      const now = new Date();
      now.setDate(now.getDate() + +event.target.value);
      const [year, month, day] = now.toISOString().split('T')[0].split('-');
      setFormData({...formData, date: `${month}/${day}/${year}` });  
    } else {
      setFormData({...formData, date: event.target.value});
    }
  }

  if (props.id === 'date') return <DateContent onChange={handleChange} />;
  return <DaysContent onChange={handleChange} />;
};

export default DateSelectionContent;