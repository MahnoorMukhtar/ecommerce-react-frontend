import React from 'react';
import styles from "./Footer.module.scss"

function Footer(props) {
    const year = new Date().getFullYear()
    return (
        <div className={styles.footer}>
            &copy; {year} All rights reserved.
        </div>
    );
}

export default Footer;