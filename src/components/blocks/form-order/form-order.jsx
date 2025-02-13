import React, { useState } from 'react';

import { Form } from 'src/components/blocks/form-order/styled';
import { Duration } from 'src/components/blocks/duration/duration';

const FormOrder = () => {
  const [duration, setDuration] = useState(null);
  console.log(duration);

  return (
    <Form>
      <Duration onChange={(el) => setDuration(el.target.value)} />
    </Form>
  )
};

export { FormOrder };
