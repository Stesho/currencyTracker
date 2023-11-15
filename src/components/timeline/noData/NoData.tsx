import React from 'react';

import { Button } from '@/components/ui/button/Button';

import styles from './NoData.module.scss';

interface NoDataProps {
  isButtonActive: boolean;
  onBackToDataClick: () => void;
}

const NoData = ({ isButtonActive, onBackToDataClick }: NoDataProps) => (
  <div className={styles.noData}>
    <h3>No data</h3>
    {isButtonActive && (
      <Button onClick={onBackToDataClick} className={styles.backButton}>
        Back to data
      </Button>
    )}
  </div>
);

export default NoData;
