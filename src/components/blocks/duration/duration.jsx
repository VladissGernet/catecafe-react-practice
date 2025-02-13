import React from 'react';

import { VisuallyHiddenInput } from 'src/components/styled';

import {
  Label,
  DurationUl
 } from './styled';

const Duration = ({
  onChange,
  durationOptions
}) => {

  return (
    <DurationUl>
      {
        durationOptions
        && durationOptions.length
        && durationOptions.map((item) => (
          <li key={item}>
          <Label>
            <VisuallyHiddenInput
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
