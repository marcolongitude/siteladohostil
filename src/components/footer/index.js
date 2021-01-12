import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const footer = () => {
    return  (
        <div className={styles.container}>

            <div className={styles.containerSocials}>
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


            <div className={styles.informationsFooter}>
                <div className={styles.logoRappa} >
                    <Image src="/images/logos/LogoRappa.png" width={130} height={130} />
                </div>
                <div className={styles.membersBand}>
                    <h4>Banda Lado Hostil - tributo oRappa</h4>
                    <p>Anthonielly ( tony ) - vocal</p>
                    <p>Madson ( madim ) - guitarra </p>
                    <p>Murilo  ( gerera ) - baixo</p>
                    <p>Marco Aurélio ( marco ) - guitarra</p>
                </div>
                <div >
                    <span className={styles.logoFooter}>
                        <Image src="/images/logos/ladohostilpretobranco.png" width={130} height={130} />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default footer;