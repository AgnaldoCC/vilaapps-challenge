
import { useFormData } from "../../hooks/useFormData";
import TextArea from "./TextArea"

const InputDescription = () => {
  const formData = useFormData((state) => state.formData);
  const setFormData = useFormData((state) => state.setFormData);
  const handleChange = (event: any) => {
    setFormData({...formData, description: event.target.value});
  }
  return (
    <TextArea label={"Description:"} maxLength={280} name='description' onChange={handleChange} value={formData.description} />
  )
};

export default InputDescription;