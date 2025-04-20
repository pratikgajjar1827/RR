import React, { useState } from 'react';
import ProgressBar from '../../lib/ProgressBar';
import ModalVideo from 'react-modal-video';
import VideoImage1 from '../../assets/images/video/video-nine-image.jpg'; 
import VideoBgImage from '../../assets/images/bg/video-nine-bg-right.jpg'; 

function AboutSection() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="project" className="video-nine-aera">
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="video-nine__image gsap__parallax wow">
                        <img src={VideoImage1} alt="image"/>
                        <div className="btn-video video-pulse">
                            <a className="video-popup" onClick={() => setOpen(true)}><i
                                    className="fa-sharp fa-light fa-play"></i></a>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="video-nine__item" style={{ backgroundImage: `url(${VideoBgImage})` }}>
                        <div className="section-header mb-30">
                            <h6 className="text-white">30 Years of Growing Together with Our Clients</h6>
                            <h2 className="wow text-white splt-txt" data-splitting>Scale, grow, and optimize as Quickly as
                                you need to.
                            </h2>
                        </div>
                        <ProgressBar title="Business Planning" targetPercentage={56} />
                        <ProgressBar title="Financial Management" targetPercentage={85} />
                        <ProgressBar title="Market Analysis" targetPercentage={69} />
                        <p className="text mt-30">Stratify offers a comprehensive range of consultancy and training
                            methods in data analysis, business consultation, and
                            strategic business solutions, providing valuable opportunities for new ventures.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutSection;
