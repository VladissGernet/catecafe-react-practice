import React from 'react';

import {
  Label,
  DurationUl
 } from './styled';

const ITEMS = 6;

const Duration = ({ onChange }) => {
  const items = Array.from({ length: ITEMS }, (_, index) => index + 1);

  return (
    <DurationUl>
      {
        items.map((item) => (
          <li key={item}>
          <Label>
            <input
              type="radio"
              name="duration"
              value={item}
              onChange={onChange}
            />
            <span>{item}</span>
          </Label>
          </li>
        ))
      }
    </DurationUl>
  )
};

export { Duration };
