import styled from "@emotion/styled";
import Image from 'next/image';
import { useFormData } from "../../hooks/useFormData";

type ModalIconProps = {
  imgSrc: string;
};

type ButtonProps = {
  isSelected: boolean;
};

const ModalIcon = (props: ModalIconProps) => {
  const setFormData = useFormData(state => state.setFormData);
  const formData = useFormData(state => state.formData);
  const isSelected = formData.icon === props.imgSrc;

  const handleClick = (event: any) => {
    if(isSelected) {
      setFormData({...formData, icon: ''});
    } else {
      setFormData({...formData, icon: event.target.id});
    }
  }


  return (
    <ModalImgContainer onClick={handleClick} id={props.imgSrc} isSelected={isSelected}>
      <Image width={50} height={50} alt="ModalImage" src={props.imgSrc} id={props.imgSrc} />
    </ModalImgContainer>
  )
};

const ModalImgContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  padding: 15px;
  background: #FFFFFF;
  border: ${props => props.isSelected ? '3px solid #FD9477' : 'none'};
  cursor: pointer;
`;

export default ModalIcon;