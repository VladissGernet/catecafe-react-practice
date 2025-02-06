import styled from 'styled-components';

import heroBackgroundImage from '/src/assets/hero.svg';
import mapMark from '/src/assets/map-mark.svg';

const StyledHero = styled.section`
  padding: 100px 0;
  min-height: 350px;

  background-color: ${(props) => props.theme.colorForLightBackground};

  background-image: url(${heroBackgroundImage});
  background-repeat: no-repeat;
  background-size: 446px 446px;
  background-position: calc(100% - 100px) 40px;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};

  margin: 40px 0 0;
  max-width: 50%;
`;

const WorkTime = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlackForText};

  margin: 20px 0 0;
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
  margin: 10px 0 0;

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
