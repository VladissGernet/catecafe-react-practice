import React from 'react';

import { mockGallery } from 'src/mocks/mock-gallery.js';
import { Gallery } from 'src/components/blocks/gallery/gallery';
import { Order } from 'src/components/blocks/order/order';

const Form = () => {
  return (
    <>
      <Gallery slides={mockGallery} />
      <Order />
    </>
  )
};

export { Form };
