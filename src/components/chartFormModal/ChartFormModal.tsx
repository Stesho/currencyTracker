import React from 'react';

import { ChartForm } from '@/components/ui/chartForm/ChartForm';
import { Modal } from '@/components/ui/modal/Modal';
import { ChartData } from '@/constants/chart/chartData';

interface ChartFormModalProps {
  onSubmitForm: (chartData: ChartData) => void;
}

export const ChartFormModal = ({ onSubmitForm }: ChartFormModalProps) => (
    <Modal id='chartForm-modal' onClose={() => {}}>
      <ChartForm onSubmit={onSubmitForm} />
    </Modal>
  );
