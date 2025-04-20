import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import images
import Image1 from '../../assets/images/project/1.jpg';
import Image2 from '../../assets/images/project/2.jpg';
import Image3 from '../../assets/images/project/3.jpg';
import Image4 from '../../assets/images/project/4.jpg';
import Image5 from '../../assets/images/project/5.jpg';
import Image6 from '../../assets/images/project/6.jpg';
import Image7 from '../../assets/images/project/7.jpg';
import Image8 from '../../assets/images/project/8.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 4,
        },
    },
};


const slides = [
  { id: "tab-1", subtitle:"01", title: "FWe’ll Visit You at Home", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image1 },
  { id: "tab-2", subtitle:"02", title: "Initial computer Designs", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image2 },
  { id: "tab-3", subtitle:"03", title: "Start the in-depth design process", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image3 },
  { id: "tab-4", subtitle:"04", title: "Assembly Home", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image4 },
  { id: "tab-5", subtitle:"05", title: "We’ll Visit You at Home", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image5 },
  { id: "tab-6", subtitle:"06", title: "Initial computer Designs", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image6 },
  { id: "tab-7", subtitle:"07", title: "Start the in-depth design process", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image7 },
  { id: "tab-8", subtitle:"08", title: "Assembly Home", text: "We specialize in serving industries like healthcare, Computer Design.", image: Image8 },
];

function ProjectSlider({ className }) {
    const [activeTab, setActiveTab] = useState("tab-1");
    const [activeIndex, setActiveIndex] = useState(2);
    const handleOnClick = (index) => { setActiveIndex(index);
            };
    return (
        <section id="project" className={`project-area pt-130 ${className || ''}`}>
            <div className="container">
                <div className="section-header__flex mb-50">
                    <div>
                        <h6>HOW WE WORKS</h6>
                        <h2 className="wow splt-txt" data-splitting>4 Easy Steps to Achieve <br /> Your Business Goal</h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Contrary to popular
                        belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature
                        from 45 BC, making it over 2000 years old.</p>
                </div>
            </div>
                <div className="project__wrp">
                    <Swiper {...swiperOptions} className="swiper project__slider">
                        <div className="swiper-wrapper">
                            {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className="swiper-slide" onMouseEnter={() => setActiveTab(slide.id)}>
                                <Link to="/page-project-details" className="project__item">
                                    <div className="content">
                                        <span>{slide.subtitle}</span>
                                        <h4>{slide.title}</h4>
                                        <p>{slide.text}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <div className="project__slider-arrys">
                        <button className="project__arry-prev"><i className="fa-regular fa-arrow-left"></i></button>
                        <button className="project__arry-next"><i className="fa-regular fa-arrow-right"></i></button>
                    </div>
                <div className="project__image">
                {slides.map((slide) => (
                    <img
                        key={slide.id}
                        className={`tab-img ${activeTab === slide.id ? "active" : ""}`}
                        src={slide.image}
                        alt={slide.title}
                    />
                ))}
                </div>
                </div>
        </section>
    );
}

export default ProjectSlider;