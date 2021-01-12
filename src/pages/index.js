import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Gallery from '../components/gallery';
import Videos from '../components/videos';
import Files from '../components/files';
import Socials from '../components/socials';
import Footer from '../components/footer';

function Index() {
    return (
        <div>
            <Menu />
            <Header />
            <Socials />
            <Gallery />
            <Videos />
            <Files />
            <Footer />
        </div>
    )
}

export default Index;