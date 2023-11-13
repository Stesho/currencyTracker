import React from 'react';

import { CurrencyCard } from '@/components/ui/currencyCard/CurrencyCard';
import { CurrencyRated } from '@/types/currency';
import { replaceDotToComma } from '@/utils/replaceDotToComma';

import styles from './CurrencyRatedCard.module.scss';

interface CurrencyRatedCardProps extends CurrencyRated {
  onClick?: (currency?: CurrencyRated) => void;
}

export const CurrencyRatedCard = ({
  id,
  iconUrl,
  currencyName,
  rate,
  onClick,
}: CurrencyRatedCardProps) => {
  const decimalPlaces = 3;
  const formattedRate = replaceDotToComma(rate, decimalPlaces);
  const onCardClick = () => {
    onClick?.({
      id,
      iconUrl,
      currencyName,
      rate,
    });
  };

  return (
    <div className={styles.currencyCard} onClick={onCardClick}>
      <CurrencyCard id={id} iconUrl={iconUrl} currencyName={currencyName}>
        <span className={styles.rate}>R$ {formattedRate}</span>
      </CurrencyCard>
    </div>
  );
};
