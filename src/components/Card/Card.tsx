import styled from '@emotion/styled';
import { useState } from 'react';
import { getDate, getDateDiffence } from '../../utils/date';
import Column from '../General/Column';
import Row from '../General/Row';
import CardDate from './CardDate';
import CardDaysLeft from './CardDaysLeft';
import CardIcon from './CardIcon';
import CardOverflow from './CardOverflow';
import CardTitle from './CardTitle';

type CardProps = {
  title: string;
  description: string;
  time: string;
  image?: string;
};

type CardContainerProps = {
  diff: number;
};

const Card = (props: CardProps) => {
  const daysDiff = getDateDiffence(props.time);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardContainer onClick={() => setIsOpen(!isOpen)} diff={daysDiff}>
      <Row>
        <CardIcon imgSrc={props.image} />
        <Column gap={15} margin={"0px auto 0px 30px"}>
          <CardTitle>{props.title.toLowerCase()}</CardTitle>
          <CardDate>{getDate(props.time)}</CardDate>
        </Column>
        <CardDaysLeft diff={daysDiff} />
      </Row>
      <CardOverflow description={props.description} isOpen={isOpen} />
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
  cursor: not-allowed;
`;

export default Card;