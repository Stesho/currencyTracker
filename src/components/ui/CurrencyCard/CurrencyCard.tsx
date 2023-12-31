import React, { ReactNode } from 'react';

import { Currency } from '@/types/currency';

import styles from './CurrencyCard.module.scss';

interface CurrencyCardProps extends Currency {
  children: ReactNode;
}

export const CurrencyCard = ({
  currencyName,
  iconUrl,
  children,
}: CurrencyCardProps) => (
  <div className={styles.currencyCard}>
    <img className={styles.icon} src={iconUrl} alt='currency' />
    <div className={styles.text}>
      <span className={styles.name}>{currencyName}</span>
      {children}
    </div>
  </div>
);
