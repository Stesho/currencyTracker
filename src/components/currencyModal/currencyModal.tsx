import React, { useEffect, useState } from 'react';
import Modal from '@/components/ui/modal/Modal';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import CurrencyCard from '@/components/ui/currencyCard/CurrencyCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
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
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCardProps>(
    null!,
  );
  const [rate, setRate] = useState(currency.rate);
  const [quantity, setQuantity] = useState(1);
  const currencyState = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    if (selectedCurrency) {
      const newRate = currency.rate / selectedCurrency.rate;
      setRate(newRate);
    }
  }, [selectedCurrency]);

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
          {/* <DropDown options={currencyState.currencies.map((currency) => currency.currencyName)} /> */}
          <input
            value={quantity}
            type='number'
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <span>{currency.id}</span>
          <span> = </span>
          <span>{quantity * rate}</span>
          <span> {selectedCurrency?.id || 'USD'}</span>
          <ul>
            {currencyState.currencies.map((currencyItem: CurrencyCardProps) => (
              <li
                key={currencyItem.id}
                value={currencyItem.id}
                onClick={() => setSelectedCurrency(currencyItem)}
              >
                {currencyItem.currencyName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default CurrencyModal;
