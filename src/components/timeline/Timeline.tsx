import React, { PureComponent } from 'react';

import { ChartFormModal } from '@/components/chartFormModal/ChartFormModal';
import { PriceChart } from '@/components/priceChart/PriceChart';
import NoData from '@/components/timeline/noData/NoData';
import { Button } from '@/components/ui/button/Button';
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

  onBackToDataClick = () => {
    this.setState({
      isActiveModal: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      isActiveModal: false,
    });
  };

  onSelectCurrency = (currency: CurrencyRated) => {
    this.setState({
      selectedCurrency: currency,
      isActiveModal: true,
      chartData: [],
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
      <section className={`${styles.timeline} container`}>
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
          <>
            <PriceChart data={chartData} />
            <Button
              className={styles.backButton}
              onClick={this.onBackToDataClick}
            >
              Back to data
            </Button>
          </>
        ) : (
          <NoData
            isButtonActive={Boolean(selectedCurrency)}
            onBackToDataClick={this.onBackToDataClick}
          />
        )}
        {isActiveModal && (
          <ChartFormModal
            onSubmitForm={this.onSubmitForm}
            onClose={this.onCloseModal}
            initialChartData={chartData.length > 0 ? chartData : undefined}
          />
        )}
        {isNotificationActive && (
          <Notification onClose={this.closeNotification} />
        )}
      </section>
    );
  }
}
