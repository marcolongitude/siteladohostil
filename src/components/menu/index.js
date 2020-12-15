import React from 'react';
import Image from 'next/image';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Container, ContainerLogo } from './styles';

library.add(fas)


function menu() {
    return (
        <Container>
            <ContainerLogo>
                <Image src="/images/logos/ladohostilpretobranco.png" width={60} height={60} />
                <span>Lado Hostil</span>
            </ContainerLogo>
            <div>
                <a href="#" >
                    <Image src="/images/icons/facebook.png" width={30} height={30} />
                </a>
                <a href="#" >
                    <Image src="/images/icons/instagram.png" width={30} height={30} />
                </a>
                <a href="#" >
                    <Image src="/images/icons/whatsapp.png" width={30} height={30} />
                </a>
                <a href="#" >
                    <Image src="/images/icons/youtube.png" width={30} height={30} />
                </a>
            </div>
            <div>
                <ul>
                    <li>Imagens</li>
                    <li>Vídeos</li>
                    <li>Arquivos</li>
                </ul>
            </div>
        </Container>
    )
}

export default menu;