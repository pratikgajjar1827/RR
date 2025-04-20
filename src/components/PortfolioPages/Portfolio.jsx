import React from 'react';
import { Link } from 'react-router-dom';
import ChooseImage1 from '../../assets/images/protfolio/portfolio-eight-image1.jpg';
import ChooseImage2 from '../../assets/images/protfolio/portfolio-eight-image2.jpg';
import ChooseImage3 from '../../assets/images/protfolio/portfolio-eight-image3.jpg';
import ChooseImage4 from '../../assets/images/protfolio/portfolio-eight-image4.jpg';
import ChooseImage5 from '../../assets/images/protfolio/portfolio-eight-image5.jpg';
import ChooseImage6 from '../../assets/images/protfolio/portfolio-eight-image6.jpg';
function Portfolio() {
    return (
        <>
        <section id="project" className="portfolio-eight-area pt-130 pb-130">
            <div className="container">
                <div className="portfolio-eight__wrp">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="portfolio-eight__item item-one">
                                <Link to="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long"></i></Link>
                                <div className="image wow">
                                    <img src={ChooseImage2} alt="image"/>
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        to="/page-portfolio-details">Sophisticated
                                        Marketing
                                        Studio</Link>
                                </h4>
                                <h5 className="text-white">Marketing</h5>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="portfolio-eight__item item-two">
                                <Link to="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long"></i></Link>
                                <div className="image wow">
                                    <img src={ChooseImage1} alt="image"/>
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        to="/page-portfolio-details">Sustainable
                                        Marketing
                                        Plan</Link>
                                </h4>
                                <h5 className="text-white">Marketing Design</h5>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="portfolio-eight__item item-three">
                                <Link to="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long"></i></Link>
                                <div className="image wow">
                                    <img src={ChooseImage4} alt="image"/>
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        to="/page-portfolio-details">Sustainable
                                        Business
                                        Plan</Link>
                                </h4>
                                <h5 className="text-white">Business Plan</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="portfolio-eight__item item-four">
                                <Link to="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long"></i></Link>
                                <div className="image wow">
                                    <img src={ChooseImage3} alt="image"/>
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        to="/page-portfolio-details">Branding
                                        Design</Link>
                                </h4>
                                <h5 className="text-white">Marketing</h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="portfolio-eight__item item-five">
                                <Link to="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long"></i></Link>
                                <div className="image wow">
                                    <img src={ChooseImage5} alt="image"/>
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        to="/page-portfolio-details">Counselling
                                        Business</Link>
                                </h4>
                                <h5 className="text-white">Marketing</h5>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="portfolio-eight__item item-six">
                                <Link to="/page-portfolio-details" className="arry-btn"><i
                                        className="fa-light fa-arrow-right-long"></i></Link>
                                <div className="image wow">
                                    <img src={ChooseImage6} alt="image"/>
                                </div>
                                <h4 className="text-white mt-20 mb-10"><Link className="hover-link-light"
                                        to="/page-portfolio-details">Marketing
                                        Promotion</Link>
                                </h4>
                                <h5 className="text-white">Branding</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Portfolio;
