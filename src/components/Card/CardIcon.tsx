import styled from "@emotion/styled";
import Image from 'next/image';

type CardIconProps = {
  imgSrc?: string;
};

const CardIcon = (props: CardIconProps) => {
  if(!props.imgSrc) return null;
  return (
    <CardImgContainer>
      <Image width={50} height={50} alt="CardImage" src={props.imgSrc} />
    </CardImgContainer>
  )
};

const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  padding: 15px;
  background: #FFFFFF;
`;

export default CardIcon;