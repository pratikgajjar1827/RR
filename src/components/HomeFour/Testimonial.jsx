import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import TestimonialsMapImage from '../../assets/images/shape/testimonial-four-map.png';
import TestimonialsReviewImage from '../../assets/images/testimonial/testimonial-four-review.png';
import TestiThumb1 from '../../assets/images/testimonial/testimonial-four-image1.png';
import TestiThumb2 from '../../assets/images/testimonial/testimonial-four-image2.png';
import TestiThumb3 from '../../assets/images/testimonial/testimonial-four-image3.png';
import TestiThumb4 from '../../assets/images/testimonial/testimonial-four-image4.png';

function TestimonialSection({ className }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperOptions = {
        modules: [Autoplay, Thumbs, Navigation],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined, // Ensure swiper is initialized
        navigation:{
            clickable: true,
            prevEl: ".testimonial-four__arry-prev",
            nextEl: ".testimonial-four__arry-next",
        },
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
                slidesPerView: 4,
            },
        },
    };

    return (
        <section className={`testimonial-four-area bg-sub pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="testimonial-four__wrp">
                    <div className="section-header__flex mb-50">
                        <div>
                            <h2 className="wow splt-txt" data-splitting>What Our Customers Says?</h2>
                            <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our success lies in
                                achieving over 99% customer satisfaction.</p>
                        </div>
                        <div className="arry__wrp wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <button className="testimonial-four__arry-prev arry-prev"><i
                                    className="fa-light fa-chevron-left"></i></button>
                            <button className="testimonial-four__arry-next arry-next"><i
                                    className="fa-light fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <Swiper {...swiperOptions} className="swiper testimonial-four__slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src={TestiThumb1}
                                                alt="image"/>
                                            <div>
                                                <h5>Jenny Wilson</h5>
                                                <span>Director your company</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support,
                                        working
                                        closely with your organization to ensure a
                                        comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src={TestiThumb2}
                                                alt="image"/>
                                            <div>
                                                <h5>Jacob Jones</h5>
                                                <span>Medical Assistant</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i> 4.2
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support,
                                        working
                                        closely with your organization to ensure a
                                        comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src={TestiThumb3}
                                                alt="image"/>
                                            <div>
                                                <h5>Albert Flores</h5>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support,
                                        working
                                        closely with your organization to ensure a
                                        comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src={TestiThumb4}
                                                alt="image"/>
                                            <div>
                                                <h5>Darrell Steward</h5>
                                                <span>Marketing Coordinator</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i> 4.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support,
                                        working
                                        closely with your organization to ensure a
                                        comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-four__item">
                                    <div className="item-head">
                                        <div className="info">
                                            <img src={TestiThumb1}
                                                alt="image"/>
                                            <div>
                                                <h5>Jenny Wilson</h5>
                                                <span>Director your company</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-star"></i> 5.0
                                        </div>
                                    </div>
                                    <p className="mt-30">Our consultants offer top-notch advice and technical support,
                                        working
                                        closely with your organization to ensure a
                                        comprehensive understanding of your needs.</p>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <div className="testimonial-four__review wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h5>Check all <span className="fw-600">5000+</span> Exclusive visitor reviews on</h5>
                    <img src={TestimonialsReviewImage} alt="icon"/>
                </div>
            </div>
            <div className="testimonial-four__map">
                <img src={TestimonialsMapImage} alt="map-shape"/>
            </div>
        </section>
    );
}

export default TestimonialSection;