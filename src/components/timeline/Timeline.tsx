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
  selectedCurrency: CurrencyRated;
  chartData: ChartData;
  chartBuilt: boolean;
  isNotificationActive: boolean;
}

export class Timeline extends PureComponent<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      selectedCurrency: props.currencies[0],
      chartData: [],
      chartBuilt: false,
      isNotificationActive: false,
    };
  }

  componentDidMount() {
    observer.subscribe(this.showNotification);
  }

  componentWillUnmount() {
    observer.unsubscribe(this.showNotification);
  }

  onSelectCurrency = (currency: CurrencyRated) => {
    this.setState({
      selectedCurrency: currency,
      chartBuilt: false,
    });
  };

  onSubmitForm = (data: ChartData) => {
    this.setState({
      chartData: data,
      chartBuilt: true,
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
    const { selectedCurrency, chartData, chartBuilt, isNotificationActive } =
      this.state;

    return (
      <section className='container'>
        <DropDown
          options={currencies}
          onSelectOption={this.onSelectCurrency}
          className={styles.dropDown}
        />
        <CurrencyCodeCard
          id={selectedCurrency.id}
          iconUrl={selectedCurrency.iconUrl}
          currencyName={selectedCurrency.currencyName}
        />
        <PriceChart data={chartData} />
        {!chartBuilt && <ChartFormModal onSubmitForm={this.onSubmitForm} />}
        {isNotificationActive && (
          <Notification onClose={this.closeNotification} />
        )}
      </section>
    );
  }
}
