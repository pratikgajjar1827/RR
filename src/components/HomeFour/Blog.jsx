import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import News1 from '../../assets/images/blog/blog-three-image1.jpg';
import News2 from '../../assets/images/blog/blog-three-image2.jpg';
import News3 from '../../assets/images/blog/blog-three-image3.jpg';
import News4 from '../../assets/images/blog/blog-three-image4.jpg';


function NewsSection({ className }) {
    return (
        <section id="news" className={`blog-three-area pb-130 ${className || ''}`}>
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>Our Blog</h6>
                    <h2 className="wow splt-txt" data-splitting>Check Latest Blog Post <br /> from Blog List</h2>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="blog-three__item">
                            <ul>
                                <li>Branding</li>
                                <li className="date">May 15, 2025</li>
                            </ul>
                            <div className="image">
                                <img src={News1} alt="image"/>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link to="/news-details">Consulting Industry Evolves to Meet
                                        Changing Business
                                        Landscape</Link>
                                </h4>
                                <Link to="/news-details" className="readMore-btn">Read More <i
                                        className="fa-regular fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-three__item">
                            <ul>
                                <li>Consulting</li>
                                <li className="date">May 20, 2025</li>
                            </ul>
                            <div className="image">
                                <img src={News2} alt="image"/>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link to="/news-details">Stratify Agency transforms the way we work
                                        through the power of AI</Link>
                                </h4>
                                <Link to="/news-details" className="readMore-btn">Read More <i
                                        className="fa-regular fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="blog-three__item">
                            <ul>
                                <li>Business</li>
                                <li className="date">May 25, 2025</li>
                            </ul>
                            <div className="image">
                                <img src={News3} alt="image"/>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link to="/news-details">Common UX pinpoints in Dashboard related
                                        projects.</Link>
                                </h4>
                                <Link to="/news-details" className="readMore-btn">Read More <i
                                        className="fa-regular fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="blog-three__item">
                            <ul>
                                <li>Strategy</li>
                                <li className="date">May 30, 2025</li>
                            </ul>
                            <div className="image">
                                <img src={News4} alt="image"/>
                            </div>
                            <div className="content">
                                <h4 className="mt-10"><Link to="/news-details">Creating innovative strategies for
                                        exceptional
                                        future
                                        outcomes.</Link>
                                </h4>
                                <Link to="/news-details" className="readMore-btn">Read More <i
                                        className="fa-regular fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsSection;
