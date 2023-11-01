import React from 'react';
import Logo from '@/assets/icons/logo.svg';
import Switch from '@/components/ui/switch/Switch';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Timeline</li>
          <li className={styles.navItem}>Bank card</li>
          <li className={styles.navItem}>Contacts</li>
        </ul>
      </nav>
      <Switch />
    </header>
  );
}

export default Header;