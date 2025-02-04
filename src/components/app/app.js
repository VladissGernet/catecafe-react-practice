import React from "react";
import { GlobalStyle } from './styles.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from '/src/components/blocks/scroll-to-top/scroll-to-top';
import { PageWrapper } from '/src/components/layout/page-wrapper/page-wrapper';
import { Index } from '/src/components/pages/index/index';
import { Form } from '/src/components/pages/form/form';

// TODO
// 2. Создать Layout
// 3. Создать Header
// 4. Создать Footer
// 5. Создать Main
// 6. Создать Form страницу оформления
// 7. Создать mock данные и прокинуть их createContext
// 8. Создать страницу 404

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<Index />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
