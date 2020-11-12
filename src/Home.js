import React, {Suspense} from 'react';
import styles from './Home.style.css';

import Icons from './Icons';

const CoverImage= React.lazy(()=>import('./CoverImage'));

function Home() {
    return (
        <div>
            <Suspense fallback={<div className={styles.loadingtext}>Loading, please wait.</div>}>
                <CoverImage />
            </Suspense>
            
            <Icons />
            
            <div className={styles.attribution}>
                Icons made by <b><a className={styles.link} href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a></b> from <b><a className={styles.link} href="https://www.flaticon.com">www.flaticon.com</a></b>
            </div>
        </div>
    );
}

export default Home;