import React, { PureComponent } from 'react';

import SearchIcon from '@/assets/icons/search.svg';

import styles from './Input.module.scss';

export class Input extends PureComponent {
  render() {
    return (
      <div className={styles.inputWrapper}>
        <input className={styles.input} placeholder='Currency search...' />
        <SearchIcon className={styles.searchIcon} />
      </div>
    );
  }
}
