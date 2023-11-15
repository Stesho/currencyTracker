import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyCodeCard } from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import { DropDown } from '@/components/ui/dropdown/DropDown';
import { Modal } from '@/components/ui/modal/Modal';
import { NumberInput } from '@/components/ui/numberInput/NumberInput';
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
  id = 'currencyCodeCard-modal',
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
      <div className={styles.currencyModal}>
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
            <div>
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
