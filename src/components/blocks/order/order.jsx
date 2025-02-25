import React from 'react';

import { Container } from 'src/components/layout/container/container';
import { Title, TitleSizes } from 'src/components/ui/title/title';
import { FormOrder } from 'src/components/blocks/form-order/form-order';

import { StyledOrder } from './styled';

const Order = () => {
  return (
    <StyledOrder>
      <Container>
        <Title level={2} size={TitleSizes.BIG}>Купить билет</Title>
        <FormOrder />
      </Container>
    </StyledOrder>
  )
};

export { Order };
