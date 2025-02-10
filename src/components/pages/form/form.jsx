import React from 'react';

import { mockGallery } from 'src/mocks/mock-gallery.js';
import { Gallery } from 'src/components/blocks/gallery/gallery';

const Form = () => {
  return (
    <Gallery slides={mockGallery} />
  )
};

export { Form };
