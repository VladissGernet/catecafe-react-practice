import React, { useState } from 'react';

import { Accordion } from '/src/components/blocks/accordion/accordion';
import { AccordionRadio } from '/src/components/blocks/accordion-radio/accordion-radio';

const TicketType = ({ticketOptions}) => {
  const initialState = ticketOptions[0].title;

  const [radioValueState, setRadioValueState] = useState(initialState);
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
