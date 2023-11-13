import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyCodeCard } from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import { DropDown } from '@/components/ui/dropdown/DropDown';
import { Modal } from '@/components/ui/modal/Modal';
import { NumberInput } from '@/components/ui/numberInput/NumberInput';
import { RootState } from '@/store/store';
import { CurrencyRated } from '@/types/currency';

import styles from './currencyModal.module.scss';

interface CurrencyModalProps {
  id?: string;
  currency: CurrencyRated;
  onClose: () => void;
}

export const CurrencyModal = ({
  currency,
  onClose,
  id = 'currencyCodeCard-modal',
}: CurrencyModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyRated>(
    null!,
  );
  const [rate, setRate] = useState(currency.rate);
  const [quantity, setQuantity] = useState(1);
  const currencyState = useSelector((state: RootState) => state.currency);

  const onInputQuantity = (value: number) => {
    setQuantity(value);
  };

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
          <CurrencyCodeCard
            id={currency.id}
            iconUrl={currency.iconUrl}
            currencyName={currency.currencyName}
          />
          <div className={styles.convert}>
            <NumberInput value={quantity} setValue={onInputQuantity} />
            <span>
              {currency.id} = {quantity * rate} {selectedCurrency?.id || 'USD'}
            </span>
          </div>
          <DropDown
            options={currencyState.currencies}
            onSelectOption={setSelectedCurrency}
          />
        </div>
      </div>
    </Modal>
  );
};
