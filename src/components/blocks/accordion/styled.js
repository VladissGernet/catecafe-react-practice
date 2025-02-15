import styled from 'styled-components';

import arrow from '/src/assets/left-arrow.svg';

const StyledAccordion = styled.div`
  margin-top: 20px;

  background-color: ${(props) => props.theme.colorLight};
`;

const AccordionItem = styled.div`
  position: relative;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colorGray};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const AccordionTitle = styled.div`
  color: ${(props) => props.theme.colorBlackForText};
  padding: 10px;
  border-radius: 10px;
`;

const AccordionButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0 0 0 auto;
  width: 100%;

  width: 30px;
  height: 30px;

  background-color: transparent;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;

  transition: transform 0.3s ease;
  transform: ${(props) => props['aria-expanded'] ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;

const AccordionContentWrapper = styled.div`
  height: 0;

  overflow: hidden;

  transition: height 0.3s ease;
  will-change: height;
`;

const AccordionContent = styled.div`
  padding: 10px;
`;

export {
  StyledAccordion,
  AccordionItem,
  AccordionTitle,
  AccordionContentWrapper,
  AccordionContent,
  AccordionButton
 };
