import React from "react";
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/about/about-eight-image.png'; 
import AboutImage2 from '../../assets/images/bg/about-eight-bg.png'; 

function AboutSection() {
    return (
        <>
        <section id="about" className="about-eight-area pb-130">
            <div className="about-eight__image wow">
                <img className="animation__arryLeftRight" src={AboutImage1} alt="image"/>
            </div>
            <div className="about-eight__bg">
                <img src={AboutImage2} alt="bg-image"/>
            </div>
            <div className="container">
                <div className="about-eight__wrp">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="about-five__wrp">
                                <div className="section-header mb-30">
                                    <h6>ABOUT STRATIFY</h6>
                                    <h2 className="wow splt-txt" data-splitting>we take a collaborative approach, working
                                        closely with each client to understand their opportunities.</h2>
                                </div>
                                <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">With 30 Years
                                    of
                                    Experience</h4>
                                <p className="wow fadeInUp text mt-15" data-wow-delay="200ms" data-wow-duration="1500ms">Our
                                    team of industry experts combines decades of experience across various sectors,
                                    including technology, healthcare,
                                    finance, and retail, to deliver results-driven solutions. We understand the unique
                                    challenges</p>
                                <div className="btn-wrp">
                                    <Link to="/page-about" className="btn-one wow fadeInUp mt-50" data-wow-delay="300ms"
                                        data-wow-duration="1500ms" data-splitting data-text="Discover More">Discover
                                        More</Link>
                                    <Link to="/contact" className="btn-two wow fadeInUp mt-50" data-wow-delay="400ms"
                                        data-wow-duration="1500ms" data-splitting data-text="Contact Us">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default AboutSection;
