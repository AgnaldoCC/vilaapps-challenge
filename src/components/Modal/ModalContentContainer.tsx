import styled from '@emotion/styled';

export const ModalContentContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #9ca3af;
  box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.12);
  padding: 16px;
  width: 90%;
  flex-direction: column;
  max-height: 100vh;
  z-index: 200;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;
