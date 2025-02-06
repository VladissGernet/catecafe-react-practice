import styled from 'styled-components';

import { TitleSizes } from './title';

const StyledTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colorTitle};
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSizes.BIG) {
      fontSize = "48px";
    }
    if (props.$size === TitleSizes.SMALL) {
      fontSize = "24px";
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = "40px";
    if (props.$size === TitleSizes.BIG) {
      lineHeight = "50px";
    }
    if (props.$size === TitleSizes.SMALL) {
      lineHeight = "30px";
    }
    return lineHeight;
  }};
  font-weight: 700;
  `;

export { StyledTitle };
