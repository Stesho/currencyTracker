import React from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import styles from './CurrencyCard.module.scss';

interface CurrencyCardProps extends CurrencyRated {
  onClick?: (currency?: CurrencyCardProps) => void;
}

function CurrencyCard({
  id,
  iconUrl,
  currencyName,
  rate,
  onClick,
}: CurrencyCardProps) {
  const decimalPlaces = 3;
  const fixedRate = Number(rate.toFixed(decimalPlaces));
  const formattedRate = fixedRate.toString().replace(/\./g, ',');

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
        <span className={styles.rate}>R$ {formattedRate}</span>
      </div>
    </div>
  );
}

export default CurrencyCard;
