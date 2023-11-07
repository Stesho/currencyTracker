import React from 'react';
import { Currency } from '@/constants/interfaces/currency';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import styles from './CurrencyCodeCard.module.scss';

interface CurrencyCodeCardProps extends Currency {}

function CurrencyCodeCard({
  id,
  iconUrl,
  currencyName,
}: CurrencyCodeCardProps) {
  return (
    <CurrencyCard id={id} iconUrl={iconUrl} currencyName={currencyName}>
      <span className={styles.code}>{id}</span>
    </CurrencyCard>
  );
}

export default CurrencyCodeCard;
