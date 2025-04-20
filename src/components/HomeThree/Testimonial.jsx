import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import TestimonialsImage1 from '../../assets/images/icon/five-star.png';
import TestiThumb1 from '../../assets/images/testimonial/testimonial-three-image1.png';
import TestiThumb2 from '../../assets/images/testimonial/testimonial-three-image2.png';
import TestiThumb3 from '../../assets/images/testimonial/testimonial-three-image3.png';

function TestimonialSectionThree({ className }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
const swiperOptions = {
    modules: [Autoplay, Thumbs, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined, // Ensure swiper is initialized
    navigation:{
        clickable: true,
        prevEl: ".testimonial-three__arry-prev",
        nextEl: ".testimonial-three__arry-next",
    },
};

    return (
        <section className={`testimonial-three-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h2 className="wow splt-txt" data-splitting>Feedback From Clients</h2>
                </div>
                <div className="testimonial-three__wrp">
                    <Swiper {...swiperOptions} className="swiper testimonial-three__slider">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__item">
                                    <img src={TestimonialsImage1} alt="icon"/>
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
                                        to build my
                                        own
                                        remote team. Now, I have
                                        full control over the team, allowing
                                        them to work from home, no matter where they are located.</p>
                                    <div className="info">
                                        <h5>Cameron Williamson</h5>
                                        <span>Business Owner</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__item">
                                    <img src={TestimonialsImage1} alt="icon"/>
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
                                        to build my
                                        own
                                        remote team. Now, I have
                                        full control over the team, allowing
                                        them to work from home, no matter where they are located.</p>
                                    <div className="info">
                                        <h5>Ronald Richards</h5>
                                        <span>Web Desgner</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__item">
                                    <img src={TestimonialsImage1} alt="icon"/>
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
                                        to build my
                                        own
                                        remote team. Now, I have
                                        full control over the team, allowing
                                        them to work from home, no matter where they are located.</p>
                                    <div className="info">
                                        <h5>Savannah Nguyen</h5>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__item">
                                    <img src={TestimonialsImage1} alt="icon"/>
                                    <p>We've had negative experiences with call centres through Stratify, so I decided
                                        to build my
                                        own
                                        remote team. Now, I have
                                        full control over the team, allowing
                                        them to work from home, no matter where they are located.</p>
                                    <div className="info">
                                        <h5>Cameron Williamson</h5>
                                        <span>Business Owner</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <Swiper onSwiper={setThumbsSwiper} // Set the swiper instance
                        slidesPerView={3}
                        spaceBetween={20}
                        watchSlidesProgress={true} // Track slides for syncing
                        breakpoints={{
                            0: {
                            direction: "horizontal"
                            },
                            768: {
                            direction: "horizontal"
                            }
                        }} className="swiper testimonial-three__slider-thumb">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src={TestiThumb1} alt="image"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src={TestiThumb2} alt="image"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src={TestiThumb3} alt="image"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial-three__image">
                                    <img src={TestiThumb1} alt="image"/>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <button className="testimonial-three__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                    <button className="testimonial-three__arry-next"><i className="fa-light fa-chevron-right"></i></button>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSectionThree;