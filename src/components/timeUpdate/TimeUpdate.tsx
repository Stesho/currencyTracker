import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

import styles from './TimeUpdate.module.scss';

export const TimeUpdate = () => {
  const currencyState = useSelector((state: RootState) => state.currency);

  return (
    <section className={`${styles.timeUpdate} container`}>
      <div className={styles.marker}>
        <div />
      </div>
      <div className={styles.text}>
        Last updated at {currencyState.lastUpdate}
      </div>
    </section>
  );
};
