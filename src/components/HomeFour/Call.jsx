import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background/8.jpg';

function CallToActionTwo({ className }) {
    return (
        <section
            className={`call-to-action-two pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="outer-box wow fadeIn" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                    <div className="title-box">
                        <h3 className="title">
                            We’re Optimists Who Love to <br /> Work Together
                        </h3>
                    </div>
                    <div className="btn-box">
                        <Link to="/services" className="theme-btn btn-style-two hvr-light">
                            <span className="btn-title">More Services</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToActionTwo;
