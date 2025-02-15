import React, { useState, useRef } from 'react';

import {
  StyledAccordion,
  AccordionItem,
  AccordionTitle,
  AccordionContentWrapper,
  AccordionContent,
  AccordionButton
 } from './styled';

const Accordion = ({
  data,
  isTitleWithRadio,
  radioSettings,
}) => {
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

  // Принимаю компонент радио с проверкой на isTitleWithRadio.
  let RadioComponent = null;

  if (isTitleWithRadio) {
    RadioComponent = radioSettings.radioComponent;
  }

  return (
    <StyledAccordion>
      {
        data.map((item, index) => {
          return (
            <AccordionItem key={item.id}>
              <AccordionTitle>
                { isTitleWithRadio
                  ? (
                    <RadioComponent
                      value={item.title}
                      radioValueState={radioSettings.radioValueState}
                      onChange={radioSettings.onRadioChange}
                    />
                  )
                  : (
                    item.title
                  )}
                <AccordionButton
                onClick={() => toggleAccordion(index)}
                type="button"
                aria-expanded={accordionStatuses[index]}
                />
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
                  dangerouslySetInnerHTML={{__html: item.description}}
                />
              </AccordionContentWrapper>
            </AccordionItem>
          )
        })
      }
    </StyledAccordion>
  )
};

export { Accordion };
