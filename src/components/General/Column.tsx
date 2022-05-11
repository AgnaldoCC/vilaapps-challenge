import styled from "@emotion/styled";
import { ReactNode } from "react";

type ColumnProps = {
  gap?: number;
  margin?: string;
  children: ReactNode;
};

const Column = (props: ColumnProps) => {
  return (
    <ColumnComponent gap={props.gap} margin={props.margin}>
      {props.children}
    </ColumnComponent>
  )
};

const ColumnComponent = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap && `${props.gap}px`};
  margin: ${props => props.margin && props.margin};
`;

export default Column;