import React from 'react';

import styles from './NoData.module.scss';

interface NoDataProps {
  isButtonActive: boolean;
  onBackToDataClick: () => void;
}

const NoData = ({ isButtonActive, onBackToDataClick }: NoDataProps) => (
    <div className={styles.noData}>
      <h3>No data</h3>
      {isButtonActive && (
        <button
          type='button'
          className={styles.backButton}
          onClick={onBackToDataClick}
        >
          Back to data
        </button>
      )}
    </div>
  );

export default NoData;
