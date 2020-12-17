import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Gallery from '../components/gallery';
import Videos from '../components/videos';
import Files from '../components/files';
import Socials from '../components/socials';

function Index() {
    return (
        <div>
            <Menu />
            <Header />
            <Socials />
            <Gallery />
            <Videos />
            <Files />
        </div>
    )
}

export default Index;