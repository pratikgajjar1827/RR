import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/about/about-two-image.jpg'; 

function AboutSection({ className }) {

    return (
        <section id="about" className={`about-two-area bg-sub pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="about-two-left">
                            <div className="section-header mb-50">
                                <h6>ABOUT STRATIFY</h6>
                                <h2 className="wow splt-txt" data-splitting>We work with you to Make your <br />
                                    Vision a Reality</h2>
                            </div>
                            <div className="about-two__image wow gsap__parallax">
                                <img src={AboutImage1} alt="image"/>
                                <div className="about-two__rectangle">
                                    <div className="item-one wow"></div>
                                    <div className="item-two wow"></div>
                                    <div className="item-three wow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two-right">
                            <div className="section-header mb-40">
                                <h2 className="wow splt-txt" data-splitting>We offer solutions that create Significant
                                    opportunities for the growth of your business.</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Being a
                                    prominent retail digital marketing company, we offer a variety of services to
                                    retail brands. We help our clients
                                    create strategic and highly effective retail marketing strategies. Results oriented
                                    retail digital marketing campaigns.</p>
                            </div>
                            <div className="about-two__content">
                                <ul className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <li><i className="fa-light fa-check"></i>Strategic Analysis for Businesses</li>
                                    <li><i className="fa-light fa-check"></i>24/7 Support at Any Time</li>
                                    <li><i className="fa-light fa-check"></i>Exceptional Atmosphere</li>
                                    <li><i className="fa-light fa-check"></i>Complimentary Breakfast</li>
                                </ul>
                                <ul className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <li><i className="fa-light fa-check"></i>Orientation for Business</li>
                                    <li><i className="fa-light fa-check"></i>No Booking Fees</li>
                                    <li><i className="fa-light fa-check"></i>Exceptional Atmosphere</li>
                                    <li><i className="fa-light fa-check"></i>Analyze the Problems You are Facing</li>
                                </ul>
                            </div>
                            <Link to="/page-about" className="btn-one mt-50 wow fadeInUp" data-wow-delay="400ms"
                                data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover
                                More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
