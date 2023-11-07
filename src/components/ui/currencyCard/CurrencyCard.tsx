import React, { ReactNode } from 'react';
import { Currency } from '@/constants/interfaces/currency';
import styles from './CurrencyCard.module.scss';

interface CurrencyCardProps extends Currency {
  children: ReactNode;
}

function CurrencyCard({
  currencyName,
  iconUrl,
  children,
}: CurrencyCardProps) {
  return (
    <div className={styles.currencyCard}>
      <img className={styles.icon} src={iconUrl} alt='currency' />
      <div className={styles.text}>
        <span className={styles.name}>{currencyName}</span>
        {children}
      </div>
    </div>
  );
}

export default CurrencyCard;
