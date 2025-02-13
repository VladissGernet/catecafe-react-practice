import React from 'react';

import { VisuallyHiddenInput } from 'src/components/styled';

const RadioButton = ({
  labelComponent,
  textComponent,
  item,
  onChange,
  type,
  name,
  children
 }) => {
  const LabelComponent = labelComponent;
  const TextComponent = textComponent;

  return (
    <LabelComponent>
      <VisuallyHiddenInput
        type={type}
        name={name}
        value={item}
        onChange={onChange}
      />
      <TextComponent>
        {children}
      </TextComponent>
    </LabelComponent>
  );
};

export { RadioButton };
