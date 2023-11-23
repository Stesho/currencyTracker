import React from 'react';

import { CurrencyCard } from '@/components/ui/CurrencyCard/CurrencyCard';
import { Currency } from '@/types/currency';

import styles from './CurrencyCodeCard.module.scss';

export const CurrencyCodeCard = ({ id, iconUrl, currencyName }: Currency) => (
  <CurrencyCard id={id} iconUrl={iconUrl} currencyName={currencyName}>
    <span className={styles.code}>{id}</span>
  </CurrencyCard>
);
