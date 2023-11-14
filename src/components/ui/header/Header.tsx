import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/assets/img/logo.png';
import { Switch } from '@/components/ui/switch/Switch';
import { useTheme } from '@/hooks/useTheme';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <img className={styles.logo} src={Logo} alt='logo' />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to='/timeline'>Timeline</Link>
            </li>
            <li className={styles.navItem}>
              <Link to='/bank-card'>Bank card</Link>
            </li>
            <li className={styles.navItem}>
              <Link to='/contacts'>Contacts</Link>
            </li>
          </ul>
        </nav>
        <Switch onToggle={toggleTheme} isChecked={theme === 'dark'} />
      </div>
    </header>
  );
};
