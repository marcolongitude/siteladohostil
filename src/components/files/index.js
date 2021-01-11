import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './styles.module.css';


const files = ()=> {
    return (
        <div className={styles.container}>
            <span id="files" >Baixe os arquivos da banda Lado Hostil</span>
            <div className={styles.containerFiles}>
                <div><a src="#">Release</a></div>
                <div><a src="#">Mapa de palco</a></div>
                <div><a src="#">Rider Técnico</a></div>
                <div><a src="#">Release</a></div>
            </div>
        </div>
)} 

export default files;
