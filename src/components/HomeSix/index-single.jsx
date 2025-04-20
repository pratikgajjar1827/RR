import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Footer from './Footer.jsx';
import Feature from './Feature.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import About2 from '../HomeOne/About.jsx';
import ChooseUs from './ChooseUs.jsx';
import Video from '../HomeOne/Video.jsx';
import Brand from './Brand.jsx';
import Professional from '../HomeOne/Professional.jsx';
import Team from './Team.jsx';
import Testimonial from './Testimonial.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';


function HomeSix() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <About />
            <Service />
            <ChooseUs />
            <Video />
            <About2 />
            <Team />
            <Testimonial />
            <Brand />
            <Professional />
            <Contact />
            <Blog />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeSix;
