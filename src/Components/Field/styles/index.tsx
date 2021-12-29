import { Row, Col } from "Components/Grid";
import styled from "styled-components";

export const FieldRow = styled(Row)`
  justify-content: space-between;
`;

export const FieldCol = styled(Col)<{ gap?: number }>`
  width: ${({ col, gap }) => {
    return ` calc(100% / ${col} - ${gap || 0}%)`;
  }};
`;
