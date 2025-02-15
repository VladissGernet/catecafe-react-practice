import React, { useState, useRef, useEffect } from 'react';

import {
  StyledAccordion,
  AccordionItem,
  AccordionTitle,
  AccordionContentWrapper,
  AccordionContent
 } from './styled';

const Accordion = ({data}) => {
  if (!data || !data.length) {
    return null;
  }

  // Создаю массивы состояний AccordionItem и высот AccordionContent.
  const [accordionStatuses, setAccordionStatuses] = useState(Array(data.length).fill(false));
  const [accordionHeights, setAccordionHeights] = useState(Array(data.length).fill(0));
  // Создаю массив ссылок на контент.
  const ContentRefs = useRef([]);

  const toggleAccordion = (index) => {
    // Дублирую массив состояний accordion для его обновления.
    const newAccordionStatuses = [...accordionStatuses];
    newAccordionStatuses[index] = !newAccordionStatuses[index];
    setAccordionStatuses(newAccordionStatuses);

    // Дублирую массив высот accordion для его обновления.
    const newAccordionHeights = [...accordionHeights];
    const selectedItemHeight = ContentRefs.current[index];
    newAccordionHeights[index] = selectedItemHeight.offsetHeight;
    setAccordionHeights(newAccordionHeights);
  };

  return (
    <StyledAccordion>
      {
        data.map((item, index) => {
          return (
            <AccordionItem key={item.id}>
              <AccordionTitle
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
              </AccordionTitle>
              <AccordionContentWrapper
                style={
                  accordionStatuses[index]
                  ? { height: accordionHeights[index] }
                  : { height: 0 }
                }
              >
                <AccordionContent
                  ref={(node) => ContentRefs.current[index] = node}
                >
                  {item.description}
                </AccordionContent>
              </AccordionContentWrapper>
            </AccordionItem>
          )
        })
      }
    </StyledAccordion>
  )
};

export { Accordion };
