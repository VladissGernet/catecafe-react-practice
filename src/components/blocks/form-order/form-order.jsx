import React, { useState } from 'react';

// Mock data
import { buyOptions } from '/src/mocks/buy-options.js';

import { Title, TitleSizes } from 'src/components/ui/title/title';
import { Duration } from 'src/components/blocks/duration/duration';
import { TicketType } from 'src/components/blocks/ticket-type/ticket-type';

import {
  Form,
  StyledButton
} from './styled';

const FormOrder = () => {
  const initialDuration = buyOptions.durationOptions[0];
  const [duration, setDuration] = useState(initialDuration);

  const initialState = buyOptions.ticketOptions[0].title;
  const [radioValueState, setRadioValueState] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Вы успешно купили билет продолжительностью ${duration} часов и типом ${radioValueState}`);
  };

  return (
    <Form onSubmit={onSubmit}>
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
      <StyledButton
        type="submit"
      >
        Купить
      </StyledButton>
    </Form>
  )
};

export { FormOrder };
