import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';


const videos = () => {
    return (
        <div className={styles.container}>
            <span id="videos"></span>
            <div className={styles.containerLogo}>
                <span className={styles.imgLogoVideos} >
                    <Image src="/images/logos/ladohostilpretobranco.png" width={130} height={130} />
                </span>
            </div>
            <div className={styles.titleVideos}>
                Assista a vídeos de shows da banda Lado Hostil
            </div>
            <div className={styles.containerVideos}>
                <div className={styles.videos}>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/Uz9bOGPBge4" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/o37i0-lXTjg"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/FvUUNoLCfaU"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/Uz9bOGPBge4" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/o37i0-lXTjg"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/FvUUNoLCfaU"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default videos;