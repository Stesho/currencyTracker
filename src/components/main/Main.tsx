import React, { ReactNode } from 'react';

import { TimeUpdate } from '@/components/timeUpdate/TimeUpdate';
import { Info } from '@/components/ui/info/Info';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main>
    <Info />
    <TimeUpdate />
    {children}
  </main>
);
