import React from 'react';
import styles from './Home.style.css';

import Icons from './Icons';

import CoverImage from './CoverImage';

function Home() {
  return (
    <div>
      <CoverImage />

      <Icons />

      <div className={styles.attribution}>
        Icons made by{' '}
        <b>
          <a
            className={styles.link}
            href="https://www.flaticon.com/authors/pixel-perfect"
          >
            Pixel perfect
          </a>
        </b>{' '}
        from{' '}
        <b>
          <a className={styles.link} href="https://www.flaticon.com">
            www.flaticon.com
          </a>
        </b>
      </div>
    </div>
  );
}

export default Home;
