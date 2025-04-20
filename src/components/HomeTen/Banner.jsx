import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import BannerBgImage1 from '../../assets/images/banner/banner-ten-image1.jpg';
import BannerBgImage2 from '../../assets/images/banner/banner-ten-image2.jpg';
import BannerBgImage3 from '../../assets/images/banner/banner-ten-image3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};

function BannerSection() {
     const [isOpen, setOpen] = useState(false);
    return (
        <section id="home" className="banner-ten-area">
            <div className="swiper banner-ten__slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(${BannerBgImage1})` }}/>
                        <div className="banner-ten__content">
                            <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">Welcome to Stratify
                            </h5>
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Grow Your Brand with Expert
                                Marketing Strategies!</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We infuse every client
                                relationship with a fresh, dynamic perspective, fuelled by an unwavering energy that
                                drives
                                action.</p>
                            <div className="btns mt-40">
                                <Link to="/page-about" className="btn-one" data-splitting
                                    data-animation="fadeInUp" data-delay=".8s">Get Started<i
                                        className="fa-regular fs-14 fa-angle-right"></i></Link>
                                <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                    <a className="video-popup" onClick={() => setOpen(true)}><i
                                            className="fa-solid fa-play"></i></a>
                                    <h5>Watch IT Videos</h5>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(${BannerBgImage2})` }}/>
                        <div className="banner-ten__content">
                            <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">Welcome to Stratify
                            </h5>
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Grow Your Brand with Expert
                                Marketing Strategies!</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We infuse every client
                                relationship with a fresh, dynamic perspective, fuelled by an unwavering energy that
                                drives
                                action.</p>
                            <div className="btns mt-40">
                                <Link to="/page-about" className="btn-one" data-splitting
                                    data-animation="fadeInUp" data-delay=".8s">Get Started<i
                                        className="fa-regular fs-14 fa-angle-right"></i></Link>
                                <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                    <a className="video-popup" onClick={() => setOpen(true)}><i
                                            className="fa-solid fa-play"></i></a>
                                    <h5>Watch IT Videos</h5>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(${BannerBgImage3})` }}/>
                        <div className="banner-ten__content">
                            <h5 className="text-uppercase" data-animation="fadeInUp" data-delay=".1s">Welcome to Stratify
                            </h5>
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Grow Your Brand with Expert
                                Marketing Strategies!</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We infuse every client
                                relationship with a fresh, dynamic perspective, fuelled by an unwavering energy that
                                drives
                                action.</p>
                            <div className="btns mt-40">
                                <Link to="/page-about" className="btn-one" data-splitting
                                    data-animation="fadeInUp" data-delay=".8s">Get Started<i
                                        className="fa-regular fs-14 fa-angle-right"></i></Link>
                                <div className="play-btn" data-animation="fadeInUp" data-delay="1s">
                                    <a className="video-popup" onClick={() => setOpen(true)}><i
                                            className="fa-solid fa-play"></i></a>
                                    <h5>Watch IT Videos</h5>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default BannerSection;
