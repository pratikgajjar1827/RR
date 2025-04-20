import React from 'react';
import ProgressBar from '../../lib/ProgressBar';
import ConsultImage1 from '../../assets/images/consult/experience-bar.png';
import ConsultImage2 from '../../assets/images/consult/consult-image.jpg';
import ConsultImage3 from '../../assets/images/icon/consult-icon.png';

function Consult({ className }) {
    return (
        <section id="services" className={`consult-area ${className || ''}`}>
            <div className="row g-0">
                <div className="col-xl-6 order-2 order-xl-1">
                    <div className="consult-left">
                        <div className="section-header">
                            <h2 className="wow splt-txt" data-splitting>A thriving business with Genuine professional</h2>
                            <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Practicality might
                                seem like an obvious and fundamental requirement
                                for successful
                                leadership. After all, <span className="fw-600">without the
                                    necessary skills to strategically</span> plan and effectively manage the processes
                                that
                                transform ideas into tangible outcomes,
                                even the most visionary concepts can fail to materialize.</p>
                        </div>
                        <div className="consult__service mt-60">
                            <ul className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <li><i className="fa-light fa-plus"></i>Innovative</li>
                                <li><i className="fa-light fa-plus"></i>Analytics</li>
                                <li><i className="fa-light fa-plus"></i>User Experience</li>
                                <li><i className="fa-light fa-plus"></i>Promotion</li>
                            </ul>
                            <div className="consult-count wow fadeInRight" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="head">
                                    <h2><span>15</span>+</h2>
                                    <h5>Years of <br /> Experience</h5>
                                </div>
                                <p className="mt-50">Embracing the genius-founder myth can constrain our sense of potential,
                                    setting a
                                    limit on what we believe we are
                                    capable of achieving.</p>
                            </div>
                        </div>
                        <div className="consult__experience mt-60 mb-60">
                            <h4 className="mb-20 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Success
                            </h4>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We are constantly
                                evolving, learning, and enhancing our capabilities, and our growth is
                                ongoing. Reaching the milestone
                                of completing 200 projects is a testament to our progress.</p>
                                <ProgressBar title="Project Complete" targetPercentage={55} />
                                <ProgressBar title="Happy Clients" targetPercentage={93} />
                                <ProgressBar title="Our Company Growth" targetPercentage={67} />
                        </div>
                        <div className="consult__experience-bar">
                            <h4 className="mb-20 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Our Economic
                                Graph</h4>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">We are
                                ever-evolving, constantly learning, and enhancing our capabilities, with growth
                                being a continuous journey.
                                Reaching the milestone of completing 200 projects highlights.</p>
                            <div className="image wow fadeInLeft mt-30" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <img src={ConsultImage1} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 order-1 order-xl-2">
                    <div className="consult__image wow">
                        <img src={ConsultImage2} alt="image"/>
                        <div className="icon">
                            <img className="animation__sunMove" src={ConsultImage3} alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Consult;
