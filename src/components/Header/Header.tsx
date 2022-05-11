import styled from "@emotion/styled";
import AddCountdownButton from "../AddCountdownButton";
import Modal from "../Modal/Modal";
import HeaderSubtitle from "./HeaderSubtitle";

const Header = () => {
  return (
    <>
    <HeaderContainer>
      <HeaderText>countdown</HeaderText>
    </HeaderContainer>
    <HeaderSubtitle />
    <AddCountdownButton onClick={() => alert('clicked')} />
    <Modal isOpen={false} onClose={() => alert('closed')}>Testando</Modal>
    </>
  )
};

const HeaderContainer = styled.div`
  background: #F0EBCE;
  padding: 50px 0 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0px 50% 50%;

  @media screen and (min-width: 1024px) {
    padding: 70px 0 40px 0px;
  }
`;

const HeaderText = styled.h1`
  font-weight: 400;
  font-size: 50px;
  margin: 0;

  @media screen and (min-width: 1024px) {
    font-size: 80px;
  }
`;

export default Header;