import React from 'react';
import Accordion2 from '../../lib/Accordion2.jsx'; 
import FaqImage1 from '../../assets/images/faq/faq-eight-image.jpg';

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
                            <Accordion2 />
                            <h5>
                                <a href="/page-faq" className="faq-btn hover-link mt-30">Check More Questions Now
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1095_37691)">
                                            <path
                                                d="M28.8083 14.0351L22.2176 7.44426C21.9808 7.1678 21.5647 7.13557 21.2883 7.37238C21.0118 7.60914 20.9796 8.02521 21.2164 8.30167C21.2385 8.32744 21.2625 8.35151 21.2883 8.37354L26.752 13.8439H0.659059C0.295092 13.8439 0 14.139 0 14.503C0 14.8671 0.295092 15.1621 0.659059 15.1621H26.752L21.2883 20.6258C21.0118 20.8626 20.9796 21.2787 21.2164 21.5551C21.4532 21.8316 21.8692 21.8638 22.1457 21.627C22.1715 21.6049 22.1955 21.5809 22.2176 21.5551L28.8084 14.9643C29.0639 14.7073 29.0639 14.2922 28.8083 14.0351Z"
                                                fill="#121C27" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1095_37691">
                                                <rect width="29" height="29" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faqs;
