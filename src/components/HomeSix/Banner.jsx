import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerBgImage1 from '../../assets/images/banner/banner-six-bg.jpg';
import BannerBgImage2 from '../../assets/images/banner/banner-six-bg2.jpg';
import BannerBgImage3 from '../../assets/images/banner/banner-six-bg3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
};


function Slider() {


    return (
        <>
        <section className="banner-six-area">
            <Swiper {...swiperOptions} className="swiper banner-six__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide  className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(${BannerBgImage1})` }}/>
                        <div className="banner-six__content">
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Protect What Matters with
                                Expert Insurance Consultation Now</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We a group of design company
                                that amplify creativity from brands and
                                design to
                                marketing and digital strategies.</p>
                            <Link to="/page-about" className="arry-btn" data-animation="fadeInUp" data-delay="1s"><i
                                    className="fa-thin fa-arrow-up-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(${BannerBgImage2})` }}/>
                        <div className="banner-six__content">
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Protect What Matters with
                                Expert Insurance Consultation Now</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We a group of design company
                                that amplify creativity from brands and
                                design to
                                marketing and digital strategies.</p>
                            <Link to="/page-about" className="arry-btn" data-animation="fadeInUp" data-delay="1s"><i
                                    className="fa-thin fa-arrow-up-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slide-bg" style={{ backgroundImage: `url(${BannerBgImage3})` }}/>
                        <div className="banner-six__content">
                            <h1 className="title" data-animation="fadeInUp" data-delay=".3s">Protect What Matters with
                                Expert Insurance Consultation Now</h1>
                            <p className="text" data-animation="fadeInUp" data-delay=".5s">We a group of design company
                                that amplify creativity from brands and
                                design to
                                marketing and digital strategies.</p>
                            <Link to="/page-about" className="arry-btn" data-animation="fadeInUp" data-delay="1s"><i
                                    className="fa-thin fa-arrow-up-right"></i></Link>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>

        </>
    )
}
export default Slider;
