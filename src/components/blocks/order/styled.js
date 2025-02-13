import styled from 'styled-components';

import { Form } from '/src/components/blocks/form-order/styled';

const StyledOrder = styled.section`
  padding: 50px 0;
  background-color: ${(props) => props.theme.colorForLightBackground};

  ${Form} {
    margin-top: 40px;
  }
`;

export { StyledOrder };
