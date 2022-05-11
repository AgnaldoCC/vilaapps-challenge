import styled from "@emotion/styled";

const HeaderSubtitle = () => {
  return <Subtitle>{"it's time to do your own "}<Countdown>countdown</Countdown>!</Subtitle>
};

const Subtitle = styled.label`
  font-weight: 400;
  font-size: 24px;
  display: block;
  text-align: center;
  margin: 30px 0;
`;

const Countdown = styled.span`
  color: #FD9477;
`;

export default HeaderSubtitle;