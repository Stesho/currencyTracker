import React from 'react';
import '@/styles/index.scss';
import Header from '@/components/ui/header/Header';
import Info from '@/components/ui/info/Info';
import TimeUpdate from '@/components/ui/timeUpdate/TimeUpdate';

function App() {
  return (
    <div className='app'>
      <Header />
      <Info />
      <TimeUpdate />
    </div>
  );
}

export default App;
