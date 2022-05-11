import styled from '@emotion/styled';

export const ModalContentContainer = styled.div`
  display: flex;
  background-color: #F0EBCE;
  border-radius: 12px;
  border: 4px solid #DED9BE;
  box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.12);
  padding: 16px;
  flex-direction: column;
  z-index: 200;
  width: 100%;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;
