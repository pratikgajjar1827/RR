import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaqImage1 from '../../assets/images/faq/faq-one-bg.png';
import FaqImage2 from '../../assets/images/faq/faq-one-image.png';
import Accordion2 from '../../lib/Accordion2.jsx'; 

function FaqsSection() {
    const [trackingId, setTrackingId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle tracking here
        console.log('Tracking ID:', trackingId);
        console.log('Email:', email);
    };

    return (

        <section className="faq-one-area pt-130 pb-100"> 
            <div className="faq-one__bg">
                <img src={FaqImage1} alt="image"/>
            </div>
            <div className="faq-one__image">
                <img className="animation__arryLeftRight" src={FaqImage2} alt="image"/>
            </div>
            <div className="container">
                <div className="faq-one__wrp">
                    <div className="row g-5 g-lg-4 justify-content-between">
                        <div className="col-lg-4">
                            <div className="faq-one-left">
                                <div className="section-header">
                                    <h6>FREQUENTLY ASKED QUESTIONS</h6>
                                    <h2 className="wow splt-txt" data-splitting>Curious about something?
                                        Just ask us!
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Stratify is
                                        here to address all your business and consultancy-related questions.
                                        If you have inquiries beyond what’s <br />
                                        listed, feel free to email us!</p>
                                </div>
                                <Link to="/page-faq" className="btn-two wow fadeInUp mt-50" data-wow-delay="200ms"
                                    data-wow-duration="1500ms" data-splitting data-text="Browse More">Browse
                                    More</Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="faq-one__accordion">
                                <div className="section-header mb-30">
                                    <h6>To know more about us</h6>
                                    <h2 className="wow splt-txt" data-splitting>Frequently Asked Questions</h2>
                                </div>
                                <Accordion2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqsSection;
