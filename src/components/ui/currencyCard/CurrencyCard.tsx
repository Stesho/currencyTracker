import React from 'react';
import styles from './CurrencyCard.module.scss';

interface CurrencyCardProps {
  iconUrl: string;
  currencyName: string;
  rate: number;
}

function CurrencyCard({ iconUrl, currencyName, rate }: CurrencyCardProps) {
  return (
    <div className={styles.currencyCard}>
      <img className={styles.icon} src={iconUrl} alt='currency' />
      <div className={styles.text}>
        <span className={styles.name}>{currencyName}</span>
        <span className={styles.rate}>R$ {rate}</span>
      </div>
    </div>
  );
}

export default CurrencyCard;
