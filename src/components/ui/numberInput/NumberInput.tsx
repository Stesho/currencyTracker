import React, { ChangeEvent, useEffect, useState } from 'react';

import styles from './NumberInput.module.scss';

interface NumberInputProps {
  initialValue?: number;
  value: number;
  setValue: (value: number) => void;
  isIntegersOnly?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

export const NumberInput = ({
  initialValue,
  value,
  setValue,
  min,
  max,
  className,
  isIntegersOnly = false,
}: NumberInputProps) => {
  const positiveIntegers = /^\d*$/;
  const positiveFloat = /^\d*\.?\d*$/;
  const pattern = isIntegersOnly ? positiveIntegers : positiveFloat;

  const [displayedValue, setDisplayedValues] = useState(value.toString());

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDisplayedValue = pattern.test(event.target.value)
      ? event.target.value
      : displayedValue;
    let newValue = Number(newDisplayedValue);

    if (max && Number(newDisplayedValue) > max) {
      newValue = max;
    }

    if (min && Number(newDisplayedValue) < min) {
      newValue = min;
    }

    setValue(newValue);
    setDisplayedValues(newDisplayedValue);
  };

  const onBlur = () => {
    setDisplayedValues(value.toString());
  };

  useEffect(() => {
    setDisplayedValues(initialValue?.toString() || value.toString());
  }, [initialValue]);

  return (
    <input
      value={displayedValue}
      type='string'
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles.input} ${className}`}
    />
  );
};
