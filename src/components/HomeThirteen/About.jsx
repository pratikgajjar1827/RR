import React from 'react'; 
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/about/about-thirteen-image1.jpg'; 
import AboutImage2 from '../../assets/images/about/about-thirteen-image2.jpg'; 
import AboutImage3 from '../../assets/images/about/about-thirteen-image3.jpg'; 

function AboutSection({ className }) {
    return (
        <section id="about" className={`about-thirteen-area bg-sub pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="row g-0 g-lg-5">
                    <div className="col-xl-6">
                        <div className="about-thirteen__image">
                            <div className="row g-4 justify-content-center">
                                <div className="col-6">
                                    <img className="wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms"
                                        src={AboutImage1} alt="image"/>
                                </div>
                                <div className="col-6">
                                    <img className="wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms"
                                        src={AboutImage2} alt="image"/>
                                </div>
                                <div className="col-6 wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <img className="image-last" src={AboutImage3}
                                        alt="image"/>
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
                                <ul className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <li><i className="fa-light fa-check"></i>Strategic Analysis for Businesses</li>
                                    <li><i className="fa-light fa-check"></i>24/7 Support at Any Time</li>
                                    <li><i className="fa-light fa-check"></i>Exceptional Atmosphere</li>
                                    <li><i className="fa-light fa-check"></i>Complimentary Breakfast</li>
                                </ul>
                                <ul className="wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <li><i className="fa-light fa-check"></i>Orientation for Business</li>
                                    <li><i className="fa-light fa-check"></i>No Booking Fees</li>
                                    <li><i className="fa-light fa-check"></i>Exceptional Atmosphere</li>
                                    <li><i className="fa-light fa-check"></i>Analyze the Problems You are Facing</li>
                                </ul>
                            </div>
                            <Link to="/page-about" className="btn-one wow fadeInDown mt-50" data-wow-delay="400ms"
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
