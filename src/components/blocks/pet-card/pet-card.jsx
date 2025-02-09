import React from 'react';

import { Title, TitleSizes } from 'src/components/ui/title/title';
import { Feature } from 'src/components/ui/feature/feature';

import {
  StyledCard,
  StyledImage,
  StyledDescription
 } from './styled';

const PetCard = ({data}) => {
  const { name, about, image, feature } = data;

  // Закончить карточку

  return (
    <StyledCard>
      <Title level={3} size={TitleSizes.SMALL}>{name}</Title>
      <StyledDescription dangerouslySetInnerHTML={{__html: about}}/>
      <StyledImage src={image} alt={name} />
      <Feature feature={feature} />
    </StyledCard>
  )
};

export { PetCard };
