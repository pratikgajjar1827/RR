import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Team from './Team.jsx';
import ChooseUs from './ChooseUs.jsx';
import About from './About.jsx';
import Consult from './Consult2.jsx';
import Services from './Service.jsx';
import Pricing from './Pricing.jsx';
import Testimonial from './Testimonial.jsx';
import Marquee from './Marquee2.jsx';
import Contact from './Contact.jsx';


function HomeSeven() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Consult />
            <Services />
            <ChooseUs />
            <Pricing />
            <Marquee />
            <Testimonial />
            <Team />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeSeven;
