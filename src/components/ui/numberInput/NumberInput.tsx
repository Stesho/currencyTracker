import React, { ChangeEvent } from 'react';
import styles from './NumberInput.module.scss';

interface NumberInputProps {
  value: string;
  setValue: (value: string) => void;
}

function NumberInput({ value, setValue }: NumberInputProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value).toString());
  };

  return (
    <input
      value={value}
      type='number'
      min={1}
      onChange={onChange}
      className={styles.input}
    />
  );
}

export default NumberInput;
