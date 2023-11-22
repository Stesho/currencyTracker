import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyCodeCard } from '@/components/ui/CurrencyCodeCard/CurrencyCodeCard';
import { DropDown } from '@/components/ui/Dropdown/DropDown';
import { Modal } from '@/components/ui/Modal/Modal';
import { NumberInput } from '@/components/ui/NumberInput/NumberInput';
import { RootState } from '@/store/store';
import { CurrencyRated } from '@/types/currency';
import { cutLargeNumber } from '@/utils/cutLargeNumber';

import styles from './CurrencyModal.module.scss';

interface CurrencyModalProps {
  id?: string;
  currency: CurrencyRated;
  onClose: () => void;
}

export const CurrencyModal = ({
  currency,
  onClose,
  id = 'CurrencyCodeCard-Modal',
}: CurrencyModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyRated>(
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
      <div data-cy='currencyModal' className={styles.currencyModal}>
        <div className={styles.content}>
          <CurrencyCodeCard
            id={currency.id}
            iconUrl={currency.iconUrl}
            currencyName={currency.currencyName}
          />
          <div className={styles.convert}>
            <div>
              <NumberInput
                value={quantity}
                setValue={setQuantity}
                className={styles.input}
              />
              <span>{currency.id}</span>
            </div>
            <div>
              <span className={styles.equal}> = </span>
              <span className={styles.convertArrows}>⬇⬆</span>
            </div>
            <div data-cy='currencyModalRate' data-testid='currencyModalRate'>
              {cutLargeNumber(quantity * rate)} {selectedCurrency?.id || 'USD'}
            </div>
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
