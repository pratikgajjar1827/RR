import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';
import Marquee from '../HomeThree/Marquee2.jsx';

function NewsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/news', title: 'News' },
                ]}
            />
            <News />
            <Marquee />
            <Footer />
            <BackToTop />
        </>
    );
}

export default NewsPages;
