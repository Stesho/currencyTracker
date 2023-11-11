import React from 'react';

import styles from './Switch.module.scss';

export function Switch() {
  return <button type='button' className={styles.button}>
    <label className={styles.switch}>
      <input type='checkbox' />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  </button>
}
