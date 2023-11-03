import React, { useRef , useEffect } from 'react';
import Portal from '../portal/Portal';
import styles from './Modal.module.scss';

interface IModalProps {
  id: string;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ id, onClose, children }: IModalProps) {
  const overlay = useRef(null);

  useEffect(() => {
    const onOverlayClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && overlay.current === target) {
        onClose?.();
      }
    };

    window.addEventListener('click', onOverlayClick);

    return () => {
      window.removeEventListener('click', onOverlayClick);
    };
  }, [onClose]);

  return (
    <Portal id={id}>
      <div className={styles.overlay} ref={overlay}>
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
