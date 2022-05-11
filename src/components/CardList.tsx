import styled from "@emotion/styled";
import { cards } from '../../mock';
import Card from "./Card/Card";


const CardList = () => {
  return (
    <CardListContainer>
      {cards.map((card, index) => <Card key={index} image={card.image} title={card.title} time={card.time} description={card.description} />)}
    </CardListContainer>
  )
};

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 16px;
`;

export default CardList;