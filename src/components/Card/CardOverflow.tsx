import styled from "@emotion/styled";
import Image from "next/image";
import { FormData, useFormData } from "../../hooks/useFormData";
import ButtonIcon from "../ButtonIcon";
import Row from "../General/Row";
import CardDescription from "./CardDescription";

type CardOverflowProps = {
  card: FormData;
  isOpen: boolean;
  remove: () => void;
  setModalOpen: (value: boolean) => void;
}

const CardOverflow = (props: CardOverflowProps) => {
  const setFormData = useFormData((state) => state.setFormData);
  const formData = useFormData(state => state.formData);

  if (!props.isOpen) return null;

  const handleEditClick = () => {
    setFormData(props.card);
    props.setModalOpen(true);
  };

  return (
    <CardOverFlowContainer>
      <CardDescription>{props.card.description}</CardDescription>
      <IconsRow>
        <ButtonIcon onClick={handleEditClick}><Image src={'/countdown/edit_icon.png'} alt='EditIcon' width={20} height={20} /></ButtonIcon>
        <ButtonIcon onClick={props.remove}><Image src={'/countdown/trash_icon.png'} alt='TrashIcon' width={20} height={20} /></ButtonIcon>
      </IconsRow>
    </CardOverFlowContainer>
  )
};

const CardOverFlowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const IconsRow = styled(Row)`
  margin-top: 10px;
  justify-content: space-between;
`;

export default CardOverflow;