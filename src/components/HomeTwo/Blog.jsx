import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import News1 from '../../assets/images/blog/blog-two-image1.jpg';
import News2 from '../../assets/images/blog/blog-two-image2.jpg';
import News3 from '../../assets/images/blog/blog-two-image3.jpg';
import News4 from '../../assets/images/blog/blog-two-image4.jpg';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
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
            slidesPerView: 3,
        },
    },
};

function NewsSection({ className }) {
    return (

        <section id="news" className={`blog-two-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                </div>
                <div className="blog-two__wrp">
                    <Swiper {...swiperOptions} className="swiper blog-two__slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src={News1} alt="image"/>
                                        <img src={News1} alt="image"/>
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Branding</li>
                                            <li className="date">May 15, 2025</li>
                                        </ul>
                                        <h4 className="mt-10"><Link to="/news-details">Creating innovative strategies for
                                                exceptional
                                                future
                                                outcomes.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src={News2} alt="image"/>
                                        <img src={News2} alt="image"/>
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Marketing</li>
                                            <li className="date">May 20, 2025</li>
                                        </ul>
                                        <h4 className="mt-10"><Link to="/news-details">Stratify Agency transforms the way
                                                we work
                                                through the power of AI</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src={News3} alt="image"/>
                                        <img src={News3} alt="image"/>
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Design Trends</li>
                                            <li className="date">May 25, 2025</li>
                                        </ul>
                                        <h4 className="mt-10"><Link to="/news-details">Common UX pinpoints in
                                                Dashboard-related
                                                projects.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="blog-two__item">
                                    <div className="blog__image">
                                        <img src={News4} alt="image"/>
                                        <img src={News4} alt="image"/>
                                    </div>
                                    <div className="blog__content">
                                        <ul>
                                            <li>Branding</li>
                                            <li className="date">May 15, 2025</li>
                                        </ul>
                                        <h4 className="mt-10"><Link to="/news-details">Creating innovative strategies for
                                                exceptional
                                                future
                                                outcomes.</Link>
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
