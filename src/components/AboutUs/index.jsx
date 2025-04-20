import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import About from '../HomeTwo/About.jsx';
import ProjectSlider from '../HomeTwo/ProjectSlider.jsx';
import Service from '../HomeTwo/Service.jsx';
import Pricing from '../HomeTwo/Pricing.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';

function AboutUs() {

    return (
        <>
            <Header />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us', title: 'About us' },
                ]}
            />
            <About />
            <ProjectSlider />
            <Service />
            <Pricing className="pb-0" />
            <Marquee />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;
