import React from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import replaceDotToComma from '@/utils/replaceDotToComma';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import styles from './CurrencyRatedCard.module.scss';

interface CurrencyRatedCardProps extends CurrencyRated {
  onClick?: (currency?: CurrencyRated) => void;
}

function CurrencyRatedCard({
  id,
  iconUrl,
  currencyName,
  rate,
  onClick,
}: CurrencyRatedCardProps) {
  const formattedRate = replaceDotToComma(rate);
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
      <CurrencyCard id={id} iconUrl={iconUrl} currencyName={currencyName}>
        <span className={styles.rate}>R$ {formattedRate}</span>
      </CurrencyCard>
    </div>
  );
}

export default CurrencyRatedCard;
