import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { BankCardPage } from '@/pages/bankCard/BankCardPage';
import { HomePage } from '@/pages/home/HomePage';
import { NotFound } from '@/pages/notFound/NotFound';
import { TimelinePage } from '@/pages/timeline/TimelinePage';

export const Router = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='timeline' element={<TimelinePage />} />
    <Route path='bank-card' element={<BankCardPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
