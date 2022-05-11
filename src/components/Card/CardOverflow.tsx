import styled from "@emotion/styled";
import Image from "next/image";
import ButtonIcon from "../ButtonIcon";
import Row from "../General/Row";
import CardDescription from "./CardDescription";

type CardOverflowProps = {
  isOpen: boolean;
  description: string;
}

const CardOverflow = (props: CardOverflowProps) => {
  if (!props.isOpen) return null;
  return (
    <CardOverFlowContainer>
      <CardDescription>{props.description}</CardDescription>
      <IconsRow>
        <ButtonIcon><Image src={'/edit_icon.png'} alt='EditIcon' width={20} height={20} /></ButtonIcon>
        <ButtonIcon><Image src={'/trash_icon.png'} alt='TrashIcon' width={20} height={20} /></ButtonIcon>
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