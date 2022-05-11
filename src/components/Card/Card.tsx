import styled from '@emotion/styled';
import { useState } from 'react';
import { useCountdown } from '../../hooks/useCountdownList';
import { FormData } from '../../hooks/useFormData';
import { getDate, getDateDifference } from '../../utils/date';
import Column from '../General/Column';
import Row from '../General/Row';
import CardDate from './CardDate';
import CardDaysLeft from './CardDaysLeft';
import CardIcon from './CardIcon';
import CardOverflow from './CardOverflow';
import CardTitle from './CardTitle';

type CardProps = {
  card: FormData;
  id: number;
  setModalOpen: (value: boolean) => void;
};

type CardContainerProps = {
  diff: number;
};

const Card = (props: CardProps) => {
  const daysDiff = getDateDifference(props.card.date);
  const [isOpen, setIsOpen] = useState(false);
  const removeCountdown = useCountdown(state => state.removeCountdown);
  const selfRemove = () => {
    removeCountdown(props.id);
  }

  return (
    <CardContainer onClick={() => setIsOpen(!isOpen)} diff={daysDiff}>
      <Row>
        <CardIcon imgSrc={props.card.icon} />
        <Column gap={15} margin={"0px auto 0px 30px"}>
          <CardTitle>{props.card.title.toLowerCase()}</CardTitle>
          <CardDate>{getDate(props.card.date)}</CardDate>
        </Column>
        <CardDaysLeft diff={daysDiff} />
      </Row>
      <CardOverflow card={props.card} isOpen={isOpen} remove={selfRemove} setModalOpen={props.setModalOpen} />
    </CardContainer>

  )
};

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  background: #EFEFEF;
  padding: 12px;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  gap: 10px;
  user-select: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  ${props => props.diff < 0 && DisabledCard};


  @media screen and (min-width: 1024px) {
    max-width: 590px;
    padding: 30px;
  }
`;

const DisabledCard = `
  opacity: 0.5;
`;

export default Card;