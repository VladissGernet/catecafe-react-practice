import styled from 'styled-components';

import { DurationUl } from '/src/components/blocks/duration/styled';
import { Button } from '/src/components/styled';

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

const Form = styled.form`
  background-color: ${(props) => props.theme.colorLight};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  max-width: 50%;

  ${DurationUl} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export {
  Form,
  StyledButton
};
