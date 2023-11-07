import React from 'react';
import '@/styles/index.scss';
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage';
import TimelinePage from '@/pages/timeline/TimelinePage';
import TimeUpdate from '@/components/ui/timeUpdate/TimeUpdate';
import Info from '@/components/ui/info/Info';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TimeUpdate />
      <Info />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='timeline' element={<TimelinePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
