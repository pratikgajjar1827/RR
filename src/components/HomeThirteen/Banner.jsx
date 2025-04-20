import React from 'react';
import { Link } from 'react-router-dom';
import BannerBgImage1 from '../../assets/images/banner/banner-thirteen-bg.jpg';
import BannerImage2 from '../../assets/images/banner/banner-thirteen-image.png';
import BannerImage3 from '../../assets/images/banner/banner-thirteen-info1.png';
import BannerImage4 from '../../assets/images/banner/banner-thirteen-arry.png';
import BannerImage5 from '../../assets/images/banner/banner-thirteen-info2.png';
import BannerImage6 from '../../assets/images/banner/banner-three-text.png';

function BannerSection() {
    return (
        <section className="banner-thirteen-area paralax__animation"
        style={{ backgroundImage: `url(${BannerBgImage1})` }}>
            <div className="banner-thirteen__wrp">
                <div className="banner-thirteen__content">
                    <h1 className="title wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">Secure the Future
                        with Expert Financial Guidance!</h1>
                    <p className="text wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">We infuse every
                        client relationship with a fresh, dynamic perspective, fuelled by an
                        unwavering energy that drives
                        action.</p>
                    <Link to="/contact" className="btn-two-light wow fadeInDown mt-50" data-wow-delay="400ms"
                        data-wow-duration="1500ms" data-splitting data-text="Let’s Connect">Let’s Connect</Link>
                </div>
            </div>
            <div className="banner-thirteen__image">
                <img data-depth="0.01" className="bounceInRight wow" src={BannerImage2}
                    alt="image"/>
                <div data-depth="0.03" className="info1">
                    <img src={BannerImage3} alt="image"/>
                    <div className="arry">
                        <img className="animation__arryLeftRight" src={BannerImage4}
                            alt="image"/>
                    </div>
                </div>
                <div data-depth="0.05" className="info2">
                    <img src={BannerImage5} alt="image"/>
                </div>
            </div>
            <div className="banner-thirteen__text wow">
                <img src={BannerImage6} alt="image"/>
            </div>
        </section>
    );
}

export default BannerSection;
