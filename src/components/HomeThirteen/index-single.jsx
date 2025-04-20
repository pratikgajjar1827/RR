import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeTwo/HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Services from '../HomeEleven/Service.jsx';
import About from './About.jsx';
import About2 from '../HomeOne/About.jsx';
import Solution from './Solution.jsx';
import Pricing from '../HomeTwo/Pricing.jsx';
import Video from '../HomeFive/Video2.jsx';
import Testimonial from './Testimonial.jsx';
import Team from '../HomeSeven/Team.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';
import Blog from '../HomeTwo/Blog.jsx';
import Contact from '../HomeNine/Contact.jsx';


function HomeThirteen() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Services />
            <About />
            <Solution />
            <Pricing className="pt-130" />
            <Testimonial />
            <Team />
            <Video /> 
            <About2 />
            <Marquee />    
            <Blog />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeThirteen;
