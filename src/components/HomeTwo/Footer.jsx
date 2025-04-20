import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/images/logo/logo-light.png';

function FooterTwo({ className }) {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Email:", email);
        // Add form submission logic here
    };

    return (

    <footer className={`footer-two-area pt-130 ${className || ''}`}>
        <div className="container">
            <div className="footer-two__wrp">
                <div className="footer-two__top">
                    <h2 className="title"><Link to="/contact">Get in Touch<i className="fa-thin fa-arrow-up-right"></i></Link>
                    </h2>
                </div>
                <div className="footer-two__item-wrp">
                    <div className="row g-5">
                        <div className="col-sm-6 col-xl-3">
                            <div className="footer-two__item">
                                <Link to="/" className="logo">
                                    <img src={logoLight} alt="logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-5">
                            <div className="footer-two__item-adress">
                                <h4 className="title">Address</h4>
                                <ul>
                                    <li>
                                        <h4 className="adress-text"><Link to="#0">2464 Royal Ln. Mesa, New Jersey 45463</Link>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="adress-text"><a href="#0">(000) 222-0000</a></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-2">
                            <div className="footer-two__item">
                                <h4 className="title">Useful Links</h4>
                                <ul>
                                    <li><Link to="#0">About</Link></li>
                                    <li><Link to="#0">Services</Link></li>
                                    <li><Link to="#0">Blog</Link></li>
                                    <li><Link to="#0">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-2">
                            <div className="footer-two__item">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li><Link to="#0">FAQS</Link></li>
                                    <li><Link to="#0">Term & Conditions</Link></li>
                                    <li><Link to="#0">Privacy policy</Link></li>
                                    <li><Link to="#0">Help</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-two__bottom">
                    <div className="socials">
                        <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fa fa-x"></i></Link>
                        <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                    </div>
                    <p className="text">&copy; 2025 Stratify is Proudly Powered by <Link to="#0">ThemeMascot</Link></p>
                </div>
            </div>
        </div>
        <div className="footer-two__rectangle-left">
            <div className="item-one wow animated"/>
            <div className="item-two wow animated"/>
            <div className="item-three wow animated"/>
        </div>
        <div className="footer-two__rectangle-right">
            <div className="item-one wow animated"/>
            <div className="item-two wow animated"/>
            <div className="item-three wow animated"/>
        </div>
    </footer>
    );
}

export default FooterTwo;
