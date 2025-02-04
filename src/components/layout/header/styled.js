import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { StyledContainer } from '../container/styled';

const StyledHeader = styled.header`
  height: 100px;
  background-color: tomato;

  ${StyledContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledFormNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;

  border: 4px solid black;
  padding: 20px;
  display: inline-block;

  &:hover {
    opacity: 0.5;
  }
`;

export { StyledHeader, StyledFormNavLink };
