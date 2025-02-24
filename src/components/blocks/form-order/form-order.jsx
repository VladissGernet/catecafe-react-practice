import React, { useState } from 'react';

// Mock data
import { buyOptions } from '/src/mocks/buy-options.js';

import { Form } from 'src/components/blocks/form-order/styled';
import { Title, TitleSizes } from 'src/components/ui/title/title';
import { Duration } from 'src/components/blocks/duration/duration';
import { TicketType } from 'src/components/blocks/ticket-type/ticket-type';

const FormOrder = () => {
  const initialDuration = buyOptions.durationOptions[0];
  const [duration, setDuration] = useState(initialDuration);

  const initialState = buyOptions.ticketOptions[0].title;
  const [radioValueState, setRadioValueState] = useState(initialState);

  return (
    <Form>
      <Title level={3} size={TitleSizes.SMALL}>Продолжительность (часов)</Title>
      <Duration
        onChange={(el) => setDuration(el.target.value)}
        durationOptions={buyOptions.durationOptions}
        durationValue={duration}
      />
      <Title level={3} size={TitleSizes.SMALL}>Тип билета</Title>
      <TicketType
        ticketOptions={buyOptions.ticketOptions}
        radioValueState={radioValueState}
        setRadioValueState={setRadioValueState}
      />
    </Form>
  )
};

export { FormOrder };
