import React from 'react';

import { VisuallyHiddenInput } from 'src/components/styled';

import {
  RadioLabel,
  RadioText
} from './styled';

const RadioButton = ({
  labelComponent = RadioLabel,
  textComponent = RadioText,
  value,
  onChange,
  type,
  name,
  selectedValue,
  children
 }) => {
  const LabelComponent = labelComponent;
  const TextComponent = textComponent;
  const isChecked = String(value) === String(selectedValue);


  return (
    <LabelComponent>
      <VisuallyHiddenInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <TextComponent
        $isChecked={isChecked}
      >
        {children}
      </TextComponent>
    </LabelComponent>
  );
};

export { RadioButton };
