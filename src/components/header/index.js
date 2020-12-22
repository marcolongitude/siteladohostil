import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css'

const header = () =>  {
    return (
        <div className={styles.container}>
            <span id="inicio"></span>
            <Image src="/images/header/header1.jpg" layout="responsive" width={600} height={400} />
        </div>
    )
}

export default header;