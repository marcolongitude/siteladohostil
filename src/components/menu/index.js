import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';


const menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <Image src="/images/logos/ladohostilpretobranco.png" width={60} height={60} />
                <span>Lado Hostil</span>
            </div>
            <div>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#gallery">Imagens</a></li>
                    <li><a href="#videos">Vídeos</a></li>
                    <li><a href="#files">Arquivos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default menu;