import React from 'react';
import { createPortal } from 'react-dom';
import styles from "./Loader.module.scss"


function Loader() {
    return createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src='/images/loader.gif' alt='Loading...' />
            </div>
        </div>,
        document.getElementById("loader")
    )
}

export const Spinner = () =>{
    return(
        <div className='d-flex justify-content-center'>
            <img src='/images/loader.gif' alt='Loading...' />
        </div>
    )
}

export default Loader;