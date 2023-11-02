import React from 'react';
import ICurrencyCard from '@/constants/interfaces/ICurrencyCard';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import styles from './CurrencyList.module.scss';

interface ICurrencyListProps {
  title: string;
  currencies: ICurrencyCard[];
}

function CurrencyList({ title, currencies }: ICurrencyListProps) {
  return (
    <div className="container">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.currencyList}>
        {currencies.map((currencyItem) => (
          <CurrencyCard
            id={currencyItem.id}
            iconUrl={currencyItem.iconUrl}
            currencyName={currencyItem.currencyName}
            rate={currencyItem.rate}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrencyList;
