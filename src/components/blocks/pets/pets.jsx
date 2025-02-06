import React from 'react';

import { Container } from 'src/components/layout/container/container';
import { Title } from 'src/components/ui/title/title';

import { StyledPets } from './styled';

const Pets = () => {
  return (
    <StyledPets>
      <Container>
        <Title level={2}>Наши звёзды</Title>
      </Container>
    </StyledPets>
  )
};

export { Pets };
