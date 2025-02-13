import React from 'react';

import { VisuallyHiddenInput } from 'src/components/styled';

const RadioButton = ({
  labelComponent,
  textComponent,
  item,
  onChange,
  type,
  name,
  selectedValue,
  children
 }) => {
  const LabelComponent = labelComponent;
  const TextComponent = textComponent;
  const isChecked = String(item) === String(selectedValue);

  return (
    <LabelComponent>
      <VisuallyHiddenInput
        type={type}
        name={name}
        value={item}
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
