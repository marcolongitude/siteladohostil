import React from 'react';

import { Container, Files } from './styles';

function files() {
    return (
        <Container>
            <span id="files">Baixe os arquivos da banda Lado Hostil</span>
            <Files>
                <div><a src="#">Release</a></div>
                <div><a src="#">Mapa de palco</a></div>
                <div><a src="#">Rider Técnico</a></div>
                <div><a src="#">Release</a></div>
            </Files>
        </Container>
    )
}

export default files;