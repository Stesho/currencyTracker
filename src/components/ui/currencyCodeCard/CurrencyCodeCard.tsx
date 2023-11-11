import React from 'react';

import { CurrencyCard } from '@/components/ui/currencyCard/CurrencyCard';
import { Currency } from '@/types/currency';

import styles from './CurrencyCodeCard.module.scss';

export function CurrencyCodeCard({ id, iconUrl, currencyName }: Currency) {
  return (
    <CurrencyCard id={id} iconUrl={iconUrl} currencyName={currencyName}>
      <span className={styles.code}>{id}</span>
    </CurrencyCard>
  );
}
