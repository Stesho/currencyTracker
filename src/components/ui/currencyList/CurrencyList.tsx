import React, { useState } from 'react';
import ICurrencyCard from '@/constants/interfaces/ICurrencyCard';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import Modal from '@/components/ui/modal/Modal';
import styles from './CurrencyList.module.scss';

interface ICurrencyListProps {
  title: string;
  currencies: ICurrencyCard[];
}

function CurrencyList({ title, currencies }: ICurrencyListProps) {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <div className='container'>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.currencyList}>
        {currencies.map((currencyItem) => (
          <CurrencyCard
            key={currencyItem.id}
            id={currencyItem.id}
            iconUrl={currencyItem.iconUrl}
            currencyName={currencyItem.currencyName}
            rate={currencyItem.rate}
            onClick={handleModalOpen}
          />
        ))}
      </div>
      {isModalActive && (
        <Modal id="currency-modal" onClose={handleModalClose}>
          Hello world
        </Modal>
      )}
    </div>
  );
}

export default CurrencyList;
