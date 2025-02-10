import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y';

const StyledSwiper = styled(Swiper)`
  outline: 5px solid tomato;
  height: 200px;

  padding-bottom: 100px;

  .swiper-button-next,
  .swiper-button-prev {
    outline: 5px solid green;

    position: absolute;
    bottom: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    z-index: 11;
  }

  .swiper-button-prev {
    &::before {
      content: "<";
    }
  }

  .swiper-button-next {
    right: 50px;

    &::before {
      content: ">";
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);

    bottom: 8px;
    left: 0;
    width: 100%;

    outline: 5px solid blue;
  }

  .swiper-pagination-bullet {
    margin: 0 4px;

    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    background: #000;
    opacity: 0.2;

    cursor: pointer;

    &-active {
      opacity: 1;
      background: blue;
      cursor: default;
    }
  }
`;

const StyledSlide = styled(SwiperSlide)`
  outline: 5px solid green;
`;

export {
  StyledSwiper,
  StyledSlide
 };

