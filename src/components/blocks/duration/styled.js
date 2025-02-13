import styled from 'styled-components';

import { VisuallyHiddenInput } from 'src/components/styled';

import { Ul } from 'src/components/styled';

const DurationUl = styled(Ul)`
  display: flex;
  gap: 20px;

  user-select: none;
`;

const DurationText = styled.span`
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colorGray};

    display: block;
    cursor: pointer;

    transition: all 0.3s ease;
`;

const DurationRadioLabel = styled.label`
  display: inline-block;

  ${VisuallyHiddenInput}:checked + ${DurationText} {
    background-color: ${(props) => props.theme.colorForButton};
    color: ${(props) => props.theme.colorTextLight};

    cursor: default;
  }
`;

export {
  DurationRadioLabel,
  DurationUl,
  DurationText
 };
