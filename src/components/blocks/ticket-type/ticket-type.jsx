import React from 'react';

import { Accordion } from '/src/components/blocks/accordion/accordion';
import { AccordionRadio } from '/src/components/blocks/accordion-radio/accordion-radio';

const TicketType = ({
  ticketOptions,
  radioValueState,
  setRadioValueState
}) => {
  const onRadioChange = (e) => setRadioValueState(e.target.value);

  return (
    <Accordion
    data={ticketOptions}
    isTitleWithRadio
    radioSettings={{
      radioComponent:
        AccordionRadio,
        radioValueState,
        onRadioChange
      }}
    />
  )
};

export { TicketType };
