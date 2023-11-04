import React from 'react';
import '@/styles/index.scss';
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
