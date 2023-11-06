import React, { useState } from 'react';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import CurrencyModal from '@/components/currencyModal/currencyModal';
import styles from './CurrencyList.module.scss';

interface CurrencyListProps {
  title: string;
  currencies: CurrencyCardProps[];
}

function CurrencyList({ title, currencies }: CurrencyListProps) {
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCardProps>(
    null!,
  );

  const onModalOpen = (currency?: CurrencyCardProps) => {
    if (currency) {
      setSelectedCurrency(currency);
    }
    setModalActive(true);
  };
  const onModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className={`${styles.currencyListWrapper} container`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.currencyList}>
        {currencies.map((currencyItem) => (
          <CurrencyCard
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
    </div>
  );
}

export default CurrencyList;
