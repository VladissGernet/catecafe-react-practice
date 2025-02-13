import styled from 'styled-components';

const Form = styled.form`
  background-color: ${(props) => props.theme.colorLight};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  max-width: 50%;
`;

export { Form };
