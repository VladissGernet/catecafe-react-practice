import React from 'react';

import { RadioButton } from 'src/components/ui/radio-button/radio-button';

import {
  DurationRadioLabel,
  DurationText,
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
            <RadioButton
              labelComponent={DurationRadioLabel}
              textComponent={DurationText}
              item={item}
              onChange={onChange}
              type="radio"
              name="duration"
            >
              {item}
            </RadioButton>
          </li>
        ))
      }
    </DurationUl>
  )
};

export { Duration };
