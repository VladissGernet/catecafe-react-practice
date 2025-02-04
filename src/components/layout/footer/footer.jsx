import React from "react";

import { StyledFooter } from "./styled";

import { Container } from '/src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo />
      </Container>
    </StyledFooter>
  );
};

export { Footer };
