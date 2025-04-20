import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx'
import Services from './Services.jsx';
import Marquee from '../HomeThree/Marquee2.jsx';

function ServicesPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/services', title: 'Services' },
                ]}
            />
            <Services />
            <Marquee />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServicesPages;
