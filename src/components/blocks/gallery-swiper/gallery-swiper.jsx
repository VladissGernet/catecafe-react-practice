import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import {
  StyledSwiper,
  StyledSlide
 } from './styled';

const GallerySwiper = ({slides}) => {
  // Доделать особую пагинацию
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
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
              <img src={slide.src} alt={slide.alt} />
            </StyledSlide>
          );
        })
      }
      {/* <StyledSlide>Slide 1</StyledSlide>
      <StyledSlide>Slide 2</StyledSlide>
      <StyledSlide>Slide 3</StyledSlide>
      <StyledSlide>Slide 4</StyledSlide> */}
    </StyledSwiper>
  )
};

export { GallerySwiper };
