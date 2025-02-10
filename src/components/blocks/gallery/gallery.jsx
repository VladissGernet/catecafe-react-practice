import React from 'react';

import { Container } from 'src/components/layout/container/container';
import { Title, TitleSizes } from 'src/components/ui/title/title';
import { GallerySwiper } from 'src/components/blocks/gallery-swiper/gallery-swiper';

import { StyledGallery } from './styled';

const Gallery = () => {
  return (
    <StyledGallery>
      <Container>
        <Title level={2} size={TitleSizes.BIG}>Галерея нашего кафе</Title>
        <GallerySwiper />
      </Container>
    </StyledGallery>
  );

};

export { Gallery };
