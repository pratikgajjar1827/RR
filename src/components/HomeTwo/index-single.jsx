import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Footer from './Footer.jsx';
import Feature from './Feature.jsx';
import About from './About.jsx';
import ProjectSlider from './ProjectSlider.jsx';
import Services from './Service.jsx';
import Pricing from './Pricing.jsx';
import Testimonial from './Testimonial.jsx';
import Funfact from './Funfact.jsx';
import Parallax from './Parallax.jsx';
import Marquee from './Marquee2.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';


function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <About />
            <ProjectSlider />
            <Services />
            <Pricing />
            <Testimonial />
            <Funfact />
            <Parallax />
            <Marquee />
            <Blog />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeTwo;
