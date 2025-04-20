import React from 'react';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Testimonial from '../HomeFive/Testimonial.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';


function TestimonialPage() {
    return (
        <>
            <Header />
            <PageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/testimonial', title: 'Testimonial' },
                ]}
            />
            <Testimonial className="pb-0" />
            <Marquee />
            <Footer />
            <BackToTop />
        </>
    );
}
export default TestimonialPage;