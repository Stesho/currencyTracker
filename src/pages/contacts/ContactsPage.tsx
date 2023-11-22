import React, { PureComponent } from 'react';

import { Info } from '@/components/ui/Info/Info';
import { contacts } from '@/constants/contacts/contacts';

import styles from './ContactsPage.module.scss';

class ContactsPage extends PureComponent {
  render() {
    return (
      <main>
        <Info />
        <section className={`${styles.contacts} container`}>
          <h2 className={styles.title}>Contacts</h2>
          <div className={`${styles.section} ${styles.address}`}>
            <h3 className={styles.header}>Address</h3>
            <span className={styles.contact}>Stefana Okrzei 1a/10</span>
            <span className={styles.contact}>Warsaw, Poland</span>
          </div>
          <div className={styles.section}>
            <h3 className={styles.header}>Mail</h3>
            <a
              className={styles.contact}
              href='mailto:contact@modsen-software.com'
            >
              contact@modsen-software.com
            </a>
          </div>
          <div className={styles.section}>
            <h3 className={styles.header}>Phone</h3>
            <a className={styles.contact} href='tel:+48501157180'>
              +48501157180
            </a>
          </div>
          <div className={styles.section}>
            <h3 className={styles.header}>Social</h3>
            <ul>
              {contacts.map((contact) => (
                <li className={`${styles.contact} ${styles.socialLink}`}>
                  <a href={contact.link} target='_blank' rel='noreferrer'>
                    <contact.icon className={styles.icon} />
                    <span>{contact.social}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default ContactsPage;
