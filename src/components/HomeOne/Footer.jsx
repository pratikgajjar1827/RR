import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoShape from '../../assets/images/shape/footer-shape-left.png';
import logoLight from '../../assets/images/logo/logo-light.png';

function FooterHomeOne({ className }) {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Email:", email);
        // Add form submission logic here
    };

    return (


<footer className={`footer-area ${className || ''}`}>
    <div className="footer__shape-left">
        <img src={logoShape} alt="shape"/>
    </div>
    <div className="container">
        <div className="footer__wrp pt-130 pb-130">
            <div className="footer__left">
                <Link to="/" className="logo">
                    <img src={logoLight} alt="logo"/>
                </Link>
                <p className="mt-30">We are professional organization that offers specialized expertise advice.</p>
            </div>
            <div className="footer__right">
                <div className="footer__item-wrp">
                    <div className="footer__item">
                        <h4 className="title">Service</h4>
                        <ul>
                            <li><Link to="#0">UI Design</Link></li>
                            <li><Link to="#0">Web Design</Link></li>
                            <li><Link to="#0">Branding</Link></li>
                            <li><Link to="#0">WebFlow</Link></li>
                            <li><Link to="#0">Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h4 className="title">Company</h4>
                        <ul>
                            <li><Link to="#0">Home</Link></li>
                            <li><Link to="#0">About Us</Link></li>
                            <li><Link to="#0">Services</Link></li>
                            <li><Link to="#0">Career</Link></li>
                            <li><Link to="#0">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer__item-last">
                        <h4 className="title">Newsletter</h4>
                        <p>Feel free to reach out if you want to collaborate with us, or simply chat.</p>
                        <div className="mailUs mt-30">
                            <span><i className="fa-light fa-envelope"></i></span>
                            <input type="email" placeholder="Enter your email"/>
                            <button><i className="fa-sharp fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
                <div className="footer__item-wrp mt-80">
                    <div className="footer__item">
                        <h4 className="title">New York</h4>
                        <ul>
                            <li><Link to="#0">2464 Royal Ln. Mesa, New Jersey 45463</Link></li>
                            <li><a href="#0">(000) 222-0000
                                    info@yourwebsite.com</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h4 className="title">London</h4>
                        <ul>
                            <li><Link to="#0">1901 Thornridge Cir. Shiloh, Hawaii 81063</Link></li>
                            <li><a href="#0">(229) 555-0109
                                    info@yourwebsite.com</a></li>
                        </ul>
                    </div>
                    <div className="footer__item-last">
                        <h4 className="title">Follow Us</h4>
                        <div className="socials">
                            <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fa fa-x"></i></Link>
                            <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer__copyright">
        <div className="container">
            <div
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
                <p>&copy; 2025 <Link to="#0">ThemeMascot</Link> Agency</p>
                <Link to="#0" className="policy">Privacy & Cookie Policy</Link>
            </div>
        </div>
    </div>
    <div className="footer__rectangle">
        <div className="item wow"></div>
        <div className="item-dark wow"></div>
    </div>
</footer>
    );
}

export default FooterHomeOne;
