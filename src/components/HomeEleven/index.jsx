import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Banner from './Banner.jsx';
import Feature from '../HomeFive/Feature.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Work from '../HomeTen/Work.jsx';
import ChooseUs from '../HomeSeven/ChooseUs.jsx';
import Pricing from '../HomeFive/Pricing.jsx';
import Services from './Service.jsx';
import Solution from './Solution.jsx';
import Team from '../HomeFour/Team.jsx';
import Brand from './Brand.jsx';
import Blog from '../HomeOne/Blog.jsx';


function HomeEleven() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Header action={drawerAction.toggle} />
            <Banner />
            <Services />
            <About />
            <Feature />
            <Solution />
            <Work />
            <ChooseUs />
            <Pricing />
            <Brand />
            <Team />
            <Blog className="pt-0" /> 
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeEleven;
