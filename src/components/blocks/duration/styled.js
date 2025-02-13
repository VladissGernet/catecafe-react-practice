import styled from 'styled-components';

import { Ul } from 'src/components/styled';

const DurationUl = styled(Ul)`
  display: flex;
  gap: 20px;
`;

const Label = styled.label`
  display: inline-block;

  span {
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colorGray};

    display: block;
    cursor: pointer;

    transition: all 0.3s ease;
  }

  input {
    display: none;
  }

  input:checked + span {
    background-color: ${(props) => props.theme.colorForButton};
    color: ${(props) => props.theme.colorTextLight};

    cursor: default;
  }
`;

export {
  Label,
  DurationUl
 };
