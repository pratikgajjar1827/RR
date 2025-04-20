import React from 'react';
import { Link } from 'react-router-dom';
import ContactImage1 from '../../assets/images/contact/logo.png';
import ContactImage2 from '../../assets/images/contact/contact-eight-image.jpg';
import BrandImage1 from '../../assets/images/brand/contact-brand1.png';
import BrandImage2 from '../../assets/images/brand/contact-brand2.png';
import BrandImage3 from '../../assets/images/brand/contact-brand3.png';
import BrandImage4 from '../../assets/images/brand/contact-brand4.png';
import BrandImage5 from '../../assets/images/brand/contact-brand5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 5,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    },
};

function ContactSection({ className }) {
    return (
        <section id="contacts" className={`contact-four-area mt-130 ${className || ''}`}>
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
                                <form action="#0">
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
                                <img src={ContactImage2} alt="image"/>
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
                                        <img className="logo" src={ContactImage1} alt="logo"/>
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
                                <SwiperSlide className="swiper-slide">
                                    <div className="brand-two__item">
                                        <Link to="#0"><img src={BrandImage2} alt="image"/></Link>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
