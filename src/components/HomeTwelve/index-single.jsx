import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Feature from './Feature.jsx';
import ChooseUs from './ChooseUs.jsx';
import Footer from '../HomeFour/Footer.jsx';
import Services from './Service.jsx';
import Steps from './Steps.jsx';
import Case from './Case.jsx';
import Video from '../HomeFive/Video.jsx';
import Testimonial from './Testimonial.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';
import Blog from '../HomeOne/Blog.jsx';
import Contact from '../HomeOne/Contact.jsx';


function HomeTwelve() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Feature />
            <Marquee />  
            <ChooseUs />  
            <Steps />  
            <Services />
            <Case />
            <Testimonial />
            <Video /> 
            <Blog />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeTwelve;
