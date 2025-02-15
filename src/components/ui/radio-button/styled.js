import styled, { css } from 'styled-components';

const RadioLabel = styled.label`
  display: inline-block;
`;

const RadioText = styled.span`
    padding: 10px 10px 10px 40px;
    border-radius: 10px;
    display: block;
    transition: all 0.3s ease;

    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
    }

    &::before {
      top: 10px;
      left: 0;
      width: 20px;
      height: 20px;
      border: 2px solid ${(props) => props.theme.colorForButton};
    }

    &::after {
      top: 15px;
      left: 5px;
      width: 14px;
      height: 14px;

      transition: background-color 0.3s ease;
    }

      ${(props) =>
        props.$isChecked
          ? css`
          cursor: default;

          &::after {
            background-color: ${(props) => props.theme.colorForButton};
          }
          `
          : css`
          background-color: ${(props) => props.theme.colorGray};
          cursor: pointer;

          &::after {
            background-color: transparent;
          }
          `
      }

`;

export {
  RadioLabel,
  RadioText
}
