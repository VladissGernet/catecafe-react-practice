import styled from "styled-components";

import { StyledContainer } from "/src/components/layout/container/styled";

const StyledFooter = styled.footer`
  padding: 30px 0;
  background-color: ${(props) => props.theme.colorLight};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  z-index: 0;

  ${StyledContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledData = styled.span`
  background-color: ${(props) => props.theme.colorForLightBackground};
  padding: 10px;
  border-radius: 10px;
`;

export { StyledFooter, StyledData };
