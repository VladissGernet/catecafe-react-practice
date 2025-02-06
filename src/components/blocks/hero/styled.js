import styled from 'styled-components';

import mapMark from '/src/assets/map-mark.svg';

const StyledHero = styled.section`
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};

  margin: 0;
`;

const WorkTime = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};

  margin: 0;
  padding: 10px;
  border-radius: 10px;

  display: inline-block;

  background-color: ${(props) => props.theme.colorForDarkBackground};
`;

const Time = styled.time`
  color: ${(props) => props.theme.colorBlackForText};
  font-weight: 700;
`;

const Address = styled.address`
  font-style: normal;

  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background-image: url(${mapMark});
  }
`;

export {
  StyledHero,
  Description,
  WorkTime,
  Time,
  Address
};
