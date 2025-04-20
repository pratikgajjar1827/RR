import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/bg/about-six-bg.png'; 
import AboutImage2 from '../../assets/images/about/about-six-image.png'; 
import AboutImage3 from '../../assets/images/about/about-six-sing.png'; 


function AboutSection({ className }) {

    return (
        <section id="about" className={`about-six-area ${className || ''}`}>
            <div className="about-six__bg">
                <img src={AboutImage1} alt="image"/>
            </div>
            <div className="container">
                <div className="about-six__wrp">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-six__image">
                                <img className="bounceInLeft wow animation__arryLeftRight"
                                    src={AboutImage2} alt="image"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-six__item">
                                <div className="section-header">
                                    <h6>About STRATIFY</h6>
                                    <h2 className="wow splt-txt" data-splitting>Experts in Providing Investment
                                        Consulting Services</h2>
                                    <p>At Stratify Business Consulting, we have built a network of dedicated
                                        professionals
                                        (consultants, analysts, strategists, and industry experts) who are passionate
                                        about
                                        delivering exceptional business solutions in an innovative</p>
                                </div>
                                <p className="text">Our culture fosters and strives for innovation, creativity, and business
                                    expertise,
                                    with a strong client-cantered focus. Every day, we cultivate an entrepreneurial
                                    environment that is both flexible and supportive.</p>
                                <p className="text">Call us 24/7. Let’s start fighting together.</p>
                                <h4 className="number">
                                    <a href="tel:3333-000-000" className="hover-link">3333-000-000</a>
                                    <span>Or</span>
                                    <a href="tel:3333-000-000" className="hover-link">3333-000-000</a>
                                </h4>
                                <div className="info">
                                    <img src={AboutImage3} alt="sing-image"/>
                                    <div>
                                        <h6>Harry Oliver,</h6>
                                        <p>CEO of Stratify Business Consulting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
