import React, { useState } from 'react';

// Mock data
import { buyOptions } from '/src/mocks/buy-options.js';

import { Form } from 'src/components/blocks/form-order/styled';
import { Duration } from 'src/components/blocks/duration/duration';

const FormOrder = () => {
  const [duration, setDuration] = useState(null);

  return (
    <Form>
      <Duration
        onChange={(el) => setDuration(el.target.value)}
        durationOptions={buyOptions.durationOptions}
        durationValue={duration}
      />
    </Form>
  )
};

export { FormOrder };
