import React, { PureComponent } from 'react';

import { Info } from '@/components/ui/info/Info';

class ContactsPage extends PureComponent {
  render() {
    return (
      <main>
        <Info />
        <section className='container'>
          <h2>Contacts</h2>
        </section>
      </main>
    );
  }
}

export default ContactsPage;
