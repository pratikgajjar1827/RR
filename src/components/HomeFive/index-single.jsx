import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Footer from '../HomeFour/Footer.jsx';
import Feature from './Feature.jsx';
import Solutions from './Solutions.jsx';
import About from './About.jsx';
import About2 from '../HomeOne/About.jsx';
import Video from './Video.jsx';
import Video2 from './Video2.jsx';
import Pricing from './Pricing.jsx';
import Faqs from './Faqs.jsx';
import Team from './Team.jsx';
import Testimonial from './Testimonial.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';


function HomeFive() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <About />
            <Feature />
            <Solutions />
            <Pricing />
            <Faqs />
            <Team />
            <Video />
            <Testimonial />
            <About2 />
            <Video2 />
            <Marquee />
            <Blog />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeFive;
