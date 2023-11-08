import React, { PureComponent } from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import DropDown from '@/components/ui/dropdown/DropDown';
import CurrencyCodeCard from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import ChartForm from '@/components/ui/chartForm/ChartForm';
import PriceChart from '@/components/priceChart/PriceChart';
import { ChartData } from '@/constants/chart/chartData';
import styles from './Timeline.module.scss';

interface TimelineProps {
  currencies: CurrencyRated[];
}
interface TimelineState {
  selectedCurrency: CurrencyRated;
  chartData: ChartData;
  chartBuilt: boolean;
}

class Timeline extends PureComponent<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      selectedCurrency: props.currencies[0],
      chartData: [],
      chartBuilt: false,
    };
  }

  onSelectCurrency = (currency: CurrencyRated) => {
    this.setState({
      selectedCurrency: currency,
    });
  };

  onSubmitForm = (data: ChartData) => {
    this.setState({
      chartData: data,
      chartBuilt: true,
    });
  };

  render() {
    const { selectedCurrency, chartData, chartBuilt } = this.state;
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
      </div>
    );
  }
}

export default Timeline;
