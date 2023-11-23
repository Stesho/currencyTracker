import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from '@/components/ui/Footer/Footer';
import { Header } from '@/components/ui/Header/Header';
import { Router } from '@/rounting/Router';

export const Layout = () => (
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);
