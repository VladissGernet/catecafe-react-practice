import React from 'react';
import { useMatch } from 'react-router-dom';

import { StyledHeader, StyledFormNavLink } from './styled';

import { Container } from 'src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

const Header = () => {
const isLocationForm = useMatch({ path: '/form' });

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {!isLocationForm && <StyledFormNavLink to="/form">Купить билет</StyledFormNavLink>}
      </Container>
    </StyledHeader>
  );
};

export { Header };
