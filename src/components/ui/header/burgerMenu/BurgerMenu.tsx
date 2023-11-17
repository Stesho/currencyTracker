import React, { useRef, useState } from 'react';

import { NavigationBar } from '@/components/ui/header/navigationBar/NavigationBar';
import { Switch } from '@/components/ui/switch/Switch';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usePreventScroll';

import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  toggleTheme: (isChecked: boolean) => void;
  theme: string;
}

export const BurgerMenu = ({ toggleTheme, theme }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cross = useRef<HTMLDivElement>(null);
  const navigation = useOutsideClick((event) => {
    if (!cross?.current?.contains(event?.target as Node)) {
      setIsOpen(false);
    }
  });

  usePreventScroll(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const burgerToCrossAnimation = () => (isOpen ? styles.cross : '');

  return (
    <div className={styles.burgerMenu}>
      <div ref={cross}>
        <button
          type='button'
          className={`${styles.burgerBtn} ${burgerToCrossAnimation()}`}
          onClick={toggleMenu}
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </button>
      </div>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.navigation} ref={navigation}>
            <Switch
              onToggle={toggleTheme}
              isChecked={theme === 'dark'}
              className={styles.switch}
            />
            <NavigationBar onLinkClick={toggleMenu} />
          </div>
        </div>
      )}
    </div>
  );
};
