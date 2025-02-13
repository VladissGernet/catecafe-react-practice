import React, { useState } from 'react';

// Mock data
import { buyOptions } from '/src/mocks/buy-options.js';

import { Form } from 'src/components/blocks/form-order/styled';
import { Title, TitleSizes } from 'src/components/ui/title/title';
import { Duration } from 'src/components/blocks/duration/duration';

const FormOrder = () => {
  const [duration, setDuration] = useState(null);

  return (
    <Form>
      <Title level={3} size={TitleSizes.SMALL}>Продолжительность (часов)</Title>
      <Duration
        onChange={(el) => setDuration(el.target.value)}
        durationOptions={buyOptions.durationOptions}
        durationValue={duration}
      />
      <Title level={3} size={TitleSizes.SMALL}>Тип билета</Title>
    </Form>
  )
};

export { FormOrder };
