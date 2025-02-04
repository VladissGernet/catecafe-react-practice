import styled, { css } from 'styled-components';

const ButtonStyles = css`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;

  background-color: ${props => props.theme.colorForButton};
  color: ${props => props.theme.colorTextLight};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  padding: 20px;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = styled.button`
  ${ButtonStyles}
`;

export { Button, ButtonStyles };
