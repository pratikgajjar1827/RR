import React from 'react';
import Accordion4 from '../../lib/Accordion4.jsx'; 
import FaqImage1 from '../../assets/images/faq/faq-five-image.jpg';

function Faqs({ className }) {
    return (
        <section className={`faq-area bg-sub ${className || ''}`}>
            <div className="row g-0 align-items-center">
                <div className="col-xl-6">
                    <div className="faq__image wow">
                        <img src={FaqImage1} alt="image"/>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="faq__item">
                        <div className="section-header mb-30">
                            <h6>To know more about us</h6>
                            <h2 className="wow splt-txt" data-splitting>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq__accordion wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <Accordion4 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faqs;
