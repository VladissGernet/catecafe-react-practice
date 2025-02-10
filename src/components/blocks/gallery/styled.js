import styled from 'styled-components';

import { StyledTitle } from '/src/components/ui/title/styled';
import { StyledSwiper } from '/src/components/blocks/gallery-swiper/styled';

const StyledGallery = styled.section`
  padding: 100px 0;

  background-color: ${(props) => props.theme.colorForLightBackground};

  ${StyledTitle} {
    text-align: center;
  }

  ${StyledSwiper} {
    margin-top: 50px;
  }
`;

export { StyledGallery };
