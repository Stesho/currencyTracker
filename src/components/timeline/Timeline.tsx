import React, { PureComponent } from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import DropDown from '@/components/ui/dropdown/DropDown';
import CurrencyCodeCard from '@/components/ui/currencyCodeCard/CurrencyCodeCard';
import PriceChart from '@/components/priceChart/PriceChart';
import styles from './Timeline.module.scss';

interface TimelineProps {
  currencies: CurrencyRated[];
}
interface TimelineState {
  selectedCurrency: CurrencyRated;
}

class Timeline extends PureComponent<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    this.state = {
      selectedCurrency: props.currencies[0],
    };
  }

  onSelectCurrency = (currency: CurrencyRated) => {
    this.setState({
      selectedCurrency: currency,
    });
  };

  render() {
    const { selectedCurrency } = this.state;
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
        <PriceChart />
      </div>
    );
  }
}

export default Timeline;
