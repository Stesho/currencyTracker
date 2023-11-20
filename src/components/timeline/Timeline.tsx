import React, { PureComponent } from 'react';

import { ChartFormModal } from '@/components/chartFormModal/ChartFormModal';
import { PriceChart } from '@/components/priceChart/PriceChart';
import { Button } from '@/components/ui/button/Button';
import { CurrencyCodeCard } from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import { DropDown } from '@/components/ui/dropdown/DropDown';
import { Notification } from '@/components/ui/notification/Notification';
import { chartFormOptions } from '@/constants/chart/chartFormOptions';
import { observer } from '@/services/observer/observer';
import { ChartData } from '@/types/chartData';
import { CurrencyRated } from '@/types/currency';
import { addDayDataToChartData } from '@/utils/addDayDataToChartData/addDayDataToChartData';
import { calculateInitialChartData } from '@/utils/calculateInitialChartData/calculateInitialChartData';
import { randomizeChartData } from '@/utils/randomizeChartData/randomizeChartData';

import styles from './Timeline.module.scss';

interface TimelineProps {
  currencies: CurrencyRated[];
}
interface TimelineState {
  selectedCurrency: CurrencyRated;
  chartData: ChartData;
  isActiveModal: boolean;
  isNotificationActive: boolean;
}

export class Timeline extends PureComponent<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      selectedCurrency: props.currencies[0],
      chartData: addDayDataToChartData(
        randomizeChartData(chartFormOptions.initialDaysCount),
      ),
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
      chartData: addDayDataToChartData(
        calculateInitialChartData(chartFormOptions.initialDaysCount),
      ),
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
          className={styles.dropDown}
        />
        <CurrencyCodeCard
          id={selectedCurrency.id}
          iconUrl={selectedCurrency.iconUrl}
          currencyName={selectedCurrency.currencyName}
        />
        <PriceChart data={chartData} />
        <Button className={styles.backButton} onClick={this.onBackToDataClick}>
          Back to data
        </Button>
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
