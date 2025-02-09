import React, { useContext } from 'react';

import { AppContext } from '/src/components/app/app';
import { Container } from '/src/components/layout/container/container';
import { Title } from 'src/components/ui/title/title';
import { PetCard } from '/src/components/blocks/pet-card/pet-card';

import { StyledPets, StyledPetsList, StyledLink } from './styled';

const Pets = () => {
  const data = useContext(AppContext);

  return (
    <StyledPets>
      <Container>
        <Title level={2}>Наши звёзды</Title>
        <StyledPetsList>
          {data
          && data.length
          && data.map((item) =>
            <PetCard key={item.id} data={item} />
          )}
        </StyledPetsList>
        <StyledLink to="/form">Купить билет</StyledLink>
      </Container>
    </StyledPets>
  )
};

export { Pets };
