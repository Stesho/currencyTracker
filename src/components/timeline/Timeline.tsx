import React, { PureComponent } from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import DropDown from '@/components/ui/dropdown/DropDown';

interface TimelineProps {
  currencies: CurrencyRated[];
}
interface TimelineState {}

class Timeline extends PureComponent<TimelineProps, TimelineState> {
  render() {
    const { currencies } = this.props;

    return (
      <div className='container'>
        {currencies.length && (
          <DropDown options={currencies} onSelectOption={() => {}} />
        )}
      </div>
    );
  }
}

export default Timeline;
