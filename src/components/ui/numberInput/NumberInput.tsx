import React, { ChangeEvent } from 'react';
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
  isIntegersOnly,
  min,
  max,
}: NumberInputProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (isIntegersOnly) {
      newValue = newValue.replace(/\./g, '');
    }

    let newValueNum = Number(newValue);

    if (max && newValueNum > max) {
      newValueNum = max;
    }

    if (min && newValueNum < min) {
      newValueNum = min;
    }

    setValue(newValueNum);
  };

  return (
    <input
      value={value.toString()}
      type='number'
      min={1}
      max={max}
      onChange={onChange}
      className={styles.input}
    />
  );
}

export default NumberInput;
