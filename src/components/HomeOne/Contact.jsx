import React from 'react';
import "swiper/css";
// Importing images
import ContactImage1 from '../../assets/images/contact/contact-image.jpg';

function Contact({ className }) {
    return (
        <section id="contacts" className={`contact-area ${className || ''}`} style={{ backgroundImage: `url(${ContactImage1})` }}>
            <div className="contact__wrp">
                <div className="contact__form">
                    <div className="section-header mb-50">
                        <h2 className="wow splt-txt" data-splitting>Call us for any inquiry and <br /> get in touch with us </h2>
                    </div>
                    <form action="#0">
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <input type="text" placeholder="Your Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="email" placeholder="Email Address"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" placeholder="Phone"/>
                            </div>
                            <div className="col-sm-6">
                                <select name="#" id="subject">
                                    <option value="0">Choose Our Service</option>
                                    <option value="2">UI/UX Design</option>
                                    <option value="2">Workflow Analysis</option>
                                    <option value="3">Web Developer</option>
                                    <option value="4">Marketing Manager</option>
                                    <option value="5">Electrical Engineer</option>
                                    <option value="6">Web Designer</option>
                                    <option value="7">Financial Advice</option>
                                </select>
                            </div>
                        </div>
                        <textarea className="mt-4 rounded-0" name="masage" id="masage" placeholder="Write a Message"></textarea>
                        <button className="btn-one mt-50" data-splitting data-text="Submit Now">Submit Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
