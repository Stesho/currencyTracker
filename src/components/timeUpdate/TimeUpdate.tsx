import React from 'react';

import styles from './TimeUpdate.module.scss';

export const TimeUpdate = () => (
  <section className={`${styles.timeUpdate} container`}>
    <div className={styles.marker}>
      <div />
    </div>
    <div className={styles.text}>Last updated at 11:59pm</div>
  </section>
);
