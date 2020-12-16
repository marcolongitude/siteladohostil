import React from 'react';
import Image from 'next/image';

import { ContainerHeader } from './styles';

function header() {
    return (
        <ContainerHeader>
            <span id="inicio"></span>
            <Image src="/images/header/header1.jpg" layout="responsive" width={600} height={400} />
        </ContainerHeader>
    )
}

export default header;