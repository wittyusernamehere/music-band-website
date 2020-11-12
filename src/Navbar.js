import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.style.css';

function Navbar() {
    return(
        <div className={styles.navbar}>
            <Link to="/" className={styles.navbaritem}>Home</Link>
            <Link to="/biography" className={styles.navbaritem}>Biography</Link>
            <Link to="/contact" className={styles.navbaritem}>Contact</Link>
        </div>
    );
}

export default Navbar;