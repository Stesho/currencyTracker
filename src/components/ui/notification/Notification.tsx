import React from 'react';
import Portal from '@/components/ui/portal/Portal';
import SuccessIcon from '@/assets/icons/success.svg';
import styles from './Notification.module.scss';

function Notification() {
  return <Portal id="notification">
    <div className={styles.notification}>
      <SuccessIcon className={styles.img} alt='success' />
      <div className={styles.text}>
        <span className={styles.title}>Success</span>
        <p className={styles.message}>Chart has been successfully built</p>
      </div>
    </div>
  </Portal>
}

export default Notification;
