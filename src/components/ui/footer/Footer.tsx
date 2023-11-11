import React from 'react';

import Logo from '@/assets/img/logo.png';

import styles from './Footer.module.scss';

export function Footer() {
  return <footer className='container'>
    <div className={styles.content}>
      <div className={styles.about}>
        <div className={styles.aboutTitle}>
          <img className={styles.logo} src={Logo} alt='logo' />
          <h3>Modsen Currency Tracker</h3>
        </div>
        <p className={styles.aboutText}>
          Since then, the company has grown organically to. Startup is the
          world&apos;s largest trading platform, with $12 billion worth of
          currency trading and 500,000 tickets sold daily to tens of thousands
          of traders worldwide.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.general}>
          <h3 className={styles.linksTitle}>General</h3>
          <ul className={styles.linksList}>
            <li>Market</li>
            <li>Service</li>
          </ul>
        </div>
        <div className={styles.product}>
          <h3 className={styles.linksTitle}>Product</h3>
          <ul className={styles.linksList}>
            <li>Sparks</li>
            <li>Snaps</li>
          </ul>
        </div>
        <div className={styles.community}>
          <h3 className={styles.linksTitle}>Community</h3>
          <ul className={styles.linksList}>
            <li>Ideas</li>
            <li>Streams</li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.rights}>
      Startsup © 2023-2024, All Rights Reserved
    </div>
  </footer>
}
