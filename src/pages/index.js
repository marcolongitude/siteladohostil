import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Gallery from '../components/gallery';
import Videos from '../components/videos';
import Files from '../components/files';

function Index() {
    return (
        <div>
            <Menu />
            <Header />
            <Gallery />
            <Videos />
            <Files />
        </div>
    )
}

export default Index;