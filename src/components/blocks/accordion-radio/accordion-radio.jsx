import React from 'react';

import { RadioButton } from '/src/components/ui/radio-button/radio-button';

const AccordionRadio = ({
  value,
  radioValueState,
  onChange
}) => {
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

export { AccordionRadio };
