import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => (
  <button
    data-testid='button'
    className={`${styles.button} ${className}`}
    type='button'
    onClick={onClick}
  >
    {children}
  </button>
);
