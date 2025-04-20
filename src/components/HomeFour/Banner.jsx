import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Importing images correctly
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
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  navigation:{
    clickable: true,
    prevEl: ".project__arry-prev",
    nextEl: ".project__arry-next",
},
  loop: true,
  breakpoints : {
    320: {
        slidesPerView: 1,
    },
    575: {
        slidesPerView: 2,
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
}
};

// Correct slide data with imported images
const slides = [
  { id: "tab-1", title: "Financial Advices", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image1 },
  { id: "tab-2", title: "Business Report", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image2 },
  { id: "tab-3", title: "Startup Plan", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image3 },
  { id: "tab-4", title: "Investment Plan", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image4 },
  { id: "tab-5", title: "Visit Home", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image5 },
  { id: "tab-6", title: "Initial Computer", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image6 },
  { id: "tab-7", title: "Design Process", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image7 },
  { id: "tab-8", title: "Assembly Home", text: "Business reports provide factual information on specific topics such as performance evaluations.", image: Image8 },
];

const Slider = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <section id="home" className="banner-four-area">
      <div className="project__wrp">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide" onMouseEnter={() => setActiveTab(slide.id)}>
              <Link to="/page-project-details" className="project__item banner-four__item">
                <div className="content">
                  <span>{`${slide.id.split("-")[1]}`}<sup>/08</sup></span>
                  <h4>{slide.title}</h4>
                  <p className="text">{slide.text}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </section>
  );
};

export default Slider;
