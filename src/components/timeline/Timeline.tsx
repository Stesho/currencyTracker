import React, { PureComponent } from 'react';

import { ChartFormModal } from '@/components/chartFormModal/ChartFormModal';
import { PriceChart } from '@/components/priceChart/PriceChart';
import { CurrencyCodeCard } from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import { DropDown } from '@/components/ui/dropdown/DropDown';
import { Notification } from '@/components/ui/notification/Notification';
import { ChartData } from '@/constants/chart/chartData';
import { observer } from '@/services/observer/observer';
import { CurrencyRated } from '@/types/currency';

import styles from './Timeline.module.scss';

interface TimelineProps {
  currencies: CurrencyRated[];
}
interface TimelineState {
  selectedCurrency: CurrencyRated | null;
  chartData: ChartData;
  isActiveModal: boolean;
  isNotificationActive: boolean;
}

export class Timeline extends PureComponent<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      selectedCurrency: null,
      chartData: [],
      isActiveModal: false,
      isNotificationActive: false,
    };
  }

  componentDidMount() {
    observer.subscribe(this.showNotification);
  }

  componentWillUnmount() {
    observer.unsubscribe(this.showNotification);
  }

  onCloseModal = () => {
    this.setState({
      isActiveModal: false,
    });
  };

  onSelectCurrency = (currency: CurrencyRated) => {
    this.setState({
      selectedCurrency: currency,
      isActiveModal: true,
    });
  };

  onSubmitForm = (data: ChartData) => {
    this.setState({
      chartData: data,
      isActiveModal: false,
    });
    observer.notify();
  };

  showNotification = () => {
    this.setState({
      isNotificationActive: true,
    });
  };

  closeNotification = () => {
    this.setState({
      isNotificationActive: false,
    });
  };

  render() {
    const { currencies } = this.props;
    const { selectedCurrency, chartData, isActiveModal, isNotificationActive } =
      this.state;

    return (
      <section className='container'>
        <DropDown
          options={currencies}
          onSelectOption={this.onSelectCurrency}
          initialOption='Choose Currency'
          className={styles.dropDown}
        />
        {selectedCurrency && (
          <CurrencyCodeCard
            id={selectedCurrency.id}
            iconUrl={selectedCurrency.iconUrl}
            currencyName={selectedCurrency.currencyName}
          />
        )}
        {chartData.length > 0 ? (
          <PriceChart data={chartData} />
        ) : (
          <div className={styles.noData}>No data</div>
        )}
        {isActiveModal && (
          <ChartFormModal
            onSubmitForm={this.onSubmitForm}
            onClose={this.onCloseModal}
          />
        )}
        {isNotificationActive && (
          <Notification onClose={this.closeNotification} />
        )}
      </section>
    );
  }
}
