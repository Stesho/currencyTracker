import React, { ChangeEvent } from 'react';

import styles from './Switch.module.scss';

interface SwitchProps {
  onToggle: (isChecked: boolean) => void;
  isChecked: boolean;
  className?: string;
}

export const Switch = ({
  onToggle,
  isChecked,
  className = '',
}: SwitchProps) => {
  const onCheck = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
    <button type='button' className={`${styles.button} ${className}`}>
      <label className={styles.switch}>
        <input type='checkbox' onChange={onCheck} checked={isChecked} />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
    </button>
  );
};
