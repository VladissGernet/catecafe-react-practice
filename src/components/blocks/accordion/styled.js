import styled from 'styled-components';

const StyledAccordion = styled.div`
  margin-top: 20px;

  background-color: ${(props) => props.theme.colorLight};
`;

const AccordionItem = styled.div`
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  outline: 5px solid blue;
`;

const AccordionTitle = styled.div`
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorTextLight};
  padding: 10px;
  border-radius: 10px;
`;

const AccordionContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colorForLightBackground};
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
  AccordionContent
 };
