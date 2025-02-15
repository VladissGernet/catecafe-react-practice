import React, { useState } from 'react';

import { Accordion } from '/src/components/blocks/accordion/accordion';
import { RadioButton } from '/src/components/ui/radio-button/radio-button';

const AccordionRadio = ({value, radioValueState, onChange}) => {
  return (
    <RadioButton
      value={value}
      selectedValue={radioValueState}
      type="radio"
      name="ticket-type"
      onChange={onChange}
    >
      {value}
    </RadioButton>
  );
}

const TicketType = ({ticketOptions}) => {
  const [radioValueState, setRadioValueState] = useState('');
  const onRadioChange = (e) => setRadioValueState(e.target.value);

  return (
    <Accordion
    data={ticketOptions}
    isTitleWithRadio
    radioSettings={{
      radioComponent: AccordionRadio,
      radioValueState, onRadioChange
      }}
    />
  )
};

export { TicketType };
