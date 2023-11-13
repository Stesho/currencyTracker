import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { BankCardPage } from '@/pages/bankCard/BankCardPage';
import { HomePage } from '@/pages/home/HomePage';
import { TimelinePage } from '@/pages/timeline/TimelinePage';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='timeline' element={<TimelinePage />} />
      <Route path='bank-card' element={<BankCardPage />} />
    </Routes>
  );
}
