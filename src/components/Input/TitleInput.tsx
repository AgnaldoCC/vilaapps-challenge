import { useFormData } from "../../hooks/useFormData";
import Input from "./Input";

const TitleInput = () => {
  const formData = useFormData((state) => state.formData);
  const setFormData = useFormData((state) => state.setFormData);
  const handleChange = (event: any) => {
    setFormData({...formData, title: event.target.value});
  }
  return (
    <Input label='Event Name:' name='title' maxLength={20} onChange={handleChange} value={formData.title} />
  )
};

export default TitleInput;