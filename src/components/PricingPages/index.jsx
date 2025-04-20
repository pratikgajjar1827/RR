import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Pricing from './Pricing.jsx';

function Pricing() {

    return (
        <>
            <Header />
            <PageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/pricing', title: 'Pricing' },
                ]}
            />
            <Pricing />
            <Footer />
            <BackToTop />
        </>
    );
}

export default Pricing;
