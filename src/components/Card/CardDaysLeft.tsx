import styled from "@emotion/styled";
import { getDateDiffence } from "../../utils/date";
import Column from "../General/Column";

type CardDaysLeftProps = {
  diff: number;
};

const CardDaysLeft = (props: CardDaysLeftProps) => {
  return (
    <CenterColumn>
      <Days diff={props.diff}>{Math.abs(props.diff)}</Days>
      <DaysLabel>{`days ${props.diff < 0 ? 'ago' : 'left'}`}</DaysLabel>
    </CenterColumn>
  )
};

const Days = styled.label<CardDaysLeftProps>`
  color: ${props => props.diff < 0 ? "#A09E9E" : "#FD9477"};
  font-weight: 600;
  font-size: 45px;
  text-align: center;
`;

const DaysLabel = styled.label`
  font-weight: 400;
  font-size: 15px;
`;

const CenterColumn = styled(Column)`
  align-items: center;
`;

export default CardDaysLeft;