import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export const NotFound = () => (
    <main className={`${styles.notFound} container`}>
      <h2 className={styles.header}>Page not found</h2>
      <p className={styles.text}>
        We could not find what you were looking for. Please contact the owner of
        the site that linked you to the original URL and let them know their
        link is broken.
      </p>
      <Link to="/" className={styles.backButton}>
        Back to home
      </Link>
    </main>
  );
