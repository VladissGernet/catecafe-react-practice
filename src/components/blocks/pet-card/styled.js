import styled from 'styled-components';

import { StyledTitle } from '/src/components/ui/title/styled';
import { StyledFeature } from '/src/components/ui/feature/styled';

const StyledCard = styled.li`
  position: relative;

  background-color: ${(props) => props.theme.colorLight};

  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 25%;

  display: flex;
  flex-direction: column;

  ${StyledTitle} {
    margin-top: 10px;
  }

  ${StyledFeature} {
    position: absolute;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;

  order: -1;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};

  margin: 20px 0 0;
`;

export {
  StyledCard,
  StyledImage,
  StyledDescription
 };
