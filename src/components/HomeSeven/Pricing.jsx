import React from 'react';
import { Link } from 'react-router-dom';
import PricingImage1 from '../../assets/images/icon/popular-tag.png';

function PricingSection({ className }) {
    return (
        <section className={`pricing-seven-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="pricing-five__wrp">
                    <div className="section-header text-center mb-50">
                        <h6>PRICING PLANS</h6>
                        <h2 className="wow splt-txt" data-splitting>Choose the Pricing plan</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xxl-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing-seven__item">
                                <div className="head">
                                    <h4>BASIC PLAN</h4>
                                </div>
                                <div className="price mt-20 mb-30">
                                    <h2>$15 <span>/per month</span></h2>
                                    <span className="mt-20">We are at the forefront of technological
                                        innovation, dedicated to providing</span>
                                </div>

                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Unlimited Project</li>
                                    <li><i className="fa-solid fa-check"></i> Power And Predictive Dialing</li>
                                    <li><i className="fa-solid fa-check"></i> Quality & Customer Experience</li>
                                    <li className="disable"><i className="fa-solid fa-xmark"></i> Try for free, forever!</li>
                                    <li className="disable"><i className="fa-solid fa-xmark"></i> 24/7 phone and email support
                                    </li>
                                </ul>

                                <Link to="/page-pricing" className="pricing-btn mt-40">Choose Package <i
                                        className="fa-regular fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="pricing-seven__item popular">
                                <div className="popular-tag"><img src={PricingImage1} alt="image"/>
                                </div>
                                <div className="head">
                                    <h4 className="text-white">STANDARD PLAN</h4>
                                </div>
                                <div className="price mt-20 mb-30">
                                    <h2 className="text-white">$99 <span className="text-white">/per month</span></h2>
                                    <span className="text-white mt-20">We are at the forefront of technological
                                        innovation, dedicated to providing</span>
                                </div>

                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Unlimited Project</li>
                                    <li><i className="fa-solid fa-check"></i> Power And Predictive Dialing</li>
                                    <li><i className="fa-solid fa-check"></i> Quality & Customer Experience</li>
                                    <li><i className="fa-solid fa-check"></i> Try for free, forever!</li>
                                    <li className="disable"><i className="fa-solid fa-xmark"></i> 24/7 phone and email support
                                    </li>
                                </ul>

                                <Link to="/page-pricing" className="pricing-btn mt-40">Choose Package <i
                                        className="fa-regular fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="pricing-seven__item">
                                <div className="head">
                                    <h4>PREMIUM PLAN</h4>
                                </div>
                                <div className="price mt-20 mb-30">
                                    <h2>$99 <span>/per month</span></h2>
                                    <span className="mt-20">We are at the forefront of technological
                                        innovation, dedicated to providing</span>
                                </div>

                                <ul>
                                    <li><i className="fa-solid fa-check"></i> Unlimited Project</li>
                                    <li><i className="fa-solid fa-check"></i> Power And Predictive Dialing</li>
                                    <li><i className="fa-solid fa-check"></i> Quality & Customer Experience</li>
                                    <li><i className="fa-solid fa-check"></i> Try for free, forever!</li>
                                    <li><i className="fa-solid fa-check"></i> 24/7 phone and email support
                                    </li>
                                </ul>


                                <Link to="/page-pricing" className="pricing-btn mt-40">Choose Package <i
                                        className="fa-regular fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
