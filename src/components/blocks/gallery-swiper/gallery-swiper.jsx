import React from 'react';

import { Img } from 'src/components/styled/img';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import {
  StyledSwiper,
  StyledSlide,
 } from './styled';

const renderSwiperBullets = (index, className, slides) => {
  return `<div class="${className}">
    <img class="${className}-img" src="${slides[index].src}" alt="${slides[index].alt}">
  </div>`;
};

const GallerySwiper = ({slides}) => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => renderSwiperBullets(index, className, slides),
  };

  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={pagination}
      loop
    >
      {
        slides
        && slides.length
        && slides.map((slide) => {
          return (
            <StyledSlide key={slide.id}>
              <Img src={slide.src} alt={slide.alt} />
            </StyledSlide>
          );
        })
      }
    </StyledSwiper>
  )
};

export { GallerySwiper };
