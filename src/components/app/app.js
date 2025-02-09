import React, { createContext } from "react";
import { GlobalStyle } from './styles.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Mock data
import { catsData } from '/src/mocks/cats.js';

import { ScrollToTop } from '/src/components/blocks/scroll-to-top/scroll-to-top';
import { PageWrapper } from '/src/components/layout/page-wrapper/page-wrapper';
import { Index } from '/src/components/pages/index/index';
import { Form } from '/src/components/pages/form/form';

// TODO
// 5. Создать Main
// 5.1 Hero
// 5.2 Stars
// 6. Создать Form страницу оформления
// 7. Создать mock данные и прокинуть их createContext
// 8. Создать страницу 404

const AppContext = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <AppContext.Provider value={catsData}>
        <Routes>
            <Route path="/" element={<PageWrapper />}>
              <Route index element={<Index />} />
              <Route path="form" element={<Form />} />
            </Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export { App, AppContext };
