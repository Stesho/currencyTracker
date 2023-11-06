import React from 'react';
import Modal from '@/components/ui/modal/Modal';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import styles from './currencyModal.module.scss';

interface CurrencyModalProps {
  id?: string;
  currency: CurrencyCardProps;
  onClose: () => void;
}

function CurrencyModal({
  currency,
  onClose,
  id = 'currency-modal',
}: CurrencyModalProps) {
  return (
    <Modal id={id} onClose={onClose}>
      <div className={styles.currencyModal}>
        <button className={styles.closeButton} onClick={onClose} type='button'>
          ✖
        </button>
        <div className={styles.content}>
          <CurrencyCard
            id={currency.id}
            iconUrl={currency.iconUrl}
            currencyName={currency.currencyName}
            rate={currency.rate}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CurrencyModal;
