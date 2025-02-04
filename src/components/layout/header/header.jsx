import React from 'react';
import { useMatch } from 'react-router-dom';

import { StyledHeader, StyledFormNavLink } from './styled';

import { Container } from 'src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

// TODO
// 2. Стилизовать кнопку перехода на form

const Header = () => {
const isLocationForm = useMatch({ path: '/form' });

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {!isLocationForm && <StyledFormNavLink to="/form">Form</StyledFormNavLink>}
      </Container>
    </StyledHeader>
  );
};

export { Header };
