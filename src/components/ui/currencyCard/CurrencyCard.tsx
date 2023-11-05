import React from 'react';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import styles from './CurrencyCard.module.scss';

function CurrencyCard({
  iconUrl,
  currencyName,
  rate,
  onClick,
}: CurrencyCardProps) {
  return (
    <div className={styles.currencyCard} onClick={onClick}>
      <img className={styles.icon} src={iconUrl} alt='currency' />
      <div className={styles.text}>
        <span className={styles.name}>{currencyName}</span>
        <span className={styles.rate}>R$ {rate}</span>
      </div>
    </div>
  );
}

export default CurrencyCard;
