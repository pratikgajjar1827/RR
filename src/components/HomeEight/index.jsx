import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Footer from './Footer.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Faqs from './Faqs.jsx';
import Qta from './Qta.jsx';
import Services from './Service.jsx';
import FunFact from './FunFact.jsx';
import Blog from './Blog.jsx';
import Testimonial from '../HomeThree/Testimonial.jsx';
import Marquee from './Marquee2.jsx';
import Contact from './Contact.jsx';


function HomeEight() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Marquee />
            <Services />
            <FunFact />
            <Faqs />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Qta />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeEight;
