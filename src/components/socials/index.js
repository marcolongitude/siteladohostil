import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';


const socials = () => {
    return (
        <div className={styles.container}>
            <a href="https://www.facebook.com/LADO-HOSTIL-Tributo-ORappa-293628441150691" >
                <Image src="/images/icons/facebook.png" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/ladohostil/" >
                <Image src="/images/icons/instagram.png" width={40} height={40} />
            </a>
            <a href="#" >
                <Image src="/images/icons/whatsapp.png" width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/channel/UCJbYNv36IXpK-SG2kDGtVlQ" >
                <Image src="/images/icons/youtube.png" width={40} height={40} />
            </a>
        </div>
    )
}

export default socials;