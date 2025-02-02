import React from 'react';

import { Header } from 'src/components/layout/header/header';
import { Main } from 'src/components/layout/main/main';
import { Footer } from 'src/components/layout/footer/footer';

const  PageWrapper = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
};

export { PageWrapper };
