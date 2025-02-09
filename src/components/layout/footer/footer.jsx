import React from "react";

import { StyledFooter, StyledData } from "./styled";

import { Container } from '/src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo />
        <StyledData>© 2022 Котокафе</StyledData>
      </Container>
    </StyledFooter>
  );
};

export { Footer };
