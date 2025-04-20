import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/images/logo/logo-light.png';

function FooterHomeFour({ className }) {

    return (
        <footer className={`footer-four-area ${className || ''}`}>
            <div className="row g-0">
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <Link to="/" className="logo">
                                <img src={logoLight} alt="logo"/>
                            </Link>
                            <p className="text">We are professional organization that offers specialized expertise advice.
                            </p>
                        </div>
                        <div className="bottom">
                            <p className="copyright-text">&copy; 2025 <Link to="#">Theme Mascot</Link>, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <h5 className="title">CONTACT INFO</h5>
                        </div>
                        <div className="bottom">
                            <ul>
                                <li><Link to="#0">Contact Us</Link></li>
                                <li><Link to="#0">About Us</Link></li>
                                <li><Link to="#0">Our Impact</Link></li>
                                <li><Link to="#0">Our Values</Link></li>
                                <li><Link to="#0">Resources</Link></li>
                                <li><Link to="#0">Videos</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <h5 className="title">USEFUL LINKS</h5>
                        </div>
                        <div className="bottom">
                            <ul>
                                <li>
                                    <Link to="#0">Audit & Assurance</Link>
                                </li>
                                <li><Link to="#0">Consulting</Link></li>
                                <li><Link to="#0">Risk Advisory</Link></li>
                                <li><Link to="#0">Financial Advisory</Link></li>
                                <li><Link to="#0">Legal</Link></li>
                                <li><Link to="#0">Tax</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="footer-four__item">
                        <div className="top">
                            <h5 className="title">CONNECT</h5>
                        </div>
                        <div className="bottom">
                            <ul>
                                <li>
                                    <h5 className="address-text">Address</h5>
                                    <Link to="#0">2464 Royal Ln. Mesa, New Jersey 45463</Link>
                                    <h5 className="address-text">(000) 222-0000</h5>
                                </li>
                            </ul>
                            <div className="socials">
                                <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fa-brands fa-tumblr"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeFour;
