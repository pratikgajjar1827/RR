import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from './HeaderSingle.jsx';
import Banner from './Banner.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Project from './Project.jsx';
import Project2 from './Project2.jsx';
import About from './About.jsx';
import Services from './Service.jsx';
import Faq from './Faq.jsx';
import Achivement from './Achivement.jsx';
import Video from '../HomeOne/Video.jsx';
import Testimonial from './Testimonial.jsx';
import Marquee from './Marquee2.jsx';
import ChooseUs from './ChooseUs.jsx';
import Marquee2 from './Marquee3.jsx';
import Blog from './Blog.jsx';
import Qta from './Qta.jsx';


function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Services />
            <About />
            <Marquee />
            <ChooseUs />
            <Project />
            <Marquee2 />
            <Faq />
            <Achivement />
            <Video />
            <Project2 />
            <Testimonial />
            <Blog />
            <Qta />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeThree;
