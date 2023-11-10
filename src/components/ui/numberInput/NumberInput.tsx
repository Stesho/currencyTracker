import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import removeLeadingZeros from '@/utils/removeLeadingZeros';
import styles from './NumberInput.module.scss';

interface NumberInputProps {
  value: number;
  setValue: (value: number) => void;
  isIntegersOnly?: boolean;
  min?: number;
  max?: number;
}

function NumberInput({
  value,
  setValue,
  min,
  max,
  isIntegersOnly = false,
}: NumberInputProps) {
  const positiveIntegers = /^\d*$/;
  const positiveFloat = /^\d*\.?\d*$/;
  const pattern = isIntegersOnly ? positiveIntegers : positiveFloat;

  const [displayedValue, setDisplayedValue] = useState(value.toString());

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newDisplayedValue = pattern.test(event.target.value)
      ? event.target.value
      : displayedValue;

    if (Number(newDisplayedValue) >= 1) {
      newDisplayedValue = removeLeadingZeros(newDisplayedValue);
    }

    if (newDisplayedValue.length === 0) {
      newDisplayedValue = '0';
    }

    setDisplayedValue(newDisplayedValue);
  };

  const setMinOrMax = (event: FocusEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);

    if (max && newValue > max) {
      newValue = max;
    }

    if (min && newValue < min) {
      newValue = min;
    }

    setValue(newValue);
    setDisplayedValue(newValue.toString());
  };

  useEffect(() => {
    setDisplayedValue(value.toString());
  }, [value]);

  return (
    <input
      value={displayedValue}
      type='text'
      onChange={onChange}
      onBlur={setMinOrMax}
      className={styles.input}
    />
  );
}

export default NumberInput;
