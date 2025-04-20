import React, { useState } from "react";
import ServiceImage1 from '../../assets/images/service/service-seven-image1.jpg';
import ServiceImage2 from '../../assets/images/service/service-seven-image2.jpg';
import ServiceImage3 from '../../assets/images/service/service-seven-image3.jpg';
import ServiceImage4 from '../../assets/images/service/service-seven-image4.jpg';
import ServiceImage5 from '../../assets/images/service/service-seven-image5.jpg';

function ServicesSection({ className }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const tabs = [
        { id: 1, label: "Information Collection", image: ServiceImage1 },
        { id: 2, label: "Projection Report Analysis", image: ServiceImage2 },
        { id: 3, label: "Corporate Business Design", image: ServiceImage3 },
        { id: 4, label: "Design Consulting", image: ServiceImage4 },
        { id: 5, label: "Residential Business", image: ServiceImage5 }
    ];

    return (
        <section id="services" className={`service-seven-area pt-130 pb-130 ${className || ''}`}>
            <div className="container">
                <div className="service-seven__wrp">
                    <div className="section-header text-center mb-50">
                        <h5>SINCE 1970</h5>
                        <h2>What We Can Offer</h2>
                    </div>
                    <div className="row g-4 g-xl-0 align-items-center justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="service-seven__tab">
                                <ul className="nav nav-tabs">
                                    {tabs.map(tab => (
                                        <li className="nav-item" key={tab.id}>
                                            <button
                                                className={activeIndex === tab.id ? "nav-link active" : "nav-link"}
                                                onClick={() => handleOnClick(tab.id)}
                                            >
                                                {tab.label} <i className="fa-light fa-arrow-up-right"></i>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="tab-content">
                                {tabs.map(tab => (
                                    <div key={tab.id} className={activeIndex === tab.id ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="service-seven__image">
                                            <img src={tab.image} alt={tab.label} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <div className="service-seven__content">
                                <h3>Revamping Your Business with A Fresh Style</h3>
                                <p>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form, by injected humour, or words which don't look even.</p>
                                <div className="pricing-five__item p-0 border-0">
                                    <ul>
                                        <li><i className="fa-light fa-check"></i> Seasoned and Skilled Engineers</li>
                                        <li><i className="fa-light fa-check"></i> Dedicated to Exceptional Customer Service</li>
                                        <li><i className="fa-light fa-check"></i> Dedicated to Easing the Stress of Your Project</li>
                                        <li><i className="fa-light fa-check"></i> Adaptable to Any Building Structure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
