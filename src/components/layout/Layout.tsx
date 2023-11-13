import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { TimeUpdate } from '@/components/timeUpdate/TimeUpdate';
import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Info } from '@/components/ui/info/Info';
import { Router } from '@/rounting/Router';

export function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Info />
      <TimeUpdate />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
