import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import News1 from '../../assets/images/blog/blog-image1.jpg';
import News2 from '../../assets/images/blog/blog-image2.jpg';
import News3 from '../../assets/images/blog/blog-image3.jpg';


function NewsSection({ className }) {
    return (
        <section id="news" className={`blog-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="blog__item">
                            <div className="blog__image">
                                <img src={News1} alt="image"/>
                                <img src={News1} alt="image"/>
                            </div>
                            <div className="blog__content">
                                <ul>
                                    <li>Branding</li>
                                    <li className="date">May 15, 2025</li>
                                </ul>
                                <h4><Link to="/news-details">Creating innovative strategies for exceptional future
                                        outcomes.</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog__item">
                            <div className="blog__image">
                                <img src={News2} alt="image"/>
                                <img src={News2} alt="image"/>
                            </div>
                            <div className="blog__content">
                                <ul>
                                    <li>Design Trends</li>
                                    <li className="date">May 25, 2025</li>
                                </ul>
                                <h4><Link to="/news-details">Stratify Agency transforms the way we work through the
                                        power of AI-driven innovation.</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="blog__item">
                            <div className="blog__image">
                                <img src={News3} alt="image"/>
                                <img src={News3} alt="image"/>
                            </div>
                            <div className="blog__content">
                                <ul>
                                    <li>Marketing</li>
                                    <li className="date">May 30, 2025</li>
                                </ul>
                                <h4><Link to="/news-details">Common UX pinpoints in Dashboard-related projects.</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
