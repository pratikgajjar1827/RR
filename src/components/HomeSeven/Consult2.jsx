import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar2 from '../../lib/ProgressBar2';
import ConsultImage1 from '../../assets/images/consult/consult-seven-image.jpg';
import ConsultImage2 from '../../assets/images/icon/consult-seven-icon.png';
import ConsultImage3 from '../../assets/images/consult/experience-bar.png';

function Consult({ className }) {
    return (


        <section className={`consult-seven-area mt-130 ml-80 ${className || ''}`}>
            <div className="row g-0">
                <div className="col-xl-6">
                    <div className="consult__image wow">
                        <img src={ConsultImage1} alt="image"/>
                        <div className="icon">
                            <img className="animation__sunMove" src={ConsultImage2} alt="icon"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="consult-left">
                        <div className="section-header">
                            <h6>WHO WE ARE</h6>
                            <h2 className="wow splt-txt" data-splitting>We're building the future together—join us!</h2>
                            <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our finance advisor
                                service offers personalized financial planning services tailored to your unique goals
                                and
                                circumstances.
                            </p>
                        </div>

                        <div className="about__item about__content light p-0">
                            <ul>
                                <li className="fw-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Optimized cash flow management for retail chain
                                </li>
                                <li className="fw-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Financial restructuring for business turnaround
                                </li>
                                <li className="fw-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Comprehensive tax strategy for a growing start-up
                                </li>
                                <li className="fw-400">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                                            fill="white" />
                                    </svg>
                                    Assessment Report Analysis
                                </li>
                            </ul>
                            <Link to="/page-about" className="btn-one mt-10" data-splitting
                                data-text="Discover More">Discover
                                More</Link>
                        </div>

                        <div className="consult__experience mt-60 mb-60">
                            <h4 className="mb-20 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Success
                            </h4>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We are constantly
                                evolving, learning, and enhancing our capabilities, and our growth is
                                ongoing. Reaching the milestone
                                of completing 200 projects is a testament to our progress.</p>
                                <ProgressBar2 title="Project Complete" targetPercentage={55} />
                                <ProgressBar2 title="Happy Clients" targetPercentage={93} />
                                <ProgressBar2 title="Our Company Growth" targetPercentage={67} />
                        </div>

                        <div className="consult__experience-bar">
                            <h4 className="mb-20 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Economic
                                Graph</h4>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We are
                                ever-evolving, constantly learning, and enhancing our capabilities, with growth
                                being a continuous journey.
                                Reaching the milestone of completing 200 projects highlights.</p>
                            <div className="image wow fadeInLeft mt-30" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <img src={ConsultImage3} alt="image"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Consult;
