import React from 'react';

import { CurrencyCard } from '@/components/ui/currencyCard/CurrencyCard';
import { CurrencyRated } from '@/types/currency';
import { replaceDotToComma } from '@/utils/replaceDotToComma';

import styles from './CurrencyRatedCard.module.scss';

interface CurrencyRatedCardProps extends CurrencyRated {
  onClick?: (currency?: CurrencyRated) => void;
}

export function CurrencyRatedCard({
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
