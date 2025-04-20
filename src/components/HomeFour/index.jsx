import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';
import Portfolio from './Portfolio.jsx';
import Services from './Service.jsx';
import Faq from './Faq.jsx';
import Team from './Team.jsx';
import Video from './Video.jsx';
import Testimonial from './Testimonial.jsx';
import Marquee from './Marquee2.jsx';
import Blog from '../HomeTwo/Blog.jsx';


function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <Services />
            <Marquee />
            <Testimonial />
            <Video />
            <Portfolio />
            <Faq />
            <Team />
            <Contact />
            <Blog />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeFour;
