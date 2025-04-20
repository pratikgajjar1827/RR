import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 
function FunfactSection({ className }) {
    const countOffer = 50;
    const countOffer2 = 90;
    const countOffer3 = 190;
    const countOffer4 = 320;
    return (
        
        <section className={`funfact-area pt-80 pb-80 ${className || ''}`}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-xxl-3">
                        <div className="funfact__item">
                            <ul className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <li><i className="fa-light fa-plus"></i> Consultation Services</li>
                                <li><i className="fa-light fa-plus"></i> Spatial Design</li>
                                <li><i className="fa-light fa-plus"></i> Idea Generation</li>
                            </ul>
                            <h2><span className="count"><CounterUp count={countOffer} time={3} /></span>+</h2>
                            <h5 className="color-light wow splt-txt" data-splitting>Happy Customers</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <div className="funfact__item">
                            <ul className="wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <li><i className="fa-light fa-plus"></i> Consultation</li>
                                <li><i className="fa-light fa-plus"></i> Space Design</li>
                                <li><i className="fa-light fa-plus"></i> Idea Development</li>
                            </ul>
                            <h2><span className="count"><CounterUp count={countOffer2} time={3} /></span></h2>
                            <h5 className="color-light wow splt-txt" data-splitting>Global Clients</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <div className="funfact__item">
                            <ul className="wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <li><i className="fa-light fa-plus"></i> Design Refinement</li>
                                <li><i className="fa-light fa-plus"></i> 3D Rendering</li>
                                <li><i className="fa-light fa-plus"></i> Project Coordination</li>
                            </ul>
                            <h2><span className="count"><CounterUp count={countOffer3} time={3} /></span>+</h2>
                            <h5 className="color-light wow splt-txt" data-splitting>Completed Projects</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <div className="funfact__item">
                            <ul className="wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <li><i className="fa-light fa-plus"></i> Furniture Selection and Acquisition</li>
                                <li><i className="fa-light fa-plus"></i> Lighting Planning</li>
                                <li><i className="fa-light fa-plus"></i> Custom Design Features</li>
                            </ul>
                            <h2><span className="count"><CounterUp count={countOffer4} time={3} /></span>k</h2>
                            <h5 className="color-light wow splt-txt" data-splitting>Company Revenue</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunfactSection;
