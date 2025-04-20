import React from 'react';
import ContactImage1 from '../../assets/images/contact/contact-nine-image.jpg';
import ContactImage2 from '../../assets/images/contact/logo.png';

function ContactSection({ className }) {
    return (
        <section id="contacts" className={`contact-nine-area ${className || ''}`}>
            <div className="container">
                <div className="contact-nine__wrp">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="contact-four__image wow">
                                <img src={ContactImage1} alt="image"/>
                                <div className="content">
                                    <h4 className="text wow splt-txt" data-splitting>An insightful consulting firm with an
                                        engaged team, providing
                                        solutions that
                                        blend
                                        analytics.</h4>
                                    <div className="info">
                                        <div>
                                            <h5 className="text-white">Robert Fox</h5>
                                            <span className="text-white">Founder & CEO</span>
                                        </div>
                                        <img className="logo" src={ContactImage2} alt="logo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-four__form">
                                <div className="section-header mb-40">
                                    <h6>Let's connect</h6>
                                    <h2 className="wow splt-txt" data-splitting>We’re here to help</h2>
                                    <p className="mt-3">Need help with a project or have a question about our work? We're
                                        here for you.
                                    </p>
                                </div>
                                <form action="#0">
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email Address"/>
                                    <textarea name="masage" id="masage" placeholder="Message"></textarea>
                                    <button className="btn-one rounded-0 w-100" data-splitting data-text="Submit Now">Submit
                                        Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle">
                        <div className="item wow"></div>
                        <div className="item-dark wow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
