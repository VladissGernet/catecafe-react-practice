import React from 'react';

import { StyledFeature } from './styled';

const features = {
  new: {
    text: 'Новинка',
    style: {
      backgroundColor: '#ffb334',
      color: 'yellow',
    },
  },
  soft: {
    text: 'Мягкий',
    style: {
      backgroundColor: '#7fc92e',
      color: '#ffffff',
    },
  },
};

const Feature = ({ feature }) => {
  return features[feature] ? (
    <StyledFeature
      $bgColor={features[feature].style.backgroundColor}
      $color={features[feature].style.color}
    >
      {features[feature].text}
    </StyledFeature>
  ) : null;
};

export { Feature };
