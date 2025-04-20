import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../../assets/images/logo/logo-dark.png';

function FooterTwo({ className }) {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Email:", email);
        // Add form submission logic here
    };

    return (

        <footer className="footer-six-area">
            <div className="footer-six__wrp">
                <div className="container">
                    <div className="row g-5 g-lg-4">
                        <div className="col-lg-6 col-xl-3 col-xxl-4">
                            <div className="footer-six__item">
                                <Link to="/" className="logo">
                                    <img src={logoDark} alt="logo"/>
                                </Link>
                                <p className="mt-30">We are professional organization that offers <br /> specialized expertise
                                    advice.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 col-xxl-3">
                            <div className="footer-six__item address">
                                <h4 className="title">Address</h4>
                                <ul>
                                    <li><Link to="#0">4140 Parker Rd. Allentown, <br /> New Mexico 31134</Link></li>
                                    <li><Link to="#0">(000) 222-0000</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-2 col-xxl-2">
                            <div className="footer-six__item">
                                <h4 className="title">Service</h4>
                                <ul>
                                    <li><Link to="#0">About Us</Link></li>
                                    <li><Link to="#0">Our Team</Link></li>
                                    <li><Link to="#0">Pricing Plans</Link></li>
                                    <li><Link to="#0">Get In Touch</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-2 col-xxl-2">
                            <div className="footer-six__item">
                                <h4 className="title">Useful links</h4>
                                <ul>
                                    <li><Link to="#0">Privacy & Terms</Link></li>
                                    <li><Link to="#0">FAQ Page</Link></li>
                                    <li><Link to="#0">Help Center</Link></li>
                                    <li><Link to="#0">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-2 col-xxl-1">
                            <div className="footer-six__item">
                                <h4 className="title">Follow Us</h4>
                                <ul>
                                    <li><Link to="#0">Facebook</Link></li>
                                    <li><Link to="#0">Instagram</Link></li>
                                    <li><Link to="#0">LinkedIn</Link></li>
                                    <li><Link to="#0">YouTube</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-six__copyright">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
                        <p>&copy; 2025 <Link to="#0">ThemeMascot</Link> All Rights Reserved.</p>
                        <Link to="#0" className="policy">Privacy & Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterTwo;
