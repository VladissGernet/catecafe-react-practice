import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledHeader, StyledFormNavLink } from './styled';

const Header = () => {
  const isLocationNotForm = useLocation().pathname !== '/form';

  return (
    <StyledHeader>
      Header
      {isLocationNotForm && <StyledFormNavLink to="/form">Form</StyledFormNavLink>}
    </StyledHeader>
  );
};

export { Header };
