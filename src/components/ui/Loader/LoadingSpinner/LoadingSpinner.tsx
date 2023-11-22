import React from 'react';

import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  loaderClassName?: string;
  spinnerClassName?: string;
}

export const LoadingSpinner = ({
  loaderClassName = '',
  spinnerClassName = '',
}: LoadingSpinnerProps) => (
    <div className={`${styles.spinnerWrapper} ${loaderClassName}`}>
      <div className={`${styles.spinner} ${spinnerClassName}`} />
    </div>
  );
