import React from 'react';

import Logo from '@/assets/img/logo.png';
import { BurgerMenu } from '@/components/ui/Header/BurgerMenu/BurgerMenu';
import { NavigationBar } from '@/components/ui/Header/NavigationBar/NavigationBar';
import { Switch } from '@/components/ui/Switch/Switch';
import { colorThemes } from '@/constants/colorTheme/colorTheme';
import { useTheme } from '@/hooks/useTheme';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header data-cy='header' className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div>
          <img className={styles.logo} src={Logo} alt='logo' />
        </div>
        <div className={styles.navigation}>
          <NavigationBar />
        </div>
        <div className={styles.switch}>
          <Switch
            onToggle={toggleTheme}
            isChecked={theme === colorThemes.light}
          />
        </div>
        <div className={styles.burgerMenu}>
          <BurgerMenu
            toggleTheme={toggleTheme}
            theme={theme || colorThemes.dark}
          />
        </div>
      </div>
    </header>
  );
};
