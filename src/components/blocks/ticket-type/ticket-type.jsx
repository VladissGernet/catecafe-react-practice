import React from 'react';

import { RadioButton } from '/src/components/ui/radio-button/radio-button';
import { Accordion } from '/src/components/blocks/accordion/accordion';


const TicketType = ({ticketOptions}) => {
  // console.log(ticketOptions);

  // TODO
  // Сделать поле аккордиона с радиокнопками
  return (
    <Accordion data={ticketOptions}/>

  )
};

export { TicketType };
