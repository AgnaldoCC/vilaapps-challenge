import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { ModalContentContainer } from './ModalContentContainer';
import { ModalOverlay } from './ModalOverlay';

type ModalProps = {
  onClose: (event?: any) => void;
  isOpen: boolean;
  className?: string;
  children: ReactNode;
};

const Modal = (props: ModalProps) => {
  const handleOverlayClick = () => {
    props.onClose();
  };

  const handleContentClick = (event: React.BaseSyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <ModalOverlay role='Modal' isOpen={props.isOpen} onClick={handleOverlayClick}>
      <ModalContentContainer onClick={handleContentClick} className={props.className}>
        <CloseModalButton onClick={handleOverlayClick}>X</CloseModalButton>
        {props.children}
      </ModalContentContainer>
    </ModalOverlay>
  );
};

const CloseModalButton = styled.button`
  outline: none;
  border: none;
  width: fit-content;
  background: transparent;
  font-size: 18px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;

export default Modal;
