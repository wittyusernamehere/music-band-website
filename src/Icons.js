import React from 'react';
import styles from './Icons.style.css';

import TwitterIcon from './icons/twitter.svg';
import FacebookIcon from './icons/facebook.svg';
import GithubIcon from './icons/github.svg';

function Icons() {
    return (
       <div className={styles.borders}>
            <ul>
                <li className={styles.listitem}>
                    <a href="https://twitter.com">
                       <TwitterIcon width="20px" height="20px" />
                   </a>
                </li>
        
                 <li className={styles.listitem}>
                    <a href="https://facebook.com">
                       <FacebookIcon width="20px" height="20px" />
                   </a>
                </li>
       
               <li className={styles.listitem}>
                    <a href="https://github.com">
                       <GithubIcon width="20px" height="20px" />
                   </a>
                </li>
            </ul>
            </div>
        
           
     
    );
}

export default Icons;