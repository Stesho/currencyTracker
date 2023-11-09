import React, { PureComponent } from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import DropDown from '@/components/ui/dropdown/DropDown';
import CurrencyCodeCard from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import ChartForm from '@/components/ui/chartForm/ChartForm';
import PriceChart from '@/components/priceChart/PriceChart';
import { ChartData } from '@/constants/chart/chartData';
import Notification from '@/components/ui/notification/Notification';
import styles from './Timeline.module.scss';

interface TimelineProps {
  currencies: CurrencyRated[];
}
interface TimelineState {
  selectedCurrency: CurrencyRated;
  chartData: ChartData;
  chartBuilt: boolean;
  isNotificationShow: boolean;
}

class Timeline extends PureComponent<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      selectedCurrency: props.currencies[0],
      chartData: [],
      chartBuilt: false,
      isNotificationShow: false,
    };
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
  };

  render() {
    const { selectedCurrency, chartData, chartBuilt, isNotificationShow } =
      this.state;
    const { currencies } = this.props;

    return (
      <div className='container'>
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
        {chartBuilt ? (
          <PriceChart data={chartData} />
        ) : (
          <ChartForm onSubmit={this.onSubmitForm} />
        )}
        {isNotificationShow && <Notification />}
      </div>
    );
  }
}

export default Timeline;
