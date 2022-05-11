import styled from "@emotion/styled";
import { useFormData } from "../../hooks/useFormData";
import AddCountdownButton from "../AddCountdownButton";
import Modal from "../Modal/Modal";
import ModalContent from "../Modal/ModalContent";
import HeaderSubtitle from "./HeaderSubtitle";

export type HeaderProps = {
  setModalOpen: (value: boolean) => void;
  modalOpen: boolean;
}

const Header = (props: HeaderProps) => {
  const resetFormData = useFormData(state => state.resetFormData);
  const handleModalClose = () => {
    resetFormData();
    props.setModalOpen(false);
  }

  return (
    <>
    <HeaderContainer>
      <HeaderText>countdown</HeaderText>
    </HeaderContainer>
    <HeaderSubtitle />
    <AddCountdownButton onClick={() => props.setModalOpen(true)} />
    <Modal isOpen={props.modalOpen} onClose={handleModalClose}>
      <ModalContent closeModal={() => props.setModalOpen(false)} />
    </Modal>
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