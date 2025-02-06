import styled from 'styled-components';

import { StyledTitle } from 'src/components/ui/title/styled';
import { StyledContainer } from 'src/components/layout/container/styled';

const StyledPets = styled.section`
  padding: 100px 0;

  background-color: ${(props) => props.theme.colorForDarkBackground};

  ${StyledContainer} > ${StyledTitle} {
    text-align: center;
  }
`;

export {
  StyledPets,
 };
