import React from 'react';

import Logo from '@/assets/img/logo.png';
import { Switch } from '@/components/ui/switch/Switch';

import styles from './Header.module.scss';

export function Header() {
  return <header className={styles.header}>
    <div className={`${styles.headerContainer} container`}>
      <img className={styles.logo} src={Logo} alt='logo' />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Timeline</li>
          <li className={styles.navItem}>Bank card</li>
          <li className={styles.navItem}>Contacts</li>
        </ul>
      </nav>
      <Switch />
    </div>
  </header>
}
