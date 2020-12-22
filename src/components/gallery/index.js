import React from 'react';
import Gallery from 'react-photo-gallery';
import Image from 'next/image';
import styles from './styles.module.css';

const PHOTO_SET = [
    {
        src: '/images/galeria/01.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/images/galeria/02.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/03.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/04.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/05.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/06.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/07.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/08.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/09.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/10.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/11.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/12.jpg',
        width: 3,
        height: 2
    },
    {
        src: '/images/galeria/13.jpg',
        width: 3,
        height: 2
    },

];

function gallery() {
    return (
        <div id="gallery">
            <div className={styles.containerLogo}>
                <Image src="/images/logos/ladohostilpretobranco.png" width={130} height={130} />
            </div>
            <div className={styles.titleVideos}>
                Galeria de fotos
            </div>
            <Gallery photos={PHOTO_SET} direction={"row"}/>
        </div>
    )
}

export default gallery;