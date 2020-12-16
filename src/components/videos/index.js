import React from 'react';
import Image from 'next/image';

import { Container, ContainerVideos, Videos, TitleVideos, ContainerLogo } from './styles';

function videos() {
    return (
        <Container>
            <span id="videos"></span>
            <ContainerLogo>
                <Image src="/images/logos/ladohostilpretobranco.png" width={130} height={130} />
            </ContainerLogo>
            <TitleVideos>
                Assista a vídeos de shows da banda Lado Hostil
            </TitleVideos>
            <ContainerVideos>
                <Videos>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/Uz9bOGPBge4" 
                        frameborder="0" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/o37i0-lXTjg"
                        frameborder="0" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    <iframe 
                        height="315" 
                        src="https://www.youtube.com/embed/FvUUNoLCfaU"
                        frameborder="0" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </Videos>
            </ContainerVideos>
        </Container>
    )
}

export default videos;