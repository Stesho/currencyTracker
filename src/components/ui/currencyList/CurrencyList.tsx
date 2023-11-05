import React, { useEffect, useState } from 'react';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import Modal from '@/components/ui/modal/Modal';
import styles from './CurrencyList.module.scss';

interface CurrencyListProps {
  title: string;
  currencies: CurrencyCardProps[];
}

function CurrencyList({ title, currencies }: CurrencyListProps) {
  const [isModalActive, setModalActive] = useState(false);

  const onModalOpen = () => {
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
        <Modal id='currency-modal' onClose={onModalClose}>
          Hello world
        </Modal>
      )}
    </div>
  );
}

export default CurrencyList;
