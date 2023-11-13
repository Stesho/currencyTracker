import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Router } from '@/rounting/Router';

export const Layout = () => (
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);
