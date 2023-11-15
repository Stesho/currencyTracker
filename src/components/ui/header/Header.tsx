import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <NavLink
                to='/'
                className={(active) =>
                  `${styles.navItem} ${active.isActive && styles.activeLink}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='/timeline'
                className={(active) =>
                  `${styles.navItem} ${active.isActive && styles.activeLink}`
                }
              >
                Timeline
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='/bank-card'
                className={(active) =>
                  `${styles.navItem} ${active.isActive && styles.activeLink}`
                }
              >
                Bank card
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='/contacts'
                className={(active) =>
                  `${styles.navItem} ${active.isActive && styles.activeLink}`
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch onToggle={toggleTheme} isChecked={theme === 'dark'} />
      </div>
    </header>
  );
};
