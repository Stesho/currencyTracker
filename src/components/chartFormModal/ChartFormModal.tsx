import React from 'react';

import { ChartForm } from '@/components/ui/chartForm/ChartForm';
import { Modal } from '@/components/ui/modal/Modal';
import { ChartData } from '@/constants/chart/chartData';

import styles from './ChartFormModal.module.scss';

interface ChartFormModalProps {
  onSubmitForm: (chartData: ChartData) => void;
  onClose: () => void;
}

export const ChartFormModal = ({
  onSubmitForm,
  onClose,
}: ChartFormModalProps) => (
  <Modal id='chartForm-modal' onClose={onClose}>
    <div className={`${styles.content} scrollBar`}>
      <ChartForm onSubmit={onSubmitForm} />
    </div>
  </Modal>
);
