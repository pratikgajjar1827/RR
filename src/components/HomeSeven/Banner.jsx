import React from 'react';
import { Link } from 'react-router-dom';
import SlideImage1 from '../../assets/images/banner/banner-seven-image.png';  
import BannerBgImage from '../../assets/images/banner/banner-seven-bg.jpg';
;

function BannerSection() {
    return (
        <section className="banner-seven-area" style={{ backgroundImage: `url(${BannerBgImage})` }}>
            <div className="banner-seven__wrp">
                <div className="banner-seven__content">
                    <h1 className="title wow splt-txt-bounce" data-splitting>Decarbonize & optimize
                        your business with
                        autonomous AI</h1>
                    <Link to="/page-about" className="arry-btn"><i className="fa-thin fa-arrow-right wow fadeInLeft"
                            data-wow-delay="500ms" data-wow-duration="1500ms"></i></Link>
                </div>
            </div>
            <div className="banner-seven__image">
                <img className="wow fadeInUpBig" src={SlideImage1} alt="image"/>
                <div className="text1">
                    Stratify
                </div>
                <div className="text2">
                    BUSINESS
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
