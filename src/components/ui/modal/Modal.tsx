import React from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePortal } from '@/hooks/usePortal';

// import { Portal } from '@/components/ui/portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  id: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ id, onClose, children }: ModalProps) => {
  const Portal = usePortal(id);
  const overlay = useOutsideClick(() => onClose());

  return (
    <Portal>
      <div className={styles.overlay}>
        <div className={styles.content} ref={overlay}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
