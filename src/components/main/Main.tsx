import React, { ReactNode } from 'react';

import { TimeUpdate } from '@/components/timeUpdate/TimeUpdate';
import { Info } from '@/components/ui/info/Info';

import styles from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main>
    <Info />
    <TimeUpdate />
    <section className={styles.section}>{children}</section>
  </main>
);
