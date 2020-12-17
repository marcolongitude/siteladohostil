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
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#gallery">Imagens</a></li>
                    <li><a href="#videos">Vídeos</a></li>
                    <li><a href="#files">Arquivos</a></li>
                </ul>
            </div>
        </Container>
    )
}

export default menu;