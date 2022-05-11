import Form from "../Form/Form";
import TitleInput from "../Input/TitleInput";
import InputDescription from "../Input/InputDescription";
import DateSelection from "./Date/DateSelection";
import AddButton from "./AddButton";
import { useFormData } from "../../hooks/useFormData";
import { useCountdown } from "../../hooks/useCountdownList";
import { ModalContentProps } from "./ModalContent";

const ModalForm = (props: ModalContentProps) => {
  const formData = useFormData((state) => state.formData);
  const resetForm = useFormData((state) => state.resetFormData);
  const addCountdown = useCountdown((state) => state.addCountdown);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addCountdown(formData);
    event.target.reset();
    resetForm();
    props.closeModal();
  }

  return (
    <Form onSubmit={handleSubmit} id='modalForm'>
      <TitleInput />
      <InputDescription />
      <DateSelection />
      <AddButton />
    </Form>
  )

};

export default ModalForm;