import React from 'react';
import { Link } from 'react-router-dom';
import SlideImage1 from '../../assets/images/banner/banner-two-info1.png'; 
import SlideImage2 from '../../assets/images/banner/banner-two-info2.png'; 
import SlideImage3 from '../../assets/images/banner/banner-two-info3.png'; 
import BannerBgImage from '../../assets/images/banner/banner-two-bg.jpg';
import BannerBgImage2 from '../../assets/images/banner/banner-two-image.png';
;

function BannerSection() {
    return (
        <section id="home" className="banner-two-area paralax__animation" style={{ backgroundImage: `url(${BannerBgImage})` }}>
        <div className="banner-two__wrp">
            <div className="banner-two__content">
                <h1 className="title wow splt-txt-bounce" data-splitting>Grow Your Brand with Expert Marketing
                    Strategies!</h1>
                <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We bring a fresh,
                    dynamic perspective to every client relationship, driven by a
                    relentless energy
                    that sparks action.</p>
                <Link to="/page-about" className="arry-btn"><i className="fa-light wow fadeInLeft fa-arrow-right"
                        data-wow-delay="500ms" data-wow-duration="1500ms"></i></Link>
            </div>
        </div>
        <div className="banner-two__image ">
            <img className="animation__arryLeftRight" src={BannerBgImage2} alt="image"/>
            <div className="info1">
                <img data-depth="0.03" src={SlideImage1} alt="image"/>
            </div>
            <div className="info2">
                <img data-depth="0.05" src={SlideImage2} alt="image"/>
            </div>
            <div className="info3">
                <img className="animation__rotate" src={SlideImage3} alt="image"/>
            </div>
        </div>
    </section>
    );
}

export default BannerSection;
