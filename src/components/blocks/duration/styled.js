import styled, { css } from 'styled-components';

import { Ul } from 'src/components/styled';

const DurationUl = styled(Ul)`
  display: flex;
  gap: 20px;

  user-select: none;
`;

const DurationText = styled.span`
    padding: 10px;
    border-radius: 10px;
    display: block;
    transition: all 0.3s ease;

  ${(props) =>
    props.$isChecked
      ? css`
      background-color: ${(props) => props.theme.colorForButton};
      color: ${(props) => props.theme.colorTextLight};

      cursor: default;
      `
      : css`
      background-color: ${(props) => props.theme.colorGray};
      cursor: pointer;
      `
  }
`;

const DurationRadioLabel = styled.label`
  display: inline-block;
`;

export {
  DurationRadioLabel,
  DurationUl,
  DurationText
 };
