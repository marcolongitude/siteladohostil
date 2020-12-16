import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Gallery from '../components/gallery';
import Videos from '../components/videos';

function Index() {
    return (
        <div>
            <Menu />
            <Header />
            <Gallery />
            <Videos />
        </div>
    )
}

export default Index;