import styled from '@emotion/styled';
import { css } from '@emotion/core';

type ModalOverlayProps = {
  isOpen: boolean;
};

const ModalOpen = css`
  opacity: 1;
  pointer-events: all;
`;

const ModalClose = css`
  opacity: 0;
  pointer-events: none;
`;

export const ModalOverlay = styled.div<ModalOverlayProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow-y: auto;
  z-index: 100;
  transition: opacity 0.3s ease-in-out;

  ${({ isOpen }) => (isOpen ? ModalOpen : ModalClose)}
`;
