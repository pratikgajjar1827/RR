import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import CounterUp from '../../lib/CounterUp.jsx'; 
import ProgressBar from '../../lib/ProgressBar';
import VideoImage1 from '../../assets/images/bg/choose-four-bg-image.jpg'; 
import VideoImage2 from '../../assets/images/choose/choose-four-image.jpg'; 

function VideoSection({ className }) {
    const countOffer = 25;
    const [isOpen, setOpen] = useState(false);
    return (
        <section className={`choose-four-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="choose-four__wrp">
                    <div className="section-header text-center mb-50">
                        <h2 className="wow splt-txt text-white" data-splitting>Let's make something great work together.
                            <br />
                            Got a
                            project
                            in mind?
                        </h2>
                    </div>
                    <div className="choose-four__video mb-100">
                        <img src={VideoImage2} alt="image"/>
                        <div className="choose-four__video-btn">
                            <div className="btn-video video-pulse">
                                <a className="video-popup" onClick={() => setOpen(true)}><i
                                    className="fa-sharp fa-solid fa-play"></i></a>
                            </div>
                            <h4>Click to Watch</h4>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                        <h2 className="title">WATCH VIDEO</h2>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-four-left">
                                <div className="item">
                                    <h2 className="info"><span className="count"><CounterUp count={countOffer} time={3} /></span>k+</h2>
                                    <h3 className="wow text-white mt-20 splt-txt" data-splitting>Customers are served behind
                                        the
                                        digital marketing</h3>
                                    <p className="text-white mt-15">Stratify provides comprehensive consultancy and training
                                        services, specializing
                                        in data-driven solutions.</p>
                                    <Link to="/page-about" className="btn-two-light mt-50" data-splitting
                                        data-text="Learn More">Learn
                                        More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-four-right">
                                <ProgressBar title="Business Planning" targetPercentage={56} />
                                <ProgressBar title="Financial Management" targetPercentage={85} />
                                <ProgressBar title="Market Analysis" targetPercentage={69} />
                                <p className="text mt-50">Stratify offers a comprehensive range of consultancy and training
                                    methods in data analysis, business consultation, and
                                    strategic business solutions, providing valuable opportunities for new ventures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-four__bg">
                <img src={VideoImage1} alt="bg-image"/>
            </div>
            <div className="choose-four__rectangle">
                <div className="item wow"/>
                <div className="item-dark wow"/>
            </div>
        </section>
    );
}

export default VideoSection;
