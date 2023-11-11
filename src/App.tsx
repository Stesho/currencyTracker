import '@/styles/index.scss';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Info } from '@/components/ui/info/Info';
import { TimeUpdate } from '@/components/ui/timeUpdate/TimeUpdate';
import { HomePage } from '@/pages/home/HomePage';
import { TimelinePage } from '@/pages/timeline/TimelinePage';

export function App() {
  return <BrowserRouter>
    <Header />
    <Info />
    <TimeUpdate />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='timeline' element={<TimelinePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}
