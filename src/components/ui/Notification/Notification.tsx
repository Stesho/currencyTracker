import React, { Component } from 'react';

import SuccessIcon from '@/assets/icons/success.svg';
import { Portal } from '@/components/ui/Portal/Portal';

import styles from './Notification.module.scss';

interface NotificationProps {
  onClose: () => void;
}
interface NotificationState {
  liveTimeMs: number;
  animation: string;
}

export class Notification extends Component<
  NotificationProps,
  NotificationState
> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      liveTimeMs: 4000,
      animation: styles.open,
    };
  }

  componentDidMount() {
    const { liveTimeMs } = this.state;
    const { onClose } = this.props;
    const animationDurationMs = 280;
    const delayBeforeUnmounting = liveTimeMs - animationDurationMs;

    setTimeout(() => {
      this.closeAnimation();
    }, delayBeforeUnmounting);

    setTimeout(() => {
      onClose();
    }, liveTimeMs);
  }

  closeAnimation = () => {
    this.setState({
      animation: styles.close,
    });
  };

  render() {
    const { animation } = this.state;
    const { onClose } = this.props;

    return (
      <Portal id='notification'>
        <div
          data-cy='notification'
          className={`${styles.notification} ${animation}`}
        >
          <SuccessIcon className={styles.img} alt='success' />
          <div className={styles.text}>
            <span className={styles.title}>Success</span>
            <p className={styles.message}>Chart has been successfully built</p>
          </div>
          <button type='button' className={styles.closeBtn} onClick={onClose}>
            ✖
          </button>
        </div>
      </Portal>
    );
  }
}
