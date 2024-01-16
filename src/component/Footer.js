import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.Container}>
            <h3 className={styles.FooterMader}>made by khashayar mobarez</h3>
            <h3 className={styles.FooterMader}>khashayar sample product</h3>
        </div>
    );
};

export default Footer;