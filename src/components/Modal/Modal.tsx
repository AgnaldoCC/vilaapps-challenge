import React, { ReactNode } from 'react';
import { ModalContentContainer } from './ModalContentContainer';
import { ModalOverlay } from './ModalOverlay';

type ModalProps = {
  onClose: () => void;
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
      <ModalContentContainer onClick={handleContentClick} className={props.className}>{props.children}</ModalContentContainer>
    </ModalOverlay>
  );
};

export default Modal;
