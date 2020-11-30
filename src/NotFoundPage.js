import React from 'react';

import styles from './NotFoundPage.style.css';

const NotFoundPage = ({ location }) => (
  <div className={styles.page}>
    <div className={styles.number}>404</div>
    <div className={styles.text}>
      not found for {location.pathname}
    </div>
  </div>
);

export default NotFoundPage;
