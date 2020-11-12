import React from 'react';
import styles from './CoverImage.style.css';

import CoverImg from './assets/images/coverimg.jpg';

function CoverImage() {
    return(
        <figure>
            <img className={styles.img} src={CoverImg} alt="The band" />
        </figure>
    );
}

export default CoverImage;
