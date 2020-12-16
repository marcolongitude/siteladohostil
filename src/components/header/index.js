import React from 'react';
import Image from 'next/image';

import { ContainerHeader } from './styles';

function header() {
    return (
        <ContainerHeader>
            <span id="inicio"></span>
            <Image src="/images/header/header1.jpg" layout="fill" />
        </ContainerHeader>
    )
}

export default header;