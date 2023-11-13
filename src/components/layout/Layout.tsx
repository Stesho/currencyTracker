import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Info } from '@/components/ui/info/Info';
import { TimeUpdate } from '@/components/ui/timeUpdate/TimeUpdate';
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
