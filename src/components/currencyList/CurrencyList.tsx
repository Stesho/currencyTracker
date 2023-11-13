import React, { useState } from 'react';

import { CurrencyModal } from '@/components/currencyModal/currencyModal';
import { CurrencyRatedCard } from '@/components/ui/currencyRatedCard/CurrencyRatedCard';
import { CurrencyRated } from '@/types/currency';

import styles from './CurrencyList.module.scss';

interface CurrencyListProps {
  title: string;
  currencies: CurrencyRated[];
}

export const CurrencyList = ({ title, currencies }: CurrencyListProps) => {
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyRated>(
    null!,
  );

  const onModalOpen = (currency?: CurrencyRated) => {
    if (currency) {
      setSelectedCurrency(currency);
    }
    setModalActive(true);
  };
  const onModalClose = () => {
    setModalActive(false);
  };

  return (
    <section className={`${styles.currencyListWrapper} container`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.currencyList}>
        {currencies.map((currencyItem) => (
          <CurrencyRatedCard
            key={currencyItem.id}
            id={currencyItem.id}
            iconUrl={currencyItem.iconUrl}
            currencyName={currencyItem.currencyName}
            rate={currencyItem.rate}
            onClick={onModalOpen}
          />
        ))}
      </div>
      {isModalActive && (
        <CurrencyModal onClose={onModalClose} currency={selectedCurrency} />
      )}
    </section>
  );
};
