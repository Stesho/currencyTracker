import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { BankCardPage } from '@/pages/bankCard/BankCardPage';
import ContactsPage from '@/pages/contacts/ContactsPage';
import { HomePage } from '@/pages/home/HomePage';
import { NotFound } from '@/pages/notFound/NotFound';
import { TimeLinePage } from '@/pages/timeline/TimelinePage';

export const Router = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='timeline' element={<TimeLinePage />} />
    <Route path='bank-card' element={<BankCardPage />} />
    <Route path='contacts' element={<ContactsPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
