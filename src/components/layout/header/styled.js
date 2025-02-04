import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { StyledContainer } from '../container/styled';
import { ButtonStyles } from '/src/components/styled';

const StyledHeader = styled.header`
  padding: 30px 0;
  background-color: ${(props) => props.theme.colorLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${StyledContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 67px;
  }
`;

const StyledFormNavLink = styled(NavLink)`
  ${ButtonStyles}
`;

export { StyledHeader, StyledFormNavLink };
