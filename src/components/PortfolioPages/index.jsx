import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx'
import Portfolio from './Portfolio.jsx';

function PortfolioPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Portfolio"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/Portfolio', title: 'Portfolio' },
                ]}
            />
            <Portfolio />
            <Footer />
            <BackToTop />
        </>
    );
}

export default PortfolioPages;
