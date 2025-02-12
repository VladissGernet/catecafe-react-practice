import styled from 'styled-components';

import { Img, ImgStyles } from 'src/components/styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y';

const StyledSwiper = styled(Swiper)`
  padding: 0 90px 184px;

  ${Img} {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    bottom: 40px;
    width: 64px;
    height: 64px;
    cursor: pointer;
    z-index: 1;

    border-radius: 50%;
    background-color: ${(props) => props.theme.colorForButton};

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;

      color: ${(props) => props.theme.colorTextLight};
    }
  }

  .swiper-button-prev {
    left: 0;

    &::before {
      content: "<";
    }
  }

  .swiper-button-next {
    right: 0;

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

    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .swiper-pagination-bullet {
    width: 167px;
    height: 128px;
    border-radius: 20px;
    overflow: hidden;
    opacity: 0.2;

    cursor: pointer;

    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);

    &-img {
      ${ImgStyles}

      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-active {
      opacity: 1;
      background: blue;
      cursor: default;
    }
  }
`;

const StyledSlide = styled(SwiperSlide)`
  border-radius: 30px;
  overflow: hidden;
`;

export {
  StyledSwiper,
  StyledSlide,
 };

