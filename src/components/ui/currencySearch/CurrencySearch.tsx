import React, { PureComponent } from 'react';

import { Input } from '@/components/ui/input/Input';
import { Map } from '@/components/ui/map/Map';

export class CurrencySearch extends PureComponent {
  render() {
    return (
      <section className='container'>
        <h2>Search currency in the bank</h2>
        <Input />
        <Map />
      </section>
    );
  }
}
