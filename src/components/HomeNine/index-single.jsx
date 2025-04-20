import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import Video from './Video.jsx';
import Video2 from './Video2.jsx';
import Video3 from '../HomeFive/Video.jsx';
import Brand from '../HomeSix/Brand.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Pricing from './Pricing.jsx';
import About from './About.jsx';
import Faqs from './Faqs.jsx';
import Services from './Service.jsx';
import ProjectSlider from '../HomeTwo/ProjectSlider.jsx';
import Blog from './Blog.jsx';
import Testimonial from './Testimonial.jsx';
import Contact from './Contact.jsx';
import Marquee from './Marquee2.jsx';


function HomeNine() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <Video />
            <About />
            <Services />
            <Video2 />
            <Brand />
            <Marquee />
            <ProjectSlider />
            <Pricing />
            <Faqs />
            <Testimonial />
            <Video3 />
            <Blog />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeNine;
