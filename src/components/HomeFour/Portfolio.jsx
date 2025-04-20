import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioImage1 from '../../assets/images/protfolio/portfolio-image1.jpg'; 
import PortfolioImage2 from '../../assets/images/protfolio/portfolio-image2.jpg'; 
import PortfolioImage3 from '../../assets/images/protfolio/portfolio-image3.jpg'; 
import PortfolioImage4 from '../../assets/images/protfolio/portfolio-image4.jpg'; 

function AboutSection({ className }) {

    return (
        <section id="project" className={`portfolio-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="row g-5 justify-content-between">
                    <div className="col-lg-6 col-xxl-4">
                        <div className="portfolio-left">
                            <div className="section-header">
                                <h6>OUR PORTFOLIO</h6>
                                <h2 className="wow splt-txt" data-splitting>Conduct market research to understand industry
                                    Quality workload.</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with
                                    Stratify-Tax/VAT ensures your books are accurate and updated in
                                    real-time, giving you peace of mind.</p>
                            </div>
                            <Link to="/page-portfolio" className="btn-one wow fadeInUp mt-50" data-wow-delay="200ms"
                                data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-6">
                        <div className="porfolio-right">
                            <div className="portfolio__item mb-30">
                                <div className="image">
                                    <img src={PortfolioImage1} alt="image"/>
                                </div>
                                <div className="content">
                                    <span className="number">01</span>
                                    <h4 className="title"><Link to="/page-portfolio-details">Organizational Culture &
                                            Leadership Alignment</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="portfolio__item mb-30">
                                <div className="image">
                                    <img src={PortfolioImage2} alt="image"/>
                                </div>
                                <div className="content">
                                    <span className="number">02</span>
                                    <h4 className="title"><Link to="/page-portfolio-details">Strategic Planning & <br />
                                            Development</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="portfolio__item mb-30">
                                <div className="image">
                                    <img src={PortfolioImage3} alt="image"/>
                                </div>
                                <div className="content">
                                    <span className="number">03</span>
                                    <h4 className="title"><Link to="/page-portfolio-details">Operational Efficiency
                                            <br /> Optimization</Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <div className="image">
                                    <img src={PortfolioImage4} alt="image"/>
                                </div>
                                <div className="content">
                                    <span className="number">04</span>
                                    <h4 className="title"><Link to="/page-portfolio-details">Tailored Consulting
                                            Solutions & Advisory Services</Link>
                                    </h4>
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
