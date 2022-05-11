import styled from "@emotion/styled";
import Column from "../General/Column";
import Row from "../General/Row";
import ModalIcon from "./ModalIcon";

const images = [
  "/countdown/plane_icon.png",
  "/countdown/trophy_icon.png",
  "/countdown/balloon_icon.png",
  "/countdown/camera_icon.png",
  "/countdown/bbq_icon.png",
  "/countdown/music_icon.png",
  "/countdown/drink_icon.png",
];

const IconSelection = () => {
  return (
    <Column>
      <ChooseIcon>Choose an icon:</ChooseIcon>
      <CustomRow>
        {images.map((source, index) => <ModalIcon imgSrc={source} key={index} />)}
      </CustomRow>
    </Column>
  )
};

const CustomRow = styled(Row)`
  gap: 11px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChooseIcon = styled.label`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
`;

export default IconSelection;