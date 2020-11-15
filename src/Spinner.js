import React from 'react';

import styles from './Spinner.style.css';

const Spinner = () => (
  <div className={styles.flex}>
    <div className={styles.spinner}></div>
  </div>
);

export default Spinner;
