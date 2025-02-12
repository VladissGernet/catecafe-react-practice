import styled, { css } from 'styled-components';

const ImgStyles = css`
  max-width: 100%;
  object-fit: contain;
  display: block;
  border-style: none;
`;

const Img = styled.img`
  ${ImgStyles}
`;

export { Img, ImgStyles };
