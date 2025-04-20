import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import TestimonialsImage1 from '../../assets/images/testimonial/testimonial-ten-image.jpg';
import TestimonialsBgImage from '../../assets/images/bg/testimonial-ten-bg.jpg';
import TestiThumb1 from '../../assets/images/testimonial/testimonial-ten1.png';
import TestiThumb2 from '../../assets/images/testimonial/testimonial-ten2.png';
import TestiThumb3 from '../../assets/images/testimonial/testimonial-ten3.png';
import TestiThumb4 from '../../assets/images/testimonial/testimonial-ten4.png';
import TestiInfoImage from '../../assets/images/testimonial/testimonial-ten-info.png';

function TestimonialSectionTen({ className }) {
    const swiperOptions = {
        modules: [Autoplay, Thumbs, Pagination],
        slidesPerView: 1,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination:{
            clickable: true,
            el:".swiper__dots",
        },
    };

    return (



<section className={`testimonial-ten-aera ${className || ''}`}>
    <div className="row g-0">
        <div className="col-xl-4">
            <div className="testimonial-ten__image">
                <img src={TestimonialsImage1} alt="image"/>
            </div>
        </div>
        <div className="col-xl-8">
            <div className="testimonial-ten-right" style={{ backgroundImage: `url(${TestimonialsBgImage})` }}>
                <div className="swiper testimonial-ten__slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-ten__item">
                                <p className="text">
                                    “ Im so happy with the team at Stratify Business Consulting!! The entire
                                    staff is so
                                    welcoming, professional and are all
                                    outstanding advocates. I’m especially grateful for my handling attorney,
                                    Matt Khan.
                                    Since day one he provided positive,
                                    hopeful yet realistic assurances, regarding my case. My motor vehicle
                                    collision was
                                    truly
                                    a life altering and devastating interruption in my life ”
                                </p>
                                <div className="info">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={TestiThumb1} alt="image"/>
                                        <div>
                                            <h5>Kourtney Holland</h5>
                                            <span className="fs-14">CEO & Founder</span>
                                        </div>
                                    </div>
                                    <img src={TestiInfoImage} alt="image"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-ten__item">
                                <p className="text">
                                    “ Im so happy with the team at Stratify Business Consulting!! The entire
                                    staff is so
                                    welcoming, professional and are all
                                    outstanding advocates. I’m especially grateful for my handling attorney,
                                    Matt Khan.
                                    Since day one he provided positive,
                                    hopeful yet realistic assurances, regarding my case. My motor vehicle
                                    collision was
                                    truly
                                    a life altering and devastating interruption in my life ”
                                </p>
                                <div className="info">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={TestiThumb2} alt="image"/>
                                        <div>
                                            <h5>Madison Loren</h5>
                                            <span className="fs-14">Chief Executive</span>
                                        </div>
                                    </div>
                                    <img src={TestiInfoImage} alt="image"/>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-ten__item">
                                <p className="text">
                                    “ Im so happy with the team at Stratify Business Consulting!! The entire
                                    staff is so
                                    welcoming, professional and are all
                                    outstanding advocates. I’m especially grateful for my handling attorney,
                                    Matt Khan.
                                    Since day one he provided positive,
                                    hopeful yet realistic assurances, regarding my case. My motor vehicle
                                    collision was
                                    truly
                                    a life altering and devastating interruption in my life ”
                                </p>
                                <div className="info">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={TestiThumb3} alt="image"/>
                                        <div>
                                            <h5>Esther Howard</h5>
                                            <span className="fs-14">CEO & Founder</span>
                                        </div>
                                    </div>
                                    <img src={TestiInfoImage} alt="image"/>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-ten__item">
                                <p className="text">
                                    “ Im so happy with the team at Stratify Business Consulting!! The entire
                                    staff is so
                                    welcoming, professional and are all
                                    outstanding advocates. I’m especially grateful for my handling attorney,
                                    Matt Khan.
                                    Since day one he provided positive,
                                    hopeful yet realistic assurances, regarding my case. My motor vehicle
                                    collision was
                                    truly
                                    a life altering and devastating interruption in my life ”
                                </p>
                                <div className="info">
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={TestiThumb4} alt="image"/>
                                        <div>
                                            <h5>Jenny Wilson</h5>
                                            <span className="fs-14">Web Designer</span>
                                        </div>
                                    </div>
                                    <img src={TestiInfoImage} alt="image"/>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper__dots testimonial-ten__dot"/>
            </div>
        </div>
    </div>
</section>
    );
}

export default TestimonialSectionTen;