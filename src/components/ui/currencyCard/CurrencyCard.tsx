import React from 'react';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import styles from './CurrencyCard.module.scss';

function CurrencyCard({
  id,
  iconUrl,
  currencyName,
  rate,
  onClick,
}: CurrencyCardProps) {
  const onCardClick = () => {
    const currency = {
      id,
      iconUrl,
      currencyName,
      rate,
    };
    onClick?.(currency);
  };

  return (
    <div className={styles.currencyCard} onClick={onCardClick}>
      <img className={styles.icon} src={iconUrl} alt='currency' />
      <div className={styles.text}>
        <span className={styles.name}>{currencyName}</span>
        <span className={styles.rate}>R$ {rate}</span>
      </div>
    </div>
  );
}

export default CurrencyCard;
