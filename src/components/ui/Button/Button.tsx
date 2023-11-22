import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  dataTestId?: string;
}

export const Button = ({
  children,
  onClick,
  className,
  dataTestId = 'button',
}: ButtonProps) => (
  <button
    data-testid={dataTestId}
    className={`${styles.button} ${className}`}
    type='button'
    onClick={onClick}
  >
    {children}
  </button>
);
