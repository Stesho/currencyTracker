import React, { useEffect } from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePortal } from '@/hooks/usePortal';

import styles from './Modal.module.scss';

interface ModalProps {
  id: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ id, onClose, children }: ModalProps) => {
  const Portal = usePortal(id);
  const content = useOutsideClick(() => onClose());

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Portal>
      <div className={styles.overlay}>
        <div className={styles.content} ref={content}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            type='button'
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
