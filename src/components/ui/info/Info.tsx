import React from 'react';
import Logo from '@/assets/img/logo.png';
import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.info}>
      <div className={`${styles.infoContainer} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Modsen currency tracker</h1>
          <p className={styles.text}>
            Quotes for the dollar and other international currencies.
          </p>
        </div>
        <img className={styles.logo} src={Logo} alt='logo' />
      </div>
    </div>
  );
}

export default Info;
