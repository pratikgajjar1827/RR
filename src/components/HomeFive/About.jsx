import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp.jsx'; 
import AboutImage1 from '../../assets/images/about/about-five-icon.png'; 
import AboutImage2 from '../../assets/images/about/about-five-image.jpg'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation:{
        clickable: true,
        prevEl: ".about__arry-prev",
        nextEl: ".about__arry-next",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    },
};

function AboutSection({ className }) {
    const countOffer = 25;
    const countOffer2 = 120;
    const countOffer3 = 320;
    const countOffer4 = 95;
    return (
        <section id="about" className={`about-five-area pt-130 ${className || ''}`}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="about-five__image">
                            <img src={AboutImage2} alt="image"/>
                            <div className="icon">
                                <img className="animation__rotate" src={AboutImage1} alt="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-five__wrp">
                            <div className="section-header mb-30">
                                <h6>ABOUT STRATIFY</h6>
                                <h2 className="wow splt-txt" data-splitting>we take a collaborative approach, working
                                    closely with each client to understand their opportunities.</h2>
                            </div>
                            <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">With 30 Years of
                                Experience</h4>
                            <p className="wow fadeInUp text mt-15" data-wow-delay="200ms" data-wow-duration="1500ms">Our
                                team
                                of
                                industry experts combines decades of experience across various sectors to deliver
                                results-driven solutions.</p>
                            <div className="btn-wrp">
                                <Link to="/page-about" className="btn-one wow fadeInUp mt-50" data-wow-delay="300ms"
                                    data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover
                                    More</Link>
                                <Link to="/contact" className="btn-two wow fadeInUp mt-50" data-wow-delay="400ms"
                                    data-wow-duration="1500ms" data-splitting data-text="Contact Us">Contact Us</Link>
                            </div>
                            <div className="wrp mt-50">
                                <div className="head mb-30">
                                    <h5>Our Results <span className="line"></span></h5>
                                    <div className="arry-wrp">
                                        <button className="about__arry-prev"><i
                                                className="fa-light fa-arrow-left-long"></i></button>
                                        <button className="about__arry-next"><i
                                                className="fa-light fa-arrow-right-long"></i></button>
                                    </div>
                                </div>
                                <Swiper {...swiperOptions} className="swiper about-five__slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp count={countOffer} time={3} /></span>k+</h2>
                                                <h4 className="my-2">Customers Served</h4>
                                                <p>Stratify provides comprehensive consultancy and training services,
                                                    specializing in data-driven solutions.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp count={countOffer2} time={3} /></span>+</h2>
                                                <h4 className="my-2">Expert Team</h4>
                                                <p>We are committed to continuous learning, ensuring that our clients
                                                    always
                                                    receive
                                                    the best solutions available.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp count={countOffer3} time={3} /></span>k+</h2>
                                                <h4 className="my-2">Company Revenue</h4>
                                                <p>Stratify provides comprehensive consultancy and training services,
                                                    specializing in data-driven solutions.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="about-five__item">
                                                <h2><span className="count"><CounterUp count={countOffer4} time={3} /></span>+</h2>
                                                <h4 className="my-2">Global Clients</h4>
                                                <p>We are committed to continuous learning, ensuring that our clients
                                                    always
                                                    receive
                                                    the best solutions available.</p>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
