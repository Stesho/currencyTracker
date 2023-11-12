import React, { PureComponent } from 'react';

import { CurrencySearch } from '@/components/ui/currencySearch/CurrencySearch';

export class BankCardPage extends PureComponent {
  render() {
    return (
      <main>
        <CurrencySearch />
      </main>
    );
  }
}
