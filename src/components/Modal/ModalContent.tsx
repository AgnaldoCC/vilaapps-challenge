import Column from "../General/Column";
import IconSelection from "./IconSelection";
import ModalForm from "./ModalForm";

export type ModalContentProps = {
  closeModal: () => void;
}

const ModalContent = (props: ModalContentProps) => {
  return (
    <Column gap={10}>
      <IconSelection />
      <ModalForm closeModal={props.closeModal} />
    </Column>
  )
};

export default ModalContent;