import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

function socials() {
    return (
        <Container>
            <a href="#" >
                <Image src="/images/icons/facebook.png" width={40} height={40} />
            </a>
            <a href="#" >
                <Image src="/images/icons/instagram.png" width={40} height={40} />
            </a>
            <a href="#" >
                <Image src="/images/icons/whatsapp.png" width={40} height={40} />
            </a>
            <a href="#" >
                <Image src="/images/icons/youtube.png" width={40} height={40} />
            </a>
        </Container>
    )
}

export default socials;