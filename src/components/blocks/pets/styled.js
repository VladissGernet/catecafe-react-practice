import styled from 'styled-components';
import { Link } from 'react-router-dom';

import paw from '/src/assets/paw.svg';
import { StyledTitle } from 'src/components/ui/title/styled';
import { StyledContainer } from 'src/components/layout/container/styled';
import { ButtonStyles } from 'src/components/styled';

const StyledPets = styled.section`
  padding: 100px 0;

  position: relative;

  background-color: ${(props) => props.theme.colorForDarkBackground};

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    background-image: url(${paw});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
  }

  ${StyledContainer} > ${StyledTitle} {
    text-align: center;
  }
`;

const StyledPetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
  display: block;
  margin: 40px auto 0;

  max-width: 300px;
  text-align: center;
`;

// Закончить стилизовать ссылку

export {
  StyledPets,
  StyledPetsList,
  StyledLink
 };
