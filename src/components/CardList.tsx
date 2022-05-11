import styled from "@emotion/styled";
import { useCountdown } from "../hooks/useCountdownList";
import Card from "./Card/Card";
import { HeaderProps } from "./Header/Header";

const CardList = (props: HeaderProps) => {
  const countdownList = useCountdown((state) => state.countdownList);
  return (
    <CardListContainer>
      {countdownList.length === 0 && <NoCountdowns>{"You don't have any events yet :("}</NoCountdowns>}
      {countdownList.map((card) => <Card setModalOpen={props.setModalOpen} id={card.id} key={card.id} card={card} />)}
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

const NoCountdowns = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  color: #A09E9E;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

export default CardList;