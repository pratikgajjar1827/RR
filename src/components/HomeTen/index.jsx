import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import Footer from '../HomeFour/Footer.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import About2 from '../HomeOne/About.jsx';
import Services from './Service.jsx';
import Work from './Work.jsx';
import Video from '../HomeFive/Video2.jsx';
import Testimonial from './Testimonial.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';
import Marquee2 from '../HomeTwo/Marquee2.jsx';
import Blog from './Blog.jsx';


function HomeTen() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <About />
            <Services />
            <Work />
            <Marquee />
            <Portfolio />
            <Testimonial />
            <About2 />
            <Video /> 
            <Marquee2 />      
            <Blog />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeTen;
