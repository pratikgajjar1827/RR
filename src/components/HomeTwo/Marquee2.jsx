import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MarqueeImage1 from '../../assets/images/brand/brand-image1.png';
import MarqueeImage2 from '../../assets/images/brand/brand-image2.png';
import MarqueeImage3 from '../../assets/images/brand/brand-image3.png';
import MarqueeImage4 from '../../assets/images/brand/brand-image4.png';
import MarqueeImage5 from '../../assets/images/brand/brand-image5.png';
import MarqueeImage6 from '../../assets/images/brand/brand-image6.png';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
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
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 6,
        },
    },
};

function MarqueeSection({ className }) {

    return (
        <>
            <div className={`marqueeSwiper-area brand-two-area pt-100 pb-100 ${className || ''}`}>
                <div className="container">
                    <Swiper {...swiperOptions} className="swiper marqueeSwiper__slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={MarqueeImage1} alt="icon"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={MarqueeImage2} alt="icon"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={MarqueeImage3} alt="icon"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={MarqueeImage4} alt="icon"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={MarqueeImage5} alt="icon"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item">
                                    <img src={MarqueeImage6} alt="icon"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-two__item"> 
                                    <img src={MarqueeImage1} alt="icon"/>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default MarqueeSection;
