import React from 'react';

import Logo from '@/assets/img/logo.png';
import { BurgerMenu } from '@/components/ui/header/burgerMenu/BurgerMenu';
import { NavigationBar } from '@/components/ui/header/navigationBar/NavigationBar';
import { Switch } from '@/components/ui/switch/Switch';
import { colorThemes } from '@/constants/colorTheme/colorTheme';
import { useTheme } from '@/hooks/useTheme';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
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
