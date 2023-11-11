import React from 'react';

import { CurrencyCard } from '@/components/ui/currencyCard/CurrencyCard';
import { Currency } from '@/types/currency';

import styles from './CurrencyCodeCard.module.scss';

interface CurrencyCodeCardProps extends Currency {}

export function CurrencyCodeCard({
  id,
  iconUrl,
  currencyName,
}: CurrencyCodeCardProps) {
  return <CurrencyCard id={id} iconUrl={iconUrl} currencyName={currencyName}>
    <span className={styles.code}>{id}</span>
  </CurrencyCard>
}
