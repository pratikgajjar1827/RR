import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import Accordion from './Accordion.jsx';
import Professional from './Professional.jsx';
import ChooseUs from './ChooseUs.jsx';
import Video from './Video.jsx';
import About from './About.jsx';
import Team from './Team.jsx';
import Faqs from './Faqs.jsx';
import Brand from './Brand.jsx'; 
import Contact from './Contact.jsx';
import Blog from './Blog.jsx';

function HomeOneSingle() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <Consult />
            <Accordion />
            <Professional />
            <ChooseUs />
            <Video />
            <About />
            <Team />
            <Faqs />
            <Brand />
            <Contact />
            <Blog />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeOneSingle;
