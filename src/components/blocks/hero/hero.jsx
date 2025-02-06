import React from 'react';

import { Container } from 'src/components/layout/container/container';
import { Title, TitleSizes } from '/src/components/ui/title/title';

import {
  StyledHero,
  Description,
  WorkTime,
  Time,
  Address
} from './styled';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Title titleLevel={1} size={TitleSizes.BIG}>
          Первое в России котокафе
        </Title>
        <Description>
            Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
            из них ищет новый дом. Животных можно гладить, фотографировать, играть
            с ними.
        </Description>
        <WorkTime>
          Работаем с <Time datetime="T10:00">10:00</Time> до <Time datetime="T22:00">22:00</Time>
        </WorkTime>
        <Address>Санкт-Петербург, Большая Конюшенная улица, 27</Address>
      </Container>
    </StyledHero>
  )
};

export { Hero };

