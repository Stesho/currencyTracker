import React from 'react';

import styles from './NoData.module.scss';

export const NoData = () => (
  <div className={styles.noData}>
    <h3>No data</h3>
    <p>Try to reload the page or coming back later</p>
  </div>
);
