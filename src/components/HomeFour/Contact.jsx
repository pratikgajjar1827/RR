import React from 'react';
import { Link } from 'react-router-dom';
import ContactBgImage from '../../assets/images/bg/contact-four-bg.jpg'; 
import ContactImage1 from '../../assets/images/contact/contact-four-image.jpg'; 
import ContactLogoImage from '../../assets/images/contact/logo.png'; 
import BrandImage1 from '../../assets/images/brand/contact-brand1.png'; 
import BrandImage2 from '../../assets/images/brand/contact-brand2.png'; 
import BrandImage3 from '../../assets/images/brand/contact-brand3.png'; 
import BrandImage4 from '../../assets/images/brand/contact-brand4.png'; 
import BrandImage5 from '../../assets/images/brand/contact-brand5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};


function ProjectSection() {
    return (
        <section id="contacts" className="contact-four-area mt-130" style={{ backgroundImage: `url(${ContactBgImage})` }}>
            <div className="container">
                <div className="contact-four__wrp">
                    <div className="row g-0"> 
                        <div className="col-lg-6">
                            <div className="contact-four__form">
                                <div className="section-header mb-40">
                                    <h6>Let's connect</h6>
                                    <h2 className="wow splt-txt" data-splitting>We’re here to help</h2>
                                    <p className="mt-3">Need help with a project or have a question about our work? We're
                                        here for you.
                                    </p>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email Address"/>
                                    <textarea name="masage" id="masage" placeholder="Message"></textarea>
                                    <button className="btn-one rounded-0 w-100" data-splitting data-text="Submit Now">Submit
                                        Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-four__image wow">
                                <img src={ContactImage1} alt="image"/>
                                <div className="content">
                                    <h4 className="text wow splt-txt" data-splitting>An insightful consulting firm with an
                                        engaged team, providing
                                        solutions that
                                        blend
                                        analytics.</h4>
                                    <div className="info">
                                        <div>
                                            <h5 className="text-white">Robert Fox</h5>
                                            <span className="text-white">Founder & CEO</span>
                                        </div>
                                        <img className="logo" src={ContactLogoImage} alt="logo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-four__brand mt-100">
                        <Swiper {...swiperOptions} className="swiper marqueeSwiper-five__slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage1} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage2} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage3} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage4} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage5} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage1} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>

                    <h5 className="contact-four__brand-text mt-50">2,600 Companies and Individuals Trust Us.
                        <i className="fa-regular fa-chevron-right mx-1"></i> <Link to="#0" className="hover-link-light fw-600">
                            View
                            All
                            Clients</Link>
                    </h5>
                </div>
            </div>
            <div className="contact-four__rectangle">
                <div className="item-one wow"></div>
                <div className="item-two wow"></div>
                <div className="item-three wow"></div>
            </div>
        </section>
    );
}

export default ProjectSection;
