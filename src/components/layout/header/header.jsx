import React from 'react';
import { useMatch } from 'react-router-dom';

import { StyledHeader, StyledFormNavLink } from './styled';

import { Logo } from '/src/components/ui/logo/logo';

const Header = () => {
const isLocationForm = useMatch({ path: '/form' });

  return (
    <StyledHeader>
      <Logo />
      {!isLocationForm && <StyledFormNavLink to="/form">Form</StyledFormNavLink>}
    </StyledHeader>
  );
};

export { Header };
